import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/styles";

import PortfolioCardCSS from "./PortfolioCard.css";
import { portfolioCardColor } from "../../util/color.util";

// CSS
const useStyles = makeStyles({
  ...PortfolioCardCSS,
  name: { ...PortfolioCardCSS.name, color: ({ headerColor }) => headerColor },
  services: {
    ...PortfolioCardCSS.services,
    color: ({ textColor }) => textColor,
  },
});

// Driver component
function PortfolioCard(props) {
  const [headerColor, setHeaderColor] = useState("");
  const [textColor, setTextColor] = useState("");

  const cssProps = {
    headerColor: headerColor,
    textColor: textColor,
  };
  const classes = useStyles(cssProps);

  // Function to set header color and text color of the card
  useEffect(() => {
    const [headerColor, textColor] = portfolioCardColor(
      window.location.pathname
    );
    setHeaderColor(headerColor);
    setTextColor(textColor);
  }, [window.location.pathname]);

  return (
    <div className={classes.root}>
      <img className={classes.image} alt={props.name} src={props.imageURL} />

      <p className={classes.name}>{props.name}</p>

      <p className={classes.services}>{props.services}</p>
    </div>
  );
}

export default PortfolioCard;
