import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/styles";

import { serviceCardColor } from "../../util/color.util";
import ServiceCardCSS from "./ServiceCard.css";

// CSS
const useStyles = makeStyles({
  ...ServiceCardCSS,
  service: {
    ...ServiceCardCSS.service,
    color: ({ headerColor }) => headerColor,
  },
  description: {
    ...ServiceCardCSS.description,
    color: ({ textColor }) => textColor,
  },
});

// Driver component
function ServiceCard(props) {
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
    const [headerColor, textColor] = serviceCardColor(window.location.pathname);
    setHeaderColor(headerColor);
    setTextColor(textColor);
  }, [window.location.pathname]);

  return (
    <div className={classes.root}>
      <h2 className={classes.service}>{props.service}</h2>

      <p className={classes.description}>{props.description}</p>
    </div>
  );
}

export default ServiceCard;
