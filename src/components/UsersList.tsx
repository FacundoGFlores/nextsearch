import React from "react";
import { UserInfo } from "../types/UserInfo";
import Grid from "@material-ui/core/Grid";
import CircularProgress from "@material-ui/core/CircularProgress";
import Typography from "@material-ui/core/Typography";

import UserCard from "./UserCard";

interface Props {
  userList: UserInfo[];
  searching: boolean;
}

const UsersList: React.SFC<Props> = ({ userList, searching }) => {
  if (searching) {
    return (
      <Grid>
        <Typography variant="subtitle1" data-testid="userslist-loader">
          Loading...
        </Typography>{" "}
        <CircularProgress />
      </Grid>
    );
  }
  if (userList.length === 0) {
    return (
      <Typography variant="h6" data-testid="userslist-notfound">
        No users found.
      </Typography>
    );
  }

  return (
    <Grid container>
      {userList.map((user, index) => (
        <UserCard {...user} key={index} />
      ))}
    </Grid>
  );
};

export default UsersList;
