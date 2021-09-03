import React from "react";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  root: {
    width: "100%",
    padding: "1.5rem",
    display: "flex",
    justifyContent: "space-between",
    fontSize: "1.3rem",
    color: "var(--primary-text)",
    backgroundColor: "var(--primary-700)",

    "& a:link,a:visited": {
      color: "var(--primary-text)",
      textDecoration: "none",
    },
  },

  brand: {
    fontSize: "2rem",
  },

  menu: {
    "& li": {
      marginRight: "1.5rem",
      display: "inline",
      position: "relative",
      top: "0.7rem",
    },
    "& li:last-of-type": {
      marginRight: "0",
    },
  },
});

function Navbar(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.brand}>
        <a href="/">Barbatos</a>
      </div>

      <ul className={classes.menu}>
        <li>
          <a href="#portfolio">Porfolio</a>
        </li>

        <li>
          <a href="#services">Services</a>
        </li>

        <li>
          <a href="#tips">Tips</a>
        </li>

        <li>
          <a href="#about">About</a>
        </li>

        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
