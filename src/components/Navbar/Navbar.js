import React, { useState, useEffect } from "react";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/styles";
import clsx from "clsx";

import { ReactComponent as CloseIcon } from "../../Assets/svg/Close.svg";
import { ReactComponent as MenuIcon } from "../../Assets/svg/Menu.svg";

import NavLink from "./NavLink/NavLink";
import { navbarColor } from "../../util/color.util";
import NavbarCSS from "./Navbar.css";

// CSS
const useStyle = makeStyles({
  ...NavbarCSS,
  root: {
    ...NavbarCSS.root,
    backgroundColor: ({ backgroundColor }) => backgroundColor,
  },

  brand: {
    ...NavbarCSS.brand,
    "& a:link,a:visited": {
      color: ({ textColor }) => textColor,
    },
  },

  navbarIcon: {
    ...NavbarCSS.navbarIcon,
    color: ({ textColor }) => textColor,
  },

  "@media only screen and (min-width: 961px)": {
    ...NavbarCSS["@media only screen and (min-width: 961px)"],
    root: {
      ...NavbarCSS["@media only screen and (min-width: 961px)"].root,
      "& a:link,a:visited": {
        color: ({ textColor }) => textColor,
      },
    },
  },
});

// Driver component
function Navbar(props) {
  // Variable for conditional color for text
  const [textColor, setTextColor] = useState("");
  // Variable for conditional color for background
  const [backgroundColor, setBackgroundColor] = useState("");
  // Flag to handle navbar state (Mobile view only)
  const [isOpen, setIsOpen] = useState(false);

  const cssProps = {
    textColor: textColor,
    backgroundColor: backgroundColor,
  };
  const classes = useStyle(cssProps);

  useEffect(() => {
    // Function to get text color and background color according to url
    const [textColor, backgroundColor] = navbarColor(window.location.pathname);
    setTextColor(textColor);
    setBackgroundColor(backgroundColor);
  }, [window.location.pathname]);

  // Function to change the state of navbar menu
  const toggleNavbar = () => setIsOpen(!isOpen);

  // Function to close the navbar menu
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
