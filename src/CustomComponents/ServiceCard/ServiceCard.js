import React from "react";
import { makeStyles } from "@material-ui/styles";

// CSS
const useStyles = makeStyles({
  root: {
    height: "300px",
    maxWidth: "250px",
    padding: "1rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    background: "#ffffff",
    borderRadius: "0.3rem",
    margin: "1rem",
    cursor: "pointer",
    boxShadow:
      "0 13px 27px -5px hsla(240, 30.1%, 28%, 0.25), 0 8px 16px -8px hsla(0, 0%, 0%, 0.3), 0 -6px 16px -6px hsla(0, 0%, 0%, 0.03)",
    transition: "all ease 200ms",

    "&:hover": {
      transform: "scale(1.03)",
      boxShadow:
        "0 13px 40px -5px hsla(240, 30.1%, 28%, 0.12),0 8px 32px -8px hsla(0, 0%, 0%, 0.14),0 -6px 32px -6px hsla(0, 0%, 0%, 0.02)",
    },
  },
  title: {
    padding: "1rem",
    fontSize: "1.1rem",
    fontWeight: "600",
    textAlign: "center",
    transition: "all ease-in 100ms",
  },
  description: {
    fontSize: "1rem",
    textAlign: "justify",
    color: "#777777",
  },

  /* Tablet view */
  "@media only screen and (min-width: 401px) and (max-width: 960px)": {
    root: {
      height: "350px",
      maxWidth: "300px",
    },
    title: {
      fontSize: "1.3rem",
    },
  },

  /* Desktop view */
  "@media only screen and (min-width: 961px)": {
    root: {
      height: "350px",
      maxWidth: "300px",
    },
    title: {
      fontSize: "1.3rem",
    },
  },
});

function ServiceCard(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <h2 className={classes.title}>{props.title}</h2>
      <p className={classes.description}>{props.description}</p>
    </div>
  );
}

export default ServiceCard;
