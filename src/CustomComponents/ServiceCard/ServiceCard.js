import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/styles";

import ServiceCardCSS from "./ServiceCard.css";
import { serviceCardColor } from "../../util/color.util";

// CSS
const useStyles = makeStyles({
  ...ServiceCardCSS,
  title: {
    ...ServiceCardCSS.title,
    color: ({ headerColor }) => headerColor,
  },
  description: {
    ...ServiceCardCSS.description,
    color: ({ textColor }) => textColor,
  },
});

// Driver component
function ServiceCard(props) {
  const [headerColor, setHeaderColor] = useState("");
  const [textColor, setTextColor] = useState("");

  const cssProps = {
    headerColor: headerColor,
    textColor: textColor,
  };
  const classes = useStyles(cssProps);

  // Function to set header color and text color of the card
  useEffect(() => {
    const [headerColor, textColor] = serviceCardColor(window.location.pathname);
    setHeaderColor(headerColor);
    setTextColor(textColor);
  }, [window.location.pathname]);

  return (
    <div className={classes.root}>
      <h2 className={classes.title}>{props.title}</h2>

      <p className={classes.description}>{props.description}</p>
    </div>
  );
}

export default ServiceCard;
