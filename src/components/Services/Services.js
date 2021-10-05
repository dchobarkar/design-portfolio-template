import React from "react";
import { makeStyles } from "@material-ui/styles";

import ServicesList from "./ServicesList/ServicesList";
import FAQ from "./FAQ/FAQ";
import TestimonialList from "./TestimonialList/TestimonialList";
import { ServicesCSS } from "./Services.css";

// CSS
const useStyles = makeStyles({ ...ServicesCSS });

function Services(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.serviceIntro}>
        I build capacity for organizations with a greater purpose...
      </div>

      <ServicesList />

      <FAQ />

      <TestimonialList />
    </div>
  );
}

export default Services;
