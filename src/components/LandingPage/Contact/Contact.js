import React from "react";
import { makeStyles } from "@material-ui/styles";

// CSS
const useStyles = makeStyles({
  root: {
    minHeight: "var(--minHeight)",
    padding: "2rem 0",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "var(--gray-300)",
  },

  formContainer: {
    width: "90vw",
    padding: "2.5rem",
    border: "1px solid #D6D9DC",
    borderRadius: "0.5rem",
    backgroundColor: "#F6F7F8",
  },

  formRow: {
    marginBottom: "2rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",

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

  /* Tablet view */
  "@media only screen and (min-width: 401px) and (max-width: 960px)": {
    formContainer: {
      width: "50vw",
    },
  },

  /* Desktop view */
  "@media only screen and (min-width: 961px)": {
    formContainer: {
      width: "50vw",
    },
  },
});

function Contact(props) {
  const classes = useStyles();

  return (
    <section className={classes.root}>
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
          <button type="submit">Sumbit</button>
        </div>
      </form>
    </section>
  );
}

export default Contact;
