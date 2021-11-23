import React from "react";
import { makeStyles } from "@material-ui/styles";

import DeveloperImg from "../../../Assets/img/Developer.png";
import AboutCSS from "./About.css";

// CSS
const useStyles = makeStyles({ ...AboutCSS });

// Driver component
function About(props) {
  const classes = useStyles();

  return (
    <section className={classes.root}>
      <img
        className={classes.image}
        alt="Darshan Chobarkar"
        src={DeveloperImg}
      />

      <div className={classes.introduction}>
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
