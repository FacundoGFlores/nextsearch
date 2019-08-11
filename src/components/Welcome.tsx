import React from "react";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";

const Welcome: React.SFC = () => (
  <React.Fragment>
    <Typography
      data-testid="home-title"
      variant="h4"
      component="h1"
      gutterBottom
      align="center"
    >
      Github User Search
    </Typography>
    <Typography
      align="center"
      data-testid="home-description"
      variant="subtitle1"
      gutterBottom
    >
      <span>Using</span>{" "}
      <span>
        <Link
          href="https://developer.github.com/v4/"
          target="_blank"
          data-testid="github-link"
        >
          graphql github api
        </Link>
      </span>{" "}
      <span>to perform users search.</span>
    </Typography>
  </React.Fragment>
);

export default Welcome;
