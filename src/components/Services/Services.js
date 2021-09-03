import React from "react";
import { makeStyles } from "@material-ui/styles";

import SubServices from "../LandingPage/Services/Services";
import FAQ from "./FAQ/FAQ";

const useStyles = makeStyles({
  root: {
    minHeight: "var(--minHeight)",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "var(--gray-100)",
  },
  header: {
    padding: "2rem",
    fontSize: "2rem",
    fontWeight: "500",
  },
  subHeader: {
    padding: "1rem",
    fontSize: "1.5rem",
  },
});

function Services(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <p className={classes.header}>What I can do for you</p>
      <p className={classes.subHeader}>
        Whether you need website design, website development or both, I’m here
        for you.
      </p>

      <SubServices />

      <FAQ />
    </div>
  );
}

export default Services;
