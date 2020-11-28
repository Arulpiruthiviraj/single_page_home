import React, { Component } from "react";
import video from "../video/video1.mov";
import searchimage from "../images/search.png";
import iphoneImage from "../images/iphone.png";
import logo from "../images/muqo.jpg";
import videoLogo from "../images/video-camera.png";
import appleMusic from "../images/applemusic.png";
import youtubeIcon from "../images/youtube.png";
import facebookIcon from "../images/facebook.png";
import twitterIcon from "../images/twitter.png";
import instagramIcon from "../images/instagram.png";
import smartphoneLogo from "../images/smartphone.png";
import verifiedLogo from "../images/verified.png";
import { Grid, Row, Col } from "react-flexbox-grid";
import "../App.css";
class Screen extends Component {
  render() {
    return (
      <section style={{ backgroundColor: "#ffffff" }}>
        <div style={{ backgroundColor: "#ffffff" }}>
          <section
            style={{
              flexDirection: "row",
              alignItems: "center",
              paddingRight: 40,
              paddingTop: 50,
            }}
          >
            <span
              style={{
                alignSelf: "center",
                fontSize: 48,
                fontStyle: "Poppins 900",
              }}
            >
              Create, Explore and Share Music Videos
            </span>
            <br />
            <br />
            <br />
            <Grid style={{ textAlign: "center", marginRight: 5 }}>
              <Row>
                <Col xs={6} md={3}>
                  <div style={{ paddingTop: 50 }}>
                    <br />
                    <span style={{ fontStyle: "Poppins 700", fontSize: 34 }}>
                      Make your own
                    </span>
                    <br />
                    <br />
                    <span
                      className="videotextdiv"
                      style={{ fontStyle: "Poppins 700", fontSize: 34 }}
                    >
                      music videos
                    </span>
                    <br />
                    <br />
                    <img
                      width="90"
                      height="60"
                      src={videoLogo}
                      alt={"videoLogo"}
                    />
                    <br></br>
                    <div style={{ lineHeight: "20" }}>
                      <br></br>
                    </div>
                    <img
                      width="90"
                      height="60"
                      src={smartphoneLogo}
                      alt="smartphone"
                    />
                    <br></br>
                    <br />
                    <br />
                    <span
                      className="videotextdiv"
                      style={{ fontStyle: "Poppins 700", fontSize: 34 }}
                    >
                      Explore new
                    </span>
                    <br />
                    <br />{" "}
                    <span
                      className="videotextdiv"
                      style={{
                        fontStyle: "basic sans light",
                        fontStyle: "Poppins 700",
                        fontSize: 34,
                      }}
                    >
                      music content
                    </span>
                  </div>
                </Col>
                <Col xs={6} md={5}>
                  <div className="parent">
                    <div className="backdrop">
                      <img
                        width="400"
                        height="700"
                        src={iphoneImage}
                        data-src="https://www.triller.co/wp-content/uploads/2019/02/iPhone3.png"
                        className="attachment-full size-full ls-is-cached lazyloaded"
                        alt=""
                        data-sizes="(max-width: 1016px) 100vw, 1016px"
                        sizes="(max-width: 1016px) 100vw, 1016px"
                      ></img>
                    </div>
                    <div className="videocenter">
                      <video width="415" height="605" loop autoPlay="" muted>
                        <source src={video} type="video/mp4" />
                      </video>
                    </div>
                  </div>
                </Col>
                <Col xs={6} md={3}>
                  <div style={{ paddingTop: 50 }}>
                    <br />
                    <span
                      className="videotextdiv"
                      style={{ fontStyle: "Poppins 700", fontSize: 34 }}
                    >
                      Choose from 60
                    </span>
                    <br></br>
                    <br></br>
                    <span
                      className="videotextdiv"
                      style={{ fontStyle: "Poppins 700", fontSize: 34 }}
                    >
                      Million songs
                    </span>
                    <br />
                    <br />
                    <img width="90" height="60" src={searchimage} />
                    <div style={{ lineHeight: "20" }}>
                      <br></br>
                    </div>
                    <img width="90" height="60" src={verifiedLogo} />
                    <br />
                    <br />
                    <br />
                    <span
                      className="videotextdiv"
                      style={{ fontStyle: "Poppins 700", fontSize: 34 }}
                    >
                      Follow Verified{" "}
                    </span>
                    <br />
                    <br />
                    <span
                      className="videotextdiv"
                      style={{ fontStyle: "Poppins 700", fontSize: 34 }}
                    >
                      Influencers
                    </span>
                  </div>
                </Col>
              </Row>
            </Grid>
          </section>
        </div>

        <br />
        <br />
      </section>
    );
  }
}

export default Screen;
