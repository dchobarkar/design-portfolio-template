import React from "react";
import { Heart } from "react-feather";
import { makeStyles } from "@material-ui/styles";

import FooterCSS from "./Footer.css";

// CSS
const useStyles = makeStyles({ ...FooterCSS });

// Driver component
function Footer(props) {
  const classes = useStyles();

  return (
    <footer className={classes.root}>
      Made with <Heart size={16} /> by Darshan Chobarkar &copy; Copyright 2021
    </footer>
  );
}

export default Footer;
