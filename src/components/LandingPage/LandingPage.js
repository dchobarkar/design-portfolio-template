import React from "react";

import Intro from "./Intro/Intro";
import About from "./About/About";
import Services from "./Services/Services";
import FeatureWork from "./FeatureWork/FeatureWork";
import Testimonials from "./Testimonials/Testimonials";
import Contact from "./Contact/Contact";

function LandingPage(props) {
  return (
    <React.Fragment>
      <Intro {...props} />

      <About {...props} />

      <Services {...props} />

      <FeatureWork {...props} />

      <Testimonials {...props} />

      <Contact {...props} />
    </React.Fragment>
  );
}

export default LandingPage;
