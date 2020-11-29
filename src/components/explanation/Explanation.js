import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import SelectMusicImage from "../../assets/images/speaker.svg";
import RecordMulpleClipsImage from "../../assets/images/responsive-design.svg";
import PostImage from "../../assets/images/file-sharing.svg";
import { ReactComponent as GooglePlayLogo } from "../../assets/images/google-play-badge.svg";
import { ReactComponent as AppStoreLogo } from "../../assets/images/app-store-badge.svg";
import SvgIcon from "@material-ui/core/Icon";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    // color: theme.palette.text.secondary,
  },
  appBarAppStore: {
    fontSize: 120,
    justifyContent: "flext-end",
  },
}));

export default function Explanation() {
  const classes = useStyles();
  const preventDefault = (event) => event.preventDefault();

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
          <Grid item xs={4}>
            <Typography variant="h5" component="h5">
              SHARE Muqo videos to your social media and save videos to your
              phone.
            </Typography>
          </Grid>
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
          <Grid item xs={4}>
            <Typography variant="h5" component="h5">
              SHARE Muqo videos to your social media and save videos to your
              phone.
            </Typography>
          </Grid>
          {/* </Paper> */}
        </Grid>{" "}
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
          <Grid item xs={4}>
            <Typography variant="h5" component="h5">
              SHARE Muqo videos to your social media and save videos to your
              phone.
            </Typography>
          </Grid>
          {/* </Paper> */}
        </Grid>
        <Grid item xs={12} sm={6}>
          {" "}
          <Typography variant="h5" component="h5">
            Download the App Now To Receive Referal Code
          </Typography>
          <SvgIcon
            component={AppStoreLogo}
            className={classes.appBarAppStore}
          />
          &nbsp;&nbsp;{" "}
          <SvgIcon
            component={GooglePlayLogo}
            className={classes.appBarAppStore}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          {" "}
          <Typography variant="h5" component="h5">
            Apply here to Become
          </Typography>
          <Typography>Verified Influencer Partner</Typography>
          <Link
            href="http://www.mqmusic.vip"
            // onClick={preventDefault}
            color="primary"
            target="_blank"
            component={"a"}
          >
            www.mqmusic.vip
          </Link>
          <Typography variant="h5" component="h5">
            Pro Musician or Pro Creator Affiliate
          </Typography>
          <Link
            href="http://www.mqmusic.vip"
            // onClick={preventDefault}
            color="primary"
            target="_blank"
            component={"a"}
          >
            www.mqmusic.vip
          </Link>
        </Grid>
      </Grid>
    </div>
  );
}
