import React from "react";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import clsx from "clsx";
import { makeStyles } from "@material-ui/styles";

import { ReactComponent as CloseIcon } from "../../Assets/navbar/Close.svg";
import { ReactComponent as MenuIcon } from "../../Assets/navbar/Menu.svg";

import NavLink from "./NavLink/NavLink";

// CSS
const useStyle = makeStyles({
  root: {
    height: "80px",
    padding: "0px 20px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    position: "relative",
    zIndex: "1",
    fontFamily: "Dosis",
    fontSize: "1.3rem",
    color: "var(--primary-text)",
    background: "linear-gradient(#6616fc, #f394d3)",
    boxShadow: "0 10px 6px -6px #777",

    "& a:link,a:visited": {
      color: "var(--primary-text)",
      transition: "all 0.5s ease",
      textDecoration: "none",
    },

    "& a:hover": {
      color: "var(--gray-700)",
      transition: "all 0.5s ease",
    },
  },

  brand: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "1.5rem",
  },

  menu: {
    width: "100%",
    height: "var(--minHeight)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: "80px",
    left: "-100%",
    opacity: "0",
    transition: "all 0.5s ease",
    listStyleType: "none",
  },
  open: {
    zIndex: "1",
    left: "0",
    opacity: "1",
    transition: "all 0.5s ease",
    background: "#9899d1",
  },

  navbarIcon: { display: "block" },

  icon: {
    width: "45px",
    height: "45px",
  },

  /* Tablet view */
  "@media only screen and (min-width: 401px) and (max-width: 960px)": {
    root: {
      padding: "0px 40px",
    },

    brand: {
      fontSize: "1.7rem",
    },

    menu: {
      flexDirection: "row",
      justifyContent: "flex-end",
      position: "static",
      opacity: "1",
    },

    navbarIcon: {
      display: "none",
    },
  },

  /* Desktop view */
  "@media only screen and (min-width: 961px)": {
    root: {
      padding: "0px 40px",
    },

    brand: {
      fontSize: "1.7rem",
    },

    menu: {
      flexDirection: "row",
      justifyContent: "flex-end",
      position: "static",
      opacity: "1",
    },

    navbarIcon: {
      display: "none",
    },
  },
});

function Navbar(props) {
  const classes = useStyle();

  // Flag to handle navbar state (Mobile view only)
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleNavbar = () => setIsOpen(!isOpen);

  const closeMobileMenu = () => setIsOpen(false);

  return (
    <div className={classes.root}>
      <div className={classes.brand}>
        <Link to="/" onClick={closeMobileMenu}>
          Barbatos
        </Link>
      </div>

      <ul className={isOpen ? clsx(classes.menu, classes.open) : classes.menu}>
        <NavLink to="/portfolio" label="Porfolio" onClick={closeMobileMenu} />

        <NavLink to="/services" label="Services" onClick={closeMobileMenu} />

        <NavLink to="/resources" label="Resources" onClick={closeMobileMenu} />

        <NavLink to="/about" label="About" onClick={closeMobileMenu} />

        <NavLink to="/#contact" label="Contact" onClick={closeMobileMenu} />
      </ul>

      <div className={classes.navbarIcon} onClick={toggleNavbar}>
        {isOpen ? (
          <CloseIcon className={classes.icon} />
        ) : (
          <MenuIcon className={classes.icon} />
        )}
      </div>
    </div>
  );
}

export default withRouter(Navbar);
