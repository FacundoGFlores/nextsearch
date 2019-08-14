import React from "react";
import Typography from "@material-ui/core/Typography";

interface Props {
  count: number;
}

const TotalCount: React.SFC<Props> = ({ count }) => (
  <Typography variant="subtitle1" data-testid="total-count">
    {`Users found: ${count}`}
  </Typography>
);

export default TotalCount;
