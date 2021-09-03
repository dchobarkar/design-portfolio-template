import React from "react";
import { makeStyles } from "@material-ui/styles";

import portfolio1 from "../../Assets/img/portfolio/portfolio1.png";

const useStyles = makeStyles({
  root: {
    minHeight: "var(--minHeight)",
    width: "100%",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "var(--gray-100)",
  },
  header: {
    width: "100%",
    padding: "2rem",
    textAlign: "center",
    fontSize: "1.8rem",
    fontWeight: "500",
  },
  portfolioContainer: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
  },
  portfolio: {
    padding: "2rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    "& img": {
      width: "20rem",
    },
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

function Portfolio(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <p className={classes.header}>
        Here's a sampling of what I've been up lately.
      </p>

      <div className={classes.portfolioContainer}>
        <div className={classes.portfolio}>
          <img alt="Ajab Babkbak Community" src={portfolio1} />
          <p className={classes.name}>Ajab Babkbak Community</p>
          <p className={classes.services}>UI/UX Design, Website Design</p>
        </div>
      </div>

      <div className={classes.portfolioContainer}>
        <div className={classes.portfolio}>
          <img alt="Ajab Babkbak Community" src={portfolio1} />
          <p className={classes.name}>Ajab Babkbak Community</p>
          <p className={classes.services}>UI/UX Design, Website Design</p>
        </div>
      </div>

      <div className={classes.portfolioContainer}>
        <div className={classes.portfolio}>
          <img alt="Ajab Babkbak Community" src={portfolio1} />
          <p className={classes.name}>Ajab Babkbak Community</p>
          <p className={classes.services}>UI/UX Design, Website Design</p>
        </div>
      </div>

      <div className={classes.portfolioContainer}>
        <div className={classes.portfolio}>
          <img alt="Ajab Babkbak Community" src={portfolio1} />
          <p className={classes.name}>Ajab Babkbak Community</p>
          <p className={classes.services}>UI/UX Design, Website Design</p>
        </div>
      </div>

      <div className={classes.portfolioContainer}>
        <div className={classes.portfolio}>
          <img alt="Ajab Babkbak Community" src={portfolio1} />
          <p className={classes.name}>Ajab Babkbak Community</p>
          <p className={classes.services}>UI/UX Design, Website Design</p>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
