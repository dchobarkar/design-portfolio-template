import React from "react";
import { makeStyles } from "@material-ui/styles";

import PortfolioCard from "../../CustomComponents/PortfolioCard/PortfolioCard";

// Image imports
import ABCommunity from "../../Assets/img/portfolio/ABCommunity.png";

// CSS
const useStyles = makeStyles({
  root: {
    minHeight: "var(--minHeight)",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "var(--gray-100)",
  },
  header: {
    width: "100%",
    padding: "2rem",
    fontFamily: "Dosis",
    fontSize: "1.8rem",
    textAlign: "center",
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
    name: "PC Portfolio",
    imageURL: ABCommunity,
    services: "UI/UX Design, Development",
    websiteURL: "www.abcommunity.com",
  },
  {
    name: "Pushkaraj Portfolio",
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

function Portfolio(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <p className={classes.header}>
        Here's a sampling of what I've been up to lately.
      </p>

      <div className={classes.portfolioContainer}>
        {portfolioList.map((portfolio) => (
          <PortfolioCard key={portfolio.name} {...portfolio} />
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
