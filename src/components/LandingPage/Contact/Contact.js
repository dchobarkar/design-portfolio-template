import React from "react";
import { makeStyles } from "@material-ui/styles";

import { ContactCSS } from "./Contact.css";

// CSS
const useStyles = makeStyles({ ...ContactCSS });

function Contact(props) {
  const classes = useStyles();

  return (
    <section className={classes.root}>
      <h2 className={classes.header}>Let's Connect.</h2>

      <form className={classes.formContainer}>
        <div className={classes.formRow}>
          <label htmlFor="name">Name</label>
          <input id="name" name="name" type="text" />
        </div>

        <div className={classes.formRow}>
          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" />
        </div>

        <div className={classes.formRow}>
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" />
        </div>

        <div className={classes.formRow}>
          <button type="submit">Submit</button>
        </div>
      </form>
    </section>
  );
}

export default Contact;
