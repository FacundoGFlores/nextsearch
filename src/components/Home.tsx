import React from "react";

import Box from "@material-ui/core/Box";
import PageLayout from "./PageLayout";
import Welcome from "./Welcome";
import UsersList from "./UsersList";

interface Props {
  query: string;
  searching: boolean;
}

const Home: React.SFC<Props> = ({ query, searching }) => {
  return (
    <PageLayout>
      <Box my={4}>
        {query && searching ? <UsersList query={query} /> : <Welcome />}
      </Box>
    </PageLayout>
  );
};

export default Home;
