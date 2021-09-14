import React from "react";
import { makeStyles } from "@material-ui/styles";

import ServicesList from "./ServicesList/ServicesList";
import FAQ from "./FAQ/FAQ";
import TestimonialList from "./TestimonialList/TestimonialList";

const useStyles = makeStyles({
  root: {
    minHeight: "var(--minHeight)",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "Lato",
    fontWeight: "400",
    textColor: "var(--secondary-text)",
    backgroundColor: "var(--gray-100)",
  },
  serviceIntro: {
    minHeight: "var(--minHeight)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "Dosis",
    fontSize: "3.5rem",
    letterSpacing: "3px",
    textAlign: "center",
  },

  /* Tablet view */
  "@media only screen and (min-width: 401px) and (max-width: 960px)": {
    serviceIntro: {
      minHeight: "60vh",
      fontSize: "5rem",
    },
  },

  /* Desktop view */
  "@media only screen and (min-width: 961px)": {
    serviceIntro: {
      minHeight: "60vh",
      fontSize: "5rem",
    },
  },
});

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
