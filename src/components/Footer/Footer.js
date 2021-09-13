import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Heart } from "react-feather";

// CSS
const useStyles = makeStyles({
  root: {
    padding: "1rem",
    position: "relative",
    zIndex: "1",
    fontFamily: "lato",
    fontSize: "1.1rem",
    textAlign: "center",
    color: "var(--primary-text)",
    backgroundColor: "var(--primary-300)",
    boxShadow: "0 -10px 6px -6px #777",

    "& svg": {
      position: "relative",
      top: "3px",
      color: "red",
      fill: "red",
    },
  },
});

function Footer(props) {
  const classes = useStyles();

  return (
    <footer className={classes.root}>
      Made with <Heart size={16} /> by Darshan Chobarkar &copy; Copyright 2021
    </footer>
  );
}

export default Footer;
