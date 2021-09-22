import React from "react";
import clsx from "clsx";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/styles";

import { ReactComponent as CloseIcon } from "../../Assets/svg/Close.svg";
import { ReactComponent as MenuIcon } from "../../Assets/svg/Menu.svg";

import NavLink from "./NavLink/NavLink";

import { NavbarCSS } from "./Navbar.css";

// CSS
const useStyle = makeStyles({
  ...NavbarCSS,

  /* Desktop view */
  "@media only screen and (min-width: 961px)": {
    ...NavbarCSS["@media only screen and (min-width: 961px)"],
    root: {
      ...NavbarCSS["@media only screen and (min-width: 961px)"],
      backgroundColor: (props) => props.backgroundColor,

      "& a:link,a:visited": {
        color: (props) => props.color,
      },
    },
  },
});

// Function to get background color and text color according to location
const getBackgroundColor = (location) => {
  let modifiedObject = {};

  switch (location) {
    case "/":
      modifiedObject = {
        color: NavbarCSS.blue.color,
        backgroundColor: NavbarCSS.blue.backgroundColor,
      };
      break;

    case "/portfolio":
      modifiedObject = {
        color: NavbarCSS.orange.color,
        backgroundColor: NavbarCSS.orange.backgroundColor,
      };
      break;

    case "/services":
      modifiedObject = {
        color: NavbarCSS.yellow.color,
        backgroundColor: NavbarCSS.yellow.backgroundColor,
      };
      break;

    case "/resources":
      modifiedObject = {
        color: NavbarCSS.white.color,
        backgroundColor: NavbarCSS.white.backgroundColor,
      };
      break;

    case "/about":
      modifiedObject = {
        color: NavbarCSS.gray.color,
        backgroundColor: NavbarCSS.gray.backgroundColor,
      };
      break;
    default:
      break;
  }

  return modifiedObject;
};

function Navbar(props) {
  const colorProps = getBackgroundColor(props.location.pathname);
  const classes = useStyle(colorProps);

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
