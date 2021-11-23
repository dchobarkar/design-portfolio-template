import React, { useEffect, useState } from "react";
import clsx from "clsx";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/styles";

import { ReactComponent as CloseIcon } from "../../Assets/svg/Close.svg";
import { ReactComponent as MenuIcon } from "../../Assets/svg/Menu.svg";
import NavLink from "./NavLink/NavLink";
import NavbarCSS from "./Navbar.css";
import { navbarColor } from "../../util/color.util";

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
      color: ({ color }) => color,
    },
  },

  navbarIcon: {
    ...NavbarCSS.navbarIcon,
    color: ({ color }) => color,
  },

  // // "@media only screen and (min-width: 401px) and (max-width: 960px)": {
  // //   ...NavbarCSS[
  // //     "@media only screen and (min-width: 401px) and (max-width: 960px)"
  // //   ],
  // //   root: {
  // //     ...NavbarCSS[
  // //       "@media only screen and (min-width: 401px) and (max-width: 960px)"
  // //     ],
  // //     "& a:link,a:visited": {
  // //       color: ({ color }) => color,
  // //     },
  // //   },
  // // },

  "@media only screen and (min-width: 961px)": {
    ...NavbarCSS["@media only screen and (min-width: 961px)"],
    root: {
      ...NavbarCSS["@media only screen and (min-width: 961px)"].root,
      "& a:link,a:visited": {
        color: ({ color }) => color,
      },
    },
  },
});

// Driver component
function Navbar(props) {
  const [color, setColor] = useState("");
  const [backgroundColor, setBackgroundColor] = useState("");

  const cssProps = {
    color: color,
    backgroundColor: backgroundColor,
  };
  const classes = useStyle(cssProps);

  // Function to change the color and background color of navbar according to url
  useEffect(() => {
    const [color, backgroundColor] = navbarColor(window.location.pathname);
    setColor(color);
    setBackgroundColor(backgroundColor);
  }, [window.location.pathname]);

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
