import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/styles";

import { portfolioCardColor } from "../../util/color.util";
import PortfolioCardCSS from "./PortfolioCard.css";

// CSS
const useStyles = makeStyles({
  ...PortfolioCardCSS,
  name: {
    ...PortfolioCardCSS.name,
    "& a:link,a:visited": {
      ...PortfolioCardCSS.name["& a:link,a:visited"],
      color: ({ headerColor }) => headerColor,
    },
  },
  services: {
    ...PortfolioCardCSS.services,
    color: ({ textColor }) => textColor,
  },
});

// Driver component
function PortfolioCard(props) {
  // Variable for conditional color for header
  const [headerColor, setHeaderColor] = useState("");
  // Variable for conditional color for text
  const [textColor, setTextColor] = useState("");

  const cssProps = {
    headerColor: headerColor,
    textColor: textColor,
  };
  const classes = useStyles(cssProps);

  useEffect(() => {
    // Function to get header color and text color according to url
    const [headerColor, textColor] = portfolioCardColor(
      window.location.pathname
    );
    setHeaderColor(headerColor);
    setTextColor(textColor);
  }, [window.location.pathname]);

  return (
    <div className={classes.root}>
      <img className={classes.image} alt={props.name} src={props.imageURL} />

      <h2 className={classes.name}>
        <a href={props.websiteURL} target="_blank" rel="noreferrer">
          {props.name}
        </a>
      </h2>

      <p className={classes.services}>{props.services}</p>
    </div>
  );
}

export default PortfolioCard;
