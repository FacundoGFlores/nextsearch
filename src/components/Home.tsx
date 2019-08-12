import React from "react";

import Box from "@material-ui/core/Box";
import PageLayout from "./PageLayout";
import UsersList from "./UsersList";
import { UserInfo } from "../types/UserInfo";
import TotalCount from "./TotalCount";
import { Grid } from "@material-ui/core";

interface Props {
  userList: UserInfo[];
  searching: boolean;
  totalCount: number;
}

const Home: React.SFC<Props> = ({ userList, searching, totalCount }) => {
  return (
    <PageLayout>
      <Box my={2}>
        <Grid container direction="row" justify="center">
          {userList.length ? <TotalCount count={totalCount} /> : null}
        </Grid>
      </Box>
      <Box my={2}>
        <UsersList userList={userList} searching={searching} />
      </Box>
    </PageLayout>
  );
};

export default Home;
