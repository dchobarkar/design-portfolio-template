import React from "react";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  navbar: {
    fontSize: "1.3rem",
    width: "100%",
    padding: "1.5rem",
    color: "var(--primary-text)",
    background: "var(--primary-color)",
    display: "flex",
    justifyContent: "space-between",

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
      display: "inline",
      position: "relative",
      marginRight: "1.5rem",
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
    <div className={classes.navbar}>
      <div className={classes.brand}>
        <a href="/">Barbatos</a>
      </div>

      <ul className={classes.menu}>
        <li>
          <a href="#projects">Projects</a>
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
