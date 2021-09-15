import React from "react";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  root: {
    margin: "1rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "20rem",
  },
  name: {
    padding: "0.5rem",
    fontSize: "0.8rem",
    fontWeight: "500",
  },
  services: {
    fontSize: "0.7rem",
  },
});

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
