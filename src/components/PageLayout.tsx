import React from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import { People } from "@material-ui/icons";
import {
  AppBar,
  Container,
  Toolbar,
  Typography,
  IconButton
} from "@material-ui/core";
import Search from "../containers/Search";

const useStyles = makeStyles((theme: Theme) => ({
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1,
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block"
    }
  }
}));

const PageLayout: React.SFC = props => {
  const classes = useStyles(props);

  return (
    <div className={classes.grow}>
      <AppBar>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <People />
          </IconButton>
          <Typography
            className={classes.title}
            variant="h6"
            data-testid="layout-title"
          >
            Next Search
          </Typography>
          <Search />
        </Toolbar>
      </AppBar>
      <Toolbar />
      <Container maxWidth="sm" data-testid="layout-container">
        {props.children}
      </Container>
    </div>
  );
};

export default PageLayout;
