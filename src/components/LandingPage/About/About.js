import React from "react";
import { makeStyles } from "@material-ui/styles";

import Developer from "../../../Assets/img/Developer.png";

const useStyles = makeStyles({
  root: {
    minHeight: "var(--minHeight)",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "75vw",
  },
  aboutIntro: {
    width: "100%",
    padding: "2rem 3rem",
    fontFamily: "Lato",
    fontSize: "1.2rem",
    lineHeight: "1.5rem",
    textAlign: "justify",
  },

  /* Tablet view */
  "@media only screen and (min-width: 401px) and (max-width: 960px)": {
    root: {
      flexDirection: "row-reverse",
    },
    aboutIntro: {
      fontSize: "1.3rem",
    },
  },

  /* Desktop view */
  "@media only screen and (min-width: 961px)": {
    root: {
      flexDirection: "row-reverse",
    },
    aboutIntro: {
      fontSize: "1.3rem",
    },
  },
});

function About(props) {
  const classes = useStyles();

  return (
    <section className={classes.root}>
      <img className={classes.image} alt="Developer" src={Developer} />

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
