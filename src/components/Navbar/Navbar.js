import React from "react";
import { makeStyles } from "@material-ui/styles";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";

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
        <Link to="/">Barbatos</Link>
      </div>

      <ul className={classes.menu}>
        <li>
          <Link to="/portfolio">Porfolio</Link>
        </li>

        <li>
          <Link to="/services">Services</Link>
        </li>

        <li>
          <Link to="/tips">Tips</Link>
        </li>

        <li>
          <Link to="/about">About</Link>
        </li>

        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  );
}

export default withRouter(Navbar);
