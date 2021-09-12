import React from "react";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  root: {
    minHeight: "var(--minHeight)",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "var(--gray-100)",
  },
  header: {
    padding: "1rem",
    fontSize: "1.5rem",
  },
  subHeader: {
    padding: "1rem",
    fontSize: "1rem",
  },
  formContainer: {
    width: "50%",
    padding: "3rem",
    margin: "0 0 40px 0",
    border: "1px solid #D6D9DC",
    borderRadius: "3px",
    backgroundColor: "#F6F7F8",
  },
  formRow: {
    marginBottom: "2rem",
    display: "flex",
    justifyContent: "flex-start",
    flexDirection: "column",
    flexWrap: "wrap",

    "& input": {
      width: "100%",
      padding: "7px",
      fontSize: "1rem",
      border: "1px solid #D6D9DC",
      borderRadius: "3px",
      backgroundColor: "#FFFFFF",
    },

    "& textarea": {
      width: "100%",
      minHeight: "13rem",
      padding: "7px",
      fontSize: "1rem",
      border: "1px solid #D6D9DC",
      borderRadius: "3px",
      backgroundColor: "#FFFFFF",
    },

    "& label": {
      marginBottom: "1rem",
    },

    "& button": {
      padding: "10px 40px",
      fontSize: "1rem",
      fontWeight: "bold",
      border: "none",
      borderRadius: "3px",
      color: "var(--primary-text)",
      backgroundColor: "var(--accent)",
    },
  },
});

function Contact(props) {
  const classes = useStyles();

  return (
    <section id="contact" className={classes.root}>
      <p className={classes.header}>Schedule a complimentary 30-minute chat</p>
      <p className={classes.subHeader}>
        Just answer these questions first and I'll send you a link to my
        Calendly.
      </p>

      <form className={classes.formContainer}>
        <div className={classes.formRow}>
          <label for="name">Name</label>
          <input id="name" name="name" type="text" />
        </div>

        <div className={classes.formRow}>
          <label for="email">Email</label>
          <input id="email" name="email" type="email" />
        </div>

        <div className={classes.formRow}>
          <label for="message">Message</label>
          <textarea id="message" name="message" />
        </div>

        <div className={classes.formRow}>
          <button>Sumbit</button>
        </div>
      </form>
    </section>
  );
}

export default Contact;
