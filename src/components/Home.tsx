import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

export default function Index() {
  return (
    <Container maxWidth="sm">
      <Box my={4}>
        <Typography
          data-testid="home-title"
          variant="h4"
          component="h1"
          gutterBottom
        >
          Home Page
        </Typography>
      </Box>
      <Box my={4}>
        <Grid container justify="space-between">
          <Grid item>
            <Button
              data-testid="secondary-button"
              variant="contained"
              color="secondary"
            >
              SECONDARY
            </Button>
          </Grid>
          <Grid item>
            <Button
              data-testid="primary-button"
              variant="contained"
              color="primary"
            >
              PRIMARY
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
