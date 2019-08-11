import React from "react";
import { Typography } from "@material-ui/core";

interface Props {
  query: string;
}

const UsersList: React.SFC<Props> = ({ query }) => (
  <Typography
    data-testid="users-list"
    variant="h6"
  >{`Searching for: ${query}`}</Typography>
);

export default UsersList;
