import React from "react";
import { makeStyles } from "@material-ui/styles";

import featureWork1 from "../../../Assets/img/featureWork1.webp";

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
  featureWorkContainer: {
    width: "100%",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    width: "40%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  introContainer: {
    width: "60%",
    padding: "4rem",
  },
  name: {
    padding: "1rem",
    fontWeight: "600",
    textAlign: "center",
  },
  description: {
    padding: "1rem",
    textAlign: "center",
  },
  button: {
    padding: "0.5rem",
    color: "var(--primary-text)",
    backgroundColor: "var(--button)",
    border: "none",
    float: "right",
  },
});

function FeatureWork(props) {
  const classes = useStyles();

  return (
    <section className={classes.root}>
      <h3> Here's a sampling of what I've been up to lately.</h3>
      <div className={classes.featureWorkContainer}>
        <div className={classes.imageContainer}>
          <img alt="Feature Work 1" src={featureWork1} />
        </div>

        <div className={classes.introContainer}>
          <p className={classes.name}>Ajab Bakbak Community</p>
          <p className={classes.description}>Anand will tell me about it</p>
          <button className={classes.button}>Visit site</button>
        </div>
      </div>
    </section>
  );
}

export default FeatureWork;
