import React from "react";
import Home from "../components/Home";
import SearchProvider, { SearchConsumer } from "../providers/Search";

const HomeContainer: React.SFC = () => {
  return (
    <SearchProvider>
      <SearchConsumer>
        {({ query, searching }) => <Home query={query} searching={searching} />}
      </SearchConsumer>
    </SearchProvider>
  );
};

export default HomeContainer;
