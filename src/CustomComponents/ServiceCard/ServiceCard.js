import React from "react";
import { makeStyles } from "@material-ui/styles";

import ServiceCardCSS from "./ServiceCard.css";

// CSS
const useStyles = makeStyles({ ...ServiceCardCSS });

// Driver component
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
