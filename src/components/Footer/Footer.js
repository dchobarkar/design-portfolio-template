import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Heart } from "react-feather";

const useStyles = makeStyles({
  footer: {
    textAlign: "center",
    backgroundColor: "#D6E9FE",
    padding: "20px",

    "& svg": {
      color: "red",
      fill: "red",
    },
  },
});

function Footer() {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      Made with <Heart size={14} /> by Darshan Chobarkar &copy; Copyright 2021
    </footer>
  );
}

export default Footer;
