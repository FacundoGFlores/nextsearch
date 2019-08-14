import React, { createContext, useState } from "react";
import { useApolloClient } from "@apollo/react-hooks";

import { UserInfo } from "../types/UserInfo";
import UsersQuery from "../../queries/users";

interface PageInfo {
  startCursor: string | null;
  endCursor: string | null;
  hasPreviousPage: boolean;
  hasNextPage: boolean;
}

interface Context {
  query: string;
  searching: boolean;
  userList: UserInfo[];
  total: number;
  setQuery: (q: string) => void;
  search: () => void;
  error: boolean;
  onBack: () => void;
  onForward: () => void;
  pageInfo: PageInfo | null;
}
const SearchContext = createContext<Context>(null);

const dataTransformer = (edges: any[]): UserInfo[] => {
  return edges.map(
    ({
      node: { avatarUrl, bio, followers, starredRepositories, name, url }
    }) => ({
      avatarUrl,
      bio,
      followersCount: followers.totalCount,
      starredCount: starredRepositories.totalCount,
      name,
      url
    })
  );
};

const SearchProvider = ({ children }) => {
  const [state, setState] = useState({
    query: "",
    userList: [],
    searching: false,
    error: false,
    total: 0,
    pageInfo: {
      startCursor: null,
      endCursor: null,
      hasPreviousPage: false,
      hasNextPage: false
    },
    cursorStack: []
  });

  const client = useApolloClient();

  const performSearch = async () => {
    if (state.query) {
      setState({
        ...state,
        pageInfo: null,
        total: 0,
        searching: true,
        error: false
      });
      const { data } = await client.query({
        query: UsersQuery,
        variables: {
          query: state.query,
          after: null
        }
      });
      setState({
        ...state,
        pageInfo: data.search.pageInfo,
        total: data.search.userCount,
        userList: dataTransformer(data.search.edges),
        searching: false
      });
    }
  };

  const handleBack = async () => {
    if (state.pageInfo.hasPreviousPage) {
      let existingStack = state.cursorStack;
      existingStack.pop();

      setState({
        ...state,
        pageInfo: null,
        total: 0,
        searching: true,
        error: false,
        cursorStack: existingStack
      });

      const lastCursor =
        existingStack.length > 0
          ? existingStack[existingStack.length - 1]
          : null;

      const { data } = await client.query({
        query: UsersQuery,
        variables: {
          query: state.query,
          after: lastCursor
        }
      });
      setState({
        ...state,
        pageInfo: data.search.pageInfo,
        userList: dataTransformer(data.search.edges),
        searching: false
      });
    }
  };

  const handleForward = async () => {
    if (state.pageInfo.hasNextPage) {
      let existingStack = state.cursorStack;
      existingStack.push(state.pageInfo.endCursor);
      setState({
        ...state,
        pageInfo: null,
        total: 0,
        searching: true,
        error: false,
        cursorStack: existingStack
      });
      const { data } = await client.query({
        query: UsersQuery,
        variables: {
          query: state.query,
          after: state.pageInfo.endCursor
        }
      });
      setState({
        ...state,
        pageInfo: data.search.pageInfo,
        userList: dataTransformer(data.search.edges),
        searching: false
      });
    }
  };

  return (
    <SearchContext.Provider
      value={{
        query: state.query,
        searching: state.searching,
        userList: state.userList,
        error: state.error,
        total: state.total,
        pageInfo: state.pageInfo,
        onBack: handleBack,
        onForward: handleForward,
        setQuery: (query: string) =>
          setState({ ...state, query, searching: false }),
        search: performSearch
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

const SearchConsumer = SearchContext.Consumer;
export { SearchConsumer };
export { SearchContext };
export default SearchProvider;
