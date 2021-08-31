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
    },
    "& p": {
      width: "100%",
      textAlign: "center",
    },
  },
});

function Intro(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <h1>
        I help business launch and grow <br />
        their online presence.
      </h1>
    </div>
  );
}

export default Intro;
