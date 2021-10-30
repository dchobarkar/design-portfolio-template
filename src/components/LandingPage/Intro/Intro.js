import React from "react";
import { makeStyles } from "@material-ui/styles";

import IntroCSS from "./Intro.css";

// CSS
const useStyles = makeStyles({ ...IntroCSS });

// Driver component
function Intro(props) {
  const classes = useStyles();

  return (
    <section className={classes.root}>
      <h1 className={classes.header}>
        Hey, I'm Darshan. I help business launch and grow their online presence.
      </h1>
    </section>
  );
}

export default Intro;
