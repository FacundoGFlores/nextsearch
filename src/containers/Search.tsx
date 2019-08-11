import React from "react";
import { SearchConsumer } from "../providers/Search";
import Search from "../components/Search";

const SearchContainer: React.SFC = () => {
  return (
    <SearchConsumer>
      {({ setQuery, setSearching }) => (
        <Search onChange={setQuery} onEnter={() => setSearching(true)} />
      )}
    </SearchConsumer>
  );
};

export default SearchContainer;
