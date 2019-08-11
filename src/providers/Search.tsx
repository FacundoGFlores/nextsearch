import React, { createContext, useState } from "react";

interface Context {
  query: string;
  searching: boolean;
  setQuery: (q: string) => void;
  setSearching: (s: boolean) => void;
}
const SearchContext = createContext<Context>(null);

const SearchProvider = ({ children }) => {
  const [state, setState] = useState({ query: "", searching: false });

  return (
    <SearchContext.Provider
      value={{
        query: state.query,
        searching: state.searching,
        setQuery: (query: string) => setState({ query, searching: false }),
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
