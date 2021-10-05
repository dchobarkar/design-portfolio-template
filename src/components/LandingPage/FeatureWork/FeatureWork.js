import React from "react";
import { makeStyles } from "@material-ui/styles";

import PortfolioCard from "../../../CustomComponents/PortfolioCard/PortfolioCard";
import { FeatureWorkList } from "./FeatureWork.list";
import { FeatureWorkCSS } from "./FeatureWork.css";

// CSS
const useStyles = makeStyles({ ...FeatureWorkCSS });

function FeatureWork(props) {
  const classes = useStyles();

  return (
    <section className={classes.root}>
      {FeatureWorkList.map((portfolio) => (
        <PortfolioCard key={portfolio.name} {...portfolio} />
      ))}
    </section>
  );
}

export default FeatureWork;
