import React from "react";
import Box from "@material-ui/core/Box";
import { Grid, Fab, Typography } from "@material-ui/core";
import { ArrowLeft, ArrowRight } from "@material-ui/icons";

import TotalCount from "./TotalCount";

interface Props {
  searching: boolean;
  totalCount: number;
  hasPreviousPage: boolean;
  hasNextPage: boolean;
  onClickLeft: () => void;
  onClickRight: () => void;
}

const UserNavigation: React.SFC<Props> = ({
  totalCount,
  hasPreviousPage,
  hasNextPage,
  onClickLeft,
  onClickRight,
  searching
}) => (
  <Grid container direction="row" justify="space-around" alignContent="center">
    <Grid item>
      <Fab
        size="small"
        onClick={onClickLeft}
        disabled={!hasPreviousPage || searching}
        data-testid="arrow-left"
      >
        <ArrowLeft />
      </Fab>
    </Grid>
    <Grid item>
      <Box marginTop={1}>
        {searching ? (
          <Typography variant="caption">...</Typography>
        ) : (
          <TotalCount count={totalCount} />
        )}
      </Box>
    </Grid>
    <Grid item>
      <Fab
        size="small"
        onClick={onClickRight}
        disabled={!hasNextPage || searching}
        data-testid="arrow-right"
      >
        <ArrowRight />
      </Fab>
    </Grid>
  </Grid>
);

export default UserNavigation;
