import React from "react";
import Home from "../components/Home";
import SearchProvider, { SearchConsumer } from "../providers/Search";

const HomeContainer: React.SFC = () => {
  return (
    <SearchProvider>
      <SearchConsumer>
        {({ userList, searching, total }) => (
          <Home userList={userList} searching={searching} totalCount={total} />
        )}
      </SearchConsumer>
    </SearchProvider>
  );
};

export default HomeContainer;
