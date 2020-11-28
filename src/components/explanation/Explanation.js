import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import SelectMusicImage from "../../assets/images/speaker.svg";
import RecordMulpleClipsImage from "../../assets/images/responsive-design.svg";
import PostImage from "../../assets/images/file-sharing.svg";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    // color: theme.palette.text.secondary,
  },
}));

export default function Explanation() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography
            style={{ fontSize: 50, fontFamily: '"Nerko One", cursive' }}
          >
            The Future Of Music Is Here
          </Typography>
          <Typography
            style={{ fontSize: 40, fontFamily: '"Nerko One", cursive' }}
          >
            Social Music Platform
          </Typography>
        </Grid>
        <Grid item xs={12} sm={4}>
          {/* <Paper className={classes.paper} variant="outlined" elevation={0}> */}{" "}
          <Grid>
            <img
              src={SelectMusicImage}
              alt="Camera"
              style={{
                width: 100,
                height: 100,
                alignItems: "center",
                textAlign: "center",
                justifyContent: "center-end",
              }}
            />
            <Typography variant="h5" component="h5">
              Music
            </Typography>
            <Typography>
              Select your music from Muqo's library or upload a song from your
              Phone
            </Typography>
          </Grid>{" "}
          {/* </Paper> */}
        </Grid>
        <Grid item xs={12} sm={4}>
          {/* <Paper className={classes.paper} variant="outlined" elevation={0}> */}{" "}
          <Grid>
            <img
              src={RecordMulpleClipsImage}
              alt="Camera"
              style={{
                width: 100,
                height: 100,
                alignItems: "center",
                textAlign: "center",
                justifyContent: "center-end",
              }}
            />
            <Typography variant="h5" component="h5">
              Music
            </Typography>
            <Typography>
              Select your music from Muqo's library or upload a song from your
              Phone
            </Typography>
          </Grid>{" "}
          {/* </Paper> */}
        </Grid>
        <Grid item xs={12} sm={4}>
          {/* <Paper className={classes.paper} variant="outlined" elevation={0}> */}{" "}
          <Grid>
            <img
              src={PostImage}
              alt="Camera"
              style={{
                width: 100,
                height: 100,
                alignItems: "center",
                textAlign: "center",
                justifyContent: "center-end",
              }}
            />
            <Typography variant="h5" component="h5">
              Music
            </Typography>
            <Typography>
              Select your music from Muqo's library or upload a song from your
              Phone
            </Typography>
          </Grid>{" "}
          {/* </Paper> */}
        </Grid>
        <Grid container justify="center" xs={12}>
          {/* <Paper className={classes.paper} variant="outlined" elevation={0}> */}
          <Grid item xs={2}>
            <img
              src={RecordMulpleClipsImage}
              alt="Camera"
              style={{
                width: 100,
                height: 100,
              }}
            />
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h5" component="h5">
              efines the align-content style property. It's applied for all
              screen sizes.
            </Typography>
          </Grid>
          {/* </Paper> */}
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>xs=12</Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>xs=12</Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>xs=12 sm=6</Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>xs=12 sm=6</Paper>
        </Grid>
      </Grid>
    </div>
  );
}
