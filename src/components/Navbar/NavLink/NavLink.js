import React from "react";
import { Link, useRouteMatch } from "react-router-dom";
import { makeStyles } from "@material-ui/styles";
import clsx from "clsx";

import NavLinkCSS from "./NavLink.css";

// CSS
const useStyles = makeStyles({ ...NavLinkCSS });

// Driver component
function NavLink({ label, to, onClick }) {
  const classes = useStyles();

  // Flag variable to check active status of link
  const match = useRouteMatch({ path: to });

  return (
    <li
      className={clsx(classes.tab, { [classes.active]: match })}
      onClick={onClick}
    >
      <Link to={to}>{label}</Link>
    </li>
  );
}

export default NavLink;
