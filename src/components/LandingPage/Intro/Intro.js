import React from "react";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  root: {
    minHeight: "var(--minHeight)",
    width: "100%",
    padding: "1rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "var(--gray-100)",
  },
  header: {
    width: "100%",
    fontFamily: "Dosis",
    fontSize: "1.5rem",
    textAlign: "center",
  },

  /* Tablet view */
  "@media only screen and (min-width: 401px) and (max-width: 960px)": {
    header: {
      fontSize: "3rem",
    },
  },

  /* Desktop view */
  "@media only screen and (min-width: 961px)": {
    header: {
      fontSize: "3rem",
    },
  },
});

function Intro(props) {
  const classes = useStyles();

  return (
    <section className={classes.root}>
      <h1 className={classes.header}>
        Hey, I'm Darshan. I help business launch and grow
        <br /> their online presence.
      </h1>
    </section>
  );
}

export default Intro;
