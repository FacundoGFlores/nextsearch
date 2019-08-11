import React from "react";

import Box from "@material-ui/core/Box";
import PageLayout from "./PageLayout";
import Welcome from "./Welcome";
import UsersList from "./UsersList";
import { UserInfo } from "../types/UserInfo";
import { Users } from "../fixtures/users";

interface Props {
  userList: UserInfo[];
  searching: boolean;
}

const Home: React.SFC<Props> = ({ userList, searching }) => {
  return (
    <PageLayout>
      <Box my={4}>
        <UsersList userList={userList} searching={searching} />
      </Box>
    </PageLayout>
  );
};

export default Home;
