import React from "react";
import { makeStyles } from "@material-ui/styles";

import Accordion from "../../../CustomComponents/Accordion/Accordion";
import FAQList from "./FAQ.list";
import FAQCSS from "./FAQ.css";

// CSS
const useStyles = makeStyles({ ...FAQCSS });

// Driver component
function FAQ(props) {
  const classes = useStyles();

  return (
    <section className={classes.root}>
      <h1 className={classes.header}>Frequently Asked Questions</h1>

      {FAQList.map((FAQ) => (
        <Accordion key={FAQ.que} {...FAQ} />
      ))}
    </section>
  );
}

export default FAQ;
