import React from "react";
import { makeStyles } from "@material-ui/styles";

import Intro from "./Intro/Intro";
import About from "./About/About";
import Services from "./Services/Services";
import FeatureWork from "./FeatureWork/FeatureWork";
import Testimonials from "./Testimonials/Testimonials";
import Contact from "./Contact/Contact";

import LandingPageCSS from "./LandingPage.css";

// CSS
const useStyles = makeStyles({ ...LandingPageCSS });

function LandingPage(props) {
  const styles = useStyles();

  return (
    <div className={styles.root}>
      <Intro {...props} />

      <About {...props} />

      <Services {...props} />

      <FeatureWork {...props} />

      <Testimonials {...props} />

      <Contact {...props} />
    </div>
  );
}

export default LandingPage;
