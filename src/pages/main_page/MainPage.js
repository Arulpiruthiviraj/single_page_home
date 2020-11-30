import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import video1 from "../../assets/video/video1.mov";
import video2 from "../../assets/video/video2.mov";
import video3 from "../../assets/video/video8.mov";
import video4 from "../../assets/video/video4.mov";
import video5 from "../../assets/video/video5.mp4";
import video6 from "../../assets/video/video6.mov";
import video7 from "../../assets/video/video7.mov";
import video8 from "../../assets/video/video8.mov";
import video9 from "../../assets/video/video9.MOV";
import video10 from "../../assets/video/video10.mov";
import { ReactComponent as MuqoLogo } from "../../assets/images/muqo.svg";
import Video from "../../components/video/Video";
import { Typography } from "@material-ui/core";
import SvgIcon from "@material-ui/core/Icon";
import { IconContext } from "react-icons";
import { IoLogoYoutube } from "react-icons/io";
import { ImFacebook2 } from "react-icons/im";
import { FaTwitter } from "react-icons/fa";
import { ReactComponent as InstagramLogo } from "../../assets/images/instagram.svg";
import { ReactComponent as ItunesLogo } from "../../assets/images/itunes.svg";

import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  bannerText: {
    alignItems: "center",
    textAlign: "center",
    flexGrow: 1,
  },
  container: {
    display: "flex",
    flexWrap: "wrap",
  },
  logosRoot: {
    flexGrow: 1,
    margin: "1px",
    flexDirection: "row",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    flex: "1 0 auto",
    height: "120px",
    width: "200px",
  },
  middleMuqoLogo: {
    margin: "0px",
  },
}));

function MainPage(props) {
  const [sectionOfVideos, setSectionOfVideos] = useState([
    video1,
    video3,
    video5,
    video7,
    video9,
  ]);

  useEffect(() => {
    var bool = true;

    setInterval(() => {
      if (bool) {
        setSectionOfVideos([video2, video4, video6, video8, video10]);
        bool = !bool;
      } else {
        setSectionOfVideos([video1, video3, video5, video7, video9]);

        bool = !bool;
      }
    }, 1000 * 10);
  }, []);

  const classes = useStyles();

  return (
    <Grid container className={classes.root}>
      <div className={classes.bannerText}>
        <Typography
          variant="h5"
          component="h5"
          style={{
            fontSize: 34,
            fontFamily: '"Big Shoulders Stencil Display", cursive',
          }}
        >
          Music Meets Social Media
        </Typography>
        <Typography
          variant="h5"
          component="h5"
          style={{
            fontSize: 34,
            fontFamily: '"Big Shoulders Stencil Display", cursive',
            color: "#3f729b",
          }}
        >
          {" "}
          #MusicMovement
        </Typography>
      </div>
      <Grid item xs={12} style={{ marginTop: 10 }}>
        <Grid container justify="center" spacing={2}>
          {sectionOfVideos.map((value) => (
            <Grid key={value} item className="VideoToHide ">
              <Video video={value} />
            </Grid>
          ))}
          <div className="mobileVideoGrid">
            <video
              height="500"
              className={"mobileVideo"}
              loop
              autoPlay
              muted
              key={video1}
            >
              <source src={video3} type="video/mp4" />
            </video>
          </div>
        </Grid>
      </Grid>

      {/* <Grid container spacing={3} className={classes.logosRoot}>
        <Grid item xs>
          <SvgIcon
            component={ItunesLogo}
            style={{ fontSize: "70" }}
            className={classes.paper}
          />
        </Grid>
        <Grid item xs className={classes.middleMuqoLogo}>
          <SvgIcon component={MuqoLogo} className={classes.paper} />
        </Grid>
        <Grid item xs>
          <Box display="flex" flexDirection="row-reverse" p={1} m={1}>
            <Box p={1}>
              <IconContext.Provider value={{ color: "#1da1f2" }}>
                <div>
                  <FaTwitter size={50} />
                </div>
              </IconContext.Provider>
            </Box>
            <Box p={1}>
              <div>
                <SvgIcon component={InstagramLogo} style={{ fontSize: "50" }} />
              </div>
            </Box>
            <Box p={1}>
              <IconContext.Provider value={{ color: "#3B5998" }}>
                <div>
                  <ImFacebook2 size={50} />
                </div>
              </IconContext.Provider>
            </Box>
            <Box p={1}>
              <IconContext.Provider value={{ color: "#FF0000" }}>
                <div>
                  <IoLogoYoutube size={50} />
                </div>
              </IconContext.Provider>
            </Box>
          </Box>
        </Grid>
      </Grid> */}
    </Grid>
  );
}

export default MainPage;
