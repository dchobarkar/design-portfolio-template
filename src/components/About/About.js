import React from "react";
import { makeStyles } from "@material-ui/styles";

import aboutBackground from "../../Assets/video/aboutBackground.mp4";

const useStyles = makeStyles({
  root: {
    minHeight: "var(--minHeight)",
    width: "100%",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
  },
  aboutBackgroundVideo: {
    position: "fixed",
    zIndex: "-1",
    left: "0",
    top: "4rem",
    minWidth: "100%",
    minHeight: "100%",
  },
});

function About(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <video className={classes.aboutBackgroundVideo} autoPlay muted loop>
        <source src={aboutBackground} type="video/mp4"></source>
      </video>
    </div>
  );
}

export default About;
