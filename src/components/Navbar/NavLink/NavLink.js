import React from "react";
import { Link, useRouteMatch } from "react-router-dom";
import { makeStyles } from "@material-ui/styles";
import clsx from "clsx";

// CSS
const useStyles = makeStyles({
  tab: {
    width: "100%",
    padding: "30px 0",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    /* Tablet view */
    "@media only screen and (min-width: 401px) and (max-width: 960px)": {
      width: "unset",
      height: "85px",
      padding: "0px 20px",
      transition: "all 0.5s ease",
    },

    /* Desktop view */
    "@media only screen and (min-width: 961px)": {
      width: "unset",
      height: "85px",
      padding: "0px 20px",
      transition: "all 0.5s ease",
    },
  },
  active: {
    backgroundColor: "var(--primary-700)",

    /* Tablet view */
    "@media only screen and (min-width: 401px) and (max-width: 960px)": {
      height: "85px",
      boxShadow: "0 8px 8px -4px lightblue",
      transition: "all 0.5s ease",
    },

    /* Desktop view */
    "@media only screen and (min-width: 961px)": {
      height: "85px",
      boxShadow: "0 8px 8px -4px lightblue",
      transition: "all 0.5s ease",
    },
  },
});

function NavLink({ label, to, isActive, onClick }) {
  const classes = useStyles();

  // Flag variable to check active status of link
  let match = useRouteMatch({
    path: to,
    exact: isActive,
  });

  return (
    <li
      className={match ? clsx(classes.tab, classes.active) : classes.tab}
      onClick={onClick}
    >
      <Link to={to}>{label}</Link>
    </li>
  );
}

export default NavLink;
