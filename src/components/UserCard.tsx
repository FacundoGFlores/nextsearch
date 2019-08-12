import React from "react";
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";

import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardMedia from "@material-ui/core/CardMedia";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import { Link, Box } from "@material-ui/core";
import { UserInfo } from "../types/UserInfo";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    card: {
      display: "flex"
    },
    details: {
      display: "flex",
      flexDirection: "column"
    },
    content: {
      flex: "1 0 auto"
    },
    cover: {
      width: "151px",
      height: "151px",
      minWidth: "151px",
      maxHeight: "100%"
    },
    bio: {
      maxWidth: "35%"
    },
    textOverflow: {
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis"
    }
  })
);

const UserCard: React.SFC<UserInfo> = ({
  name,
  bio,
  avatarUrl,
  url,
  followersCount,
  starredCount
}) => {
  const classes = useStyles({});

  return (
    <Box my={1} width="100%">
      <Card className={classes.card}>
        <CardMedia
          className={classes.cover}
          image={avatarUrl}
          title={name}
          data-testid="user-avatar"
        />
        <div className={classes.details}>
          <CardContent className={classes.content}>
            <Link href={url} target="_blank" data-testid="user-link">
              <Typography component="h5" variant="h5">
                {name ? name : "No name"}
              </Typography>
            </Link>
            <div className={classes.bio}>
              <Typography
                variant="subtitle1"
                color="textSecondary"
                data-testid="user-bio"
                className={classes.textOverflow}
              >
                {bio}
              </Typography>
            </div>
            <Grid container>
              <Box my={1}>
                <Grid item>
                  <Typography
                    variant="caption"
                    data-testid="user-followers"
                  >{`Followers: ${followersCount}`}</Typography>
                </Grid>
                <Grid item>
                  <Typography
                    variant="caption"
                    data-testid="user-starred"
                  >{`Starred Repos: ${starredCount}`}</Typography>
                </Grid>
              </Box>
            </Grid>
          </CardContent>
        </div>
      </Card>
    </Box>
  );
};

export default UserCard;
