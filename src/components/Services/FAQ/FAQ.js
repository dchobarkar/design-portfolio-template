import React from "react";
import { makeStyles } from "@material-ui/styles";

import Accordion from "../../../CustomComponents/Accordion/Accordion";
import { FAQList } from "./FAQ.list";
import { FAQCSS } from "./FAQ.css";

// CSS
const useStyles = makeStyles({ ...FAQCSS });

function FAQ(props) {
  const classes = useStyles();

  return (
    <section className={classes.root}>
      <h2 className={classes.header}>Frequently Asked Questions</h2>

      {FAQList.map((FAQ) => (
        <Accordion key={FAQ.que} que={FAQ.que} ans={FAQ.ans} />
      ))}
    </section>
  );
}

export default FAQ;
