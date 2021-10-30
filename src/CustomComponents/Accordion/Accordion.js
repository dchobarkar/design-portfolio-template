import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/styles";

import { ReactComponent as DownArrowIcon } from "../../Assets/svg/DownArrow.svg";
import { ReactComponent as UpArrowIcon } from "../../Assets/svg/UpArrow.svg";
import AccordionCSS from "./Accordion.css";

// CSS
const useStyles = makeStyles({ ...AccordionCSS });

// Driver component
function Accordion(props) {
  const classes = useStyles();

  // Flag to set block class
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className={classes.root}>
      <div className={classes.question} onClick={() => setIsOpen(!isOpen)}>
        <p> {props.que}</p>

        {isOpen ? (
          <UpArrowIcon className={classes.icon} />
        ) : (
          <DownArrowIcon className={classes.icon} />
        )}
      </div>

      <div
        className={clsx(
          classes.answerBox,
          isOpen ? classes.open : classes.close
        )}
      >
        <p>{props.ans}</p>
      </div>
    </div>
  );
}

export default Accordion;
