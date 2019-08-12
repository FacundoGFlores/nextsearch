import React, { createContext, useState } from "react";
import { useApolloClient } from "@apollo/react-hooks";

import { UserInfo } from "../types/UserInfo";
import UsersSearch from "../../queries/users";
import { NetworkStatus } from "apollo-boost";

interface Context {
  query: string;
  searching: boolean;
  userList: UserInfo[];
  setQuery: (q: string) => void;
  search: () => void;
  error: boolean;
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
    error: false
  });

  const client = useApolloClient();

  const performSearch = async () => {
    if (state.query) {
      setState({ ...state, searching: true, error: false });
      try {
        const { data } = await client.query({
          query: UsersSearch,
          variables: {
            query: state.query,
            after: null,
            before: null
          }
        });
        setState({
          ...state,
          userList: dataTransformer(data.search.edges),
          searching: false
        });
      } catch (e) {
        setState({
          ...state,
          error: true
        });
      }
    }
  };

  return (
    <SearchContext.Provider
      value={{
        query: state.query,
        searching: state.searching,
        userList: state.userList,
        error: state.error,
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
