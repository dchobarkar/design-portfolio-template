import React from "react";
import { makeStyles } from "@material-ui/styles";

import PortfolioCard from "../../CustomComponents/PortfolioCard/PortfolioCard";
import { PortfolioList } from "./Portfolio.list";
import { PortfolioCSS } from "./Porfolio.css";

// CSS
const useStyles = makeStyles({ ...PortfolioCSS });

function Portfolio(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <h1 className={classes.header}>
        Here's a sampling of what I've been up to lately.
      </h1>

      <div className={classes.portfolioContainer}>
        {PortfolioList.map((portfolio) => (
          <PortfolioCard key={portfolio.name} {...portfolio} />
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
