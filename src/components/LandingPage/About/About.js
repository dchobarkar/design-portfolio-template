import React from "react";
import { makeStyles } from "@material-ui/styles";

import Developer from "../../../Assets/img/Developer.png";
import { AboutCSS } from "./About.css";

// CSS
const useStyles = makeStyles({ ...AboutCSS });

function About(props) {
  const classes = useStyles();

  return (
    <section className={classes.root}>
      <img className={classes.image} alt="Darshan Chobarkar" src={Developer} />

      <p className={classes.aboutIntro}>
        Hi, I am Darshan Chobarkar, a passionate self taught web developer from
        India.
        <br />
        <br />
        I design and develope dynamic websites for small and medium business.
        <br />
        <br />
        I was born on December 3rd 1996 and studied Computer Science and
        Engineering at Government College of Engineering, Aurangabad.
        <br />
        <br />I started web design and developement about 6 years ago and have
        enjoyed working as a freelancer for the past 2 years. I am currently
        available for freelance work, if you would like to hire me please use
        the contact form below to get in touch with me.
      </p>
    </section>
  );
}

export default About;
