import React from "react";
import Home from "../components/Home";
import SearchProvider, { SearchConsumer } from "../providers/Search";

const HomeContainer: React.SFC = () => {
  return (
    <SearchProvider>
      <SearchConsumer>
        {({ userList, searching, total, onBack, onForward, pageInfo }) => (
          <Home
            userList={userList}
            searching={searching}
            totalCount={total}
            onClickLeft={onBack}
            onClickRight={onForward}
            hasPreviousPage={pageInfo ? pageInfo.hasPreviousPage : false}
            hasNextPage={pageInfo ? pageInfo.hasNextPage : false}
          />
        )}
      </SearchConsumer>
    </SearchProvider>
  );
};

export default HomeContainer;
