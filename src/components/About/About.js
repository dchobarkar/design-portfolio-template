import React from "react";
import { makeStyles } from "@material-ui/styles";

import aboutBackground from "../../Assets/video/aboutBackground.mp4";
import AboutCSS from "./About.css";

// CSS
const useStyles = makeStyles({ ...AboutCSS });

// Driver component
function About(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <video className={classes.video} autoPlay muted>
        <source src={aboutBackground} type="video/mp4"></source>
      </video>
    </div>
  );
}

export default About;
