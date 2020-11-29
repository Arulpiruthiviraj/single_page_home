import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  video: {
    height: "400px",
    width: "200px",
  },
});

export default function Video({ video }) {
  const classes = useStyles();
  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        {" "}
        <CardMedia
          component="video"
          src={video}
          title="title"
          className={classes.video}
          autoPlay
          loop
          muted
        />{" "}
      </CardContent>
    </Card>
  );
}
