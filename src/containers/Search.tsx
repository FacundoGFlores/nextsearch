import React from "react";
import { SearchConsumer } from "../providers/Search";
import Search from "../components/Search";

const SearchContainer: React.SFC = () => {
  return (
    <SearchConsumer>
      {({ setQuery, search }) => (
        <Search onChange={setQuery} onEnter={search} />
      )}
    </SearchConsumer>
  );
};

export default SearchContainer;
