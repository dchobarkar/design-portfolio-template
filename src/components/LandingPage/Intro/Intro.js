import React from "react";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  root: {
    minHeight: "var(--minHeight)",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "var(--gray-100)",

    "& h1": {
      width: "100%",
      textAlign: "center",
      fontSize: "2rem",
    },
    "& p": {
      width: "100%",
      textAlign: "center",
      fontSize: "1rem",
    },
  },
});

function Intro(props) {
  const classes = useStyles();

  return (
    <section className={classes.root}>
      <h1>
        I help business launch and grow <br />
        their online presence.
      </h1>
    </section>
  );
}

export default Intro;
