import React from "react";

import { makeStyles, fade, Theme } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";

const useStyles = makeStyles((theme: Theme) => ({
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto"
    }
  },
  searchIcon: {
    width: theme.spacing(7),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  inputRoot: {
    color: "inherit"
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: 120,
      "&:focus": {
        width: 200
      }
    }
  }
}));

interface Props {
  onChange: (query: string) => void;
  onEnter: () => void;
}

const Search: React.SFC<Props> = props => {
  const classes = useStyles(props);

  return (
    <div className={classes.search}>
      <div className={classes.searchIcon}>
        <SearchIcon data-testid="search-icon" />
      </div>
      <InputBase
        onChange={e => props.onChange(e.target.value)}
        onKeyPress={e => {
          if (e.key === "Enter") {
            props.onEnter();
          }
        }}
        onBlur={props.onEnter}
        placeholder="Search..."
        classes={{
          root: classes.inputRoot,
          input: classes.inputInput
        }}
        inputProps={{ "aria-label": "search" }}
        data-testid="search-input"
      />
    </div>
  );
};

export default Search;
