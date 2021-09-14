import React from "react";
import { makeStyles } from "@material-ui/styles";

// CSS
const useStyles = makeStyles({
  root: {
    minHeight: "400px",
    width: "300px",
    margin: "1rem",
    padding: "2rem 0",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "0.5rem",
    background: "var(--gray-300)",
  },
  comment: {
    padding: "1rem",
    lineHeight: "2rem",
    fontSize: "1.5rem",
    textAlign: "center",
  },
  image: { width: "50px", margin: "1rem" },
  name: { padding: "0.5rem", fontSize: "1rem", letterSpacing: "0.1rem" },
  websiteURL: {
    fontSize: "0.8rem",
  },
});

function TestimonialCard(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <p className={classes.comment}>"{props.comment}"</p>

      <img className={classes.image} alt={props.name} src={props.imgURL} />

      <p className={classes.name}>{props.name}</p>

      <p className={classes.websiteURL}>{props.websiteURL}</p>
    </div>
  );
}

export default TestimonialCard;
