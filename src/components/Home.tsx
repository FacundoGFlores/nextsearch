import React from "react";

import Box from "@material-ui/core/Box";
import PageLayout from "./PageLayout";
import UsersList from "./UsersList";
import UserNavigation from "./UserNavigation";
import { UserInfo } from "../types/UserInfo";

interface Props {
  userList: UserInfo[];
  searching: boolean;
  totalCount: number;
  hasPreviousPage: boolean;
  hasNextPage: boolean;
  onClickLeft: () => void;
  onClickRight: () => void;
}

const Home: React.SFC<Props> = ({ userList, searching, ...userNavProps }) => {
  return (
    <PageLayout>
      {userList.length ? (
        <Box my={2}>
          <UserNavigation searching={searching} {...userNavProps} />
        </Box>
      ) : null}
      <Box my={2}>
        <UsersList userList={userList} searching={searching} />
      </Box>
    </PageLayout>
  );
};

export default Home;
