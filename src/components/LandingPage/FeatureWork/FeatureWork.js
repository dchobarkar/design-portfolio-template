import React from "react";
import { makeStyles } from "@material-ui/styles";

import PortfolioCard from "../../../CustomComponents/PortfolioCard/PortfolioCard";

// Image imports
import ABCommunity from "../../../Assets/img/portfolio/ABCommunity.png";

// CSS
const useStyles = makeStyles({
  root: {
    minHeight: "var(--minHeight)",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "var(--gray-300)",
  },
  portfolioContainer: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
  },
});

// Portfolio list
const portfolioList = [
  {
    name: "A B Community",
    imageURL: ABCommunity,
    services: "UI/UX Design, Development",
    websiteURL: "www.abcommunity.com",
  },
  {
    name: "Mahesh Finance Services",
    imageURL: ABCommunity,
    services: "UI/UX Design, Development",
    websiteURL: "www.abcommunity.com",
  },
  {
    name: "ChemPro Services",
    imageURL: ABCommunity,
    services: "UI/UX Design, Development",
    websiteURL: "www.abcommunity.com",
  },
];

function FeatureWork(props) {
  const classes = useStyles();

  return (
    <section className={classes.root}>
      <div className={classes.portfolioContainer}>
        {portfolioList.map((portfolio) => (
          <PortfolioCard key={portfolio.name} {...portfolio} />
        ))}
      </div>
    </section>
  );
}

export default FeatureWork;
