import React, { createContext, useState } from "react";
import { UserInfo } from "../types/UserInfo";

interface Context {
  query: string;
  searching: boolean;
  userList: UserInfo[];
  setQuery: (q: string) => void;
  setSearching: (s: boolean) => void;
}
const SearchContext = createContext<Context>(null);

const SearchProvider = ({ children }) => {
  const [state, setState] = useState({
    query: "",
    userList: [],
    searching: false
  });

  return (
    <SearchContext.Provider
      value={{
        query: state.query,
        searching: state.searching,
        userList: state.userList,
        setQuery: (query: string) =>
          setState({ ...state, query, searching: false }),
        setSearching: (searching: boolean) => setState({ ...state, searching })
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
