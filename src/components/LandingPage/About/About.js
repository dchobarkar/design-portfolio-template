import React from "react";
import { makeStyles } from "@material-ui/styles";

import aboutIntro from "../../../Assets/img/aboutIntro.png";

const useStyles = makeStyles({
  root: {
    minHeight: "var(--minHeight)",
    width: "100%",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "var(--gray-100)",
  },
  photoContainer: {
    width: "40%",
  },
  aboutContainer: {
    width: "60%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    "& p": {
      width: "100%",
      textAlign: "justify",
      fontSize: "1.2rem",
      padding: "1rem",
    },
  },
});

function About(props) {
  const classes = useStyles();

  return (
    <section className={classes.root}>
      <div className={classes.photoContainer}>
        <img alt="Developer" src={aboutIntro} />
      </div>

      <div className={classes.aboutContainer}>
        <p>
          Hi, I am Darshan Chobarkar, a passionate self taught web developer
          from India.
        </p>
        <p>
          I design and develope dynamic websites for small and medium business.
        </p>
        <p>
          I was born on December 3rd 1996 and studied Computer Science and
          Engineering at Government College of Engineering, Aurangabad.
        </p>
        <p>
          I started web design and developement about 6 years ago and have
          enjoyed working as a freelancer for the past 2 years. I am currently
          available for freelance work, if you would like to hire me please use
          the contact form below to get in touch with me.
        </p>
      </div>
    </section>
  );
}

export default About;
