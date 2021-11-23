import React, { useState, useEffect } from "react";
import ContentLoader from "react-content-loader";
import { makeStyles } from "@material-ui/styles";

import SpinnerCSS from "./Spinner.css";
import { spinnerBackgroundColor } from "../../util/color.util";

// CSS
const useStyles = makeStyles({
  ...SpinnerCSS,
  root: {
    ...SpinnerCSS.root,
    backgroundColor: ({ backgroundColor }) => backgroundColor,
  },
});

// Driver component
function Spinner(props) {
  const [backgroundColor, setBackgroundColor] = useState("");

  const cssProps = {
    backgroundColor: backgroundColor,
  };
  const classes = useStyles(cssProps);

  // Function to set header color and text color of the card
  useEffect(() => {
    const backgroundColor = spinnerBackgroundColor(window.location.pathname);
    setBackgroundColor(backgroundColor);
  }, [window.location.pathname]);

  return (
    <div className={classes.root}>
      <ContentLoader title="Coding..." speed={1} interval={0.25}>
        <circle cx="10" cy="20" r="7" />

        <rect x="25" y="15" rx="5" ry="5" width="220" height="9" />

        <circle cx="10" cy="50" r="7" />

        <rect x="25" y="45" rx="5" ry="5" width="220" height="9" />

        <circle cx="10" cy="80" r="7" />

        <rect x="25" y="75" rx="5" ry="5" width="220" height="9" />

        <circle cx="10" cy="110" r="7" />

        <rect x="25" y="105" rx="5" ry="5" width="220" height="9" />
      </ContentLoader>
    </div>
  );
}

export default Spinner;
