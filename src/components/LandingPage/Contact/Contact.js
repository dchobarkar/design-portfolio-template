import React from "react";
import { makeStyles } from "@material-ui/styles";

import ContactCSS from "./Contact.css";

// CSS
const useStyles = makeStyles({ ...ContactCSS });

// Driver component
function Contact(props) {
  const classes = useStyles();

  return (
    <section className={classes.root}>
      <h1 className={classes.header}>Let's Connect.</h1>

      <form className={classes.container}>
        <div className={classes.row}>
          <label htmlFor="name">Name</label>
          <input id="name" name="name" type="text" />
        </div>

        <div className={classes.row}>
          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" />
        </div>

        <div className={classes.row}>
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" />
        </div>

        <div className={classes.row}>
          <button type="submit">Submit</button>
        </div>
      </form>
    </section>
  );
}

export default Contact;
