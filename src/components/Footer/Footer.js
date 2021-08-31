import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Heart } from "react-feather";

const useStyles = makeStyles({
  root: {
    textAlign: "center",
    color: "var(--primary-text)",
    backgroundColor: "var(--primary-300)",
    padding: "1rem",

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
