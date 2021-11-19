const ContactCSS = {
  root: {
    minHeight: "var(--minHeight)",
    padding: "20px 30px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },

  header: {
    width: "100%",
    padding: "20px 0",
    fontFamily: "Lato,sans-serif",
    fontWeight: "600",
    fontStyle: "italic",
    fontSize: "var(--mobView-1)",
    textAlign: "center",
  },

  formContainer: {
    width: "100%",
    padding: "2rem",
    borderRadius: "1rem",
  },

  formRow: {
    marginBottom: "2rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    fontStyle: "Montserrat",
    fontWeight: "500",

    "& input": {
      width: "100%",
      padding: "7px",
      fontSize: "var(--mobView-4)",
      border: "none",
      borderRadius: "0.5rem",
    },

    "& textarea": {
      width: "100%",
      minHeight: "13rem",
      padding: "7px",
      fontSize: "var(--mobView-4)",
      border: "none",
      borderRadius: "0.5rem",
    },

    "& label": {
      fontFamily: "Montserrat,sans-serif",
      fontWeight: "500",
      fontSize: "var(--mobView-4)",
      marginBottom: "1rem",
    },

    "& button": {
      padding: "0.5rem",
      fontFamily: "Montserrat,sans-serif",
      fontWeight: "600",
      fontSize: "var(--mobView-3)",
      borderRadius: "0.5rem",
    },
  },

  /* Tablet view */
  "@media only screen and (min-width: 401px) and (max-width: 960px)": {
    root: {
      padding: "0px 60px",
      flexDirection: "row",
    },

    header: {
      width: "40vw",
      fontSize: "var(--tabView-1)",
    },

    formContainer: {
      width: "50vw",
    },

    formRow: {
      "& input": {
        fontSize: "var(--tabView-4)",
      },

      "& textarea": {
        fontSize: "var(--tabView-4)",
      },

      "& label": {
        fontSize: "var(--tabView-4)",
      },

      "& button": {
        fontSize: "var(--tabView-3)",
      },
    },
  },

  /* Desktop view */
  "@media only screen and (min-width: 961px)": {
    root: {
      padding: "20px 120px",
      flexDirection: "row",
      justifyContent: "space-between",
    },

    header: {
      width: "40vw",
      fontSize: "var(--desView-1)",
    },

    formContainer: {
      width: "40vw",
      padding: "2.5rem 3rem",
    },

    formRow: {
      "& input": {
        fontSize: "var(--desView-4)",
      },

      "& textarea": {
        fontSize: "var(--desView-4)",
      },

      "& label": {
        fontSize: "var(--desView-4)",
      },

      "& button": {
        fontSize: "var(--desView-3)",
      },
    },
  },
};

export default ContactCSS;
