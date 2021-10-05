import React from "react";
import { makeStyles } from "@material-ui/styles";

import { PortfolioCardCSS } from "./PortfolioCard.css";

// CSS
const useStyles = makeStyles({ ...PortfolioCardCSS });

function PortfolioCard(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <img className={classes.image} alt={props.name} src={props.imageURL} />

      <p className={classes.name}>{props.name}</p>

      <p className={classes.services}>{props.services}</p>
    </div>
  );
}

export default PortfolioCard;
