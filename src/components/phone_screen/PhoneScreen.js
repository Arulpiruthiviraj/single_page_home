import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import IphoneImage from "../../assets/images/iphone.svg";
import video1 from "../../assets/video/video1.mov";
import SvgIcon from "@material-ui/core/Icon";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import ShootingVideoIcon from "../../assets/images/video-camera.svg";
const useStyles = makeStyles({
  phoneContainer: {
    width: "600px" /* Adjust TV image width */,
    height: "800px" /* Adjust TV image height */,
    position: "relative",
    "&::after": {
      content: '" "',
      display: "block",
      background: `url(${IphoneImage}) no-repeat top left transparent`,
      width: "100%",
      height: "100%",
      left: "0px",
      top: "0px",
      position: "absolute",
      zIndex: 10,
      backgroundPosition:
        "center" /*  defines the image position inside the box */,
    },
    "& video": {
      position: "absolute",
      top: " 30px" /* Adjust top position */,
      left: "40px" /* Adjust left position */,
      zIndex: 5,
    },
  },
  phoneContainerVideo: {
    position: "absolute",
    top: " 30px" /* Adjust top position */,
    left: "40px" /* Adjust left position */,
    zIndex: 5,
  },
  //   phoneContainer video {

  // // }
  // bullet: {
  //   display: "inline-block",
  //   margin: "0 2px",
  //   transform: "scale(0.8)",
  // },
  // video: {
  //   height: "380px",
  //   width: "200px",
  // },
});
const PhoneScreen = () => {
  const classes = useStyles();
  return (
    <div>
      <Typography
        style={{
          fontSize: 34,
          fontFamily: '"Big Shoulders Stencil Display", cursive',
        }}
      >
        Create, Explore and Share Music Videos
      </Typography>
      <Grid id="top-row" container spacing={24} md={12} justify="center">
        <Grid item xs={6} md={2}>
          <Grid>
            <img
              src={ShootingVideoIcon}
              alt="Camera"
              style={{
                width: 100,
                height: 100,
                alignItems: "center",
                textAlign: "center",
                justifyContent: "center-end",
              }}
            />
            <Typography>Make your own music videos</Typography>
          </Grid>{" "}
          <br />
          <br />
          <br /> <br />
          <br />
          <br /> <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <Grid>
            <img
              src={ShootingVideoIcon}
              alt="Camera"
              style={{
                width: 100,
                height: 100,
                alignItems: "center",
                textAlign: "center",
                justifyContent: "center",
              }}
            />
            <Typography>Make your own music videos</Typography>
          </Grid>
        </Grid>
        <Grid item xs={6} md={3} justify="center">
          <div id="tv_container">
            <video
              className={"phone_video_class"}
              loop
              autoPlay
              muted
              key={"section1"}
            >
              <source src={video1} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </Grid>
        <Grid item xs={6} md={2}>
          <Grid>
            <img
              src={ShootingVideoIcon}
              alt="Camera"
              style={{
                width: 100,
                height: 100,
                alignItems: "center",
                textAlign: "center",
                justifyContent: "center",
              }}
            />
            <Typography>Make your own music videos</Typography>
          </Grid>{" "}
          <br />
          <br />
          <br /> <br />
          <br />
          <br /> <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <Grid>
            <img
              src={ShootingVideoIcon}
              alt="Camera"
              style={{
                width: 100,
                height: 100,
                alignItems: "center",
                textAlign: "center",
                justifyContent: "center",
              }}
            />
            <Typography>Make your own music videos</Typography>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default PhoneScreen;
