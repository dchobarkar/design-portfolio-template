const ContactCSS = {
  root: {
    minHeight: "var(--mob-minHeight)",
    padding: "20px 30px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#E6EFED",
  },

  header: {
    width: "100%",
    padding: "20px 0",
    fontFamily: "Lato,sans-serif",
    fontSize: "var(--mobView-1)",
    fontWeight: "600",
    fontStyle: "italic",
    textAlign: "center",
    color: "#1544C0",
  },

  container: {
    padding: "2rem",
    borderRadius: "1rem",
    backgroundColor: "#F1F4F4",
  },

  row: {
    marginBottom: "2rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",

    "& input": {
      padding: "0.5rem",
      fontSize: "var(--mobView-4)",
      border: "none",
      borderRadius: "0.5rem",
      color: "var(--text-black)",
      backgroundColor: "var(--text-white)",
    },

    "& textarea": {
      minHeight: "13rem",
      padding: "0.5rem",
      fontSize: "var(--mobView-4)",
      border: "none",
      borderRadius: "0.5rem",
      color: "var(--text-black)",
      backgroundColor: "var(--text-white)",
    },

    "& label": {
      fontFamily: "Montserrat,sans-serif",
      fontSize: "var(--mobView-4)",
      fontWeight: "500",
      marginBottom: "1rem",
    },

    "& button": {
      padding: "0.5rem",
      fontFamily: "Montserrat,sans-serif",
      fontSize: "var(--mobView-3)",
      fontWeight: "600",
      border: "none",
      borderRadius: "0.5rem",
      cursor: "pointer",
      color: "var(--text-black)",
      backgroundColor: "var(--text-white)",
    },
  },

  /* Tablet view */
  "@media only screen and (min-width: 401px) and (max-width: 960px)": {
    root: {
      minHeight: "var(--tab-minHeight)",
      padding: "20px 60px",
      flexDirection: "row",
    },

    header: {
      width: "40vw",
      fontSize: "var(--tabView-1)",
    },

    container: {
      width: "40vw",
    },

    row: {
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
      minHeight: "var(--des-minHeight)",
      padding: "20px 120px",
      flexDirection: "row",
      justifyContent: "space-between",
    },

    header: {
      width: "40vw",
      fontSize: "var(--desView-1)",
    },

    container: {
      width: "35vw",
      padding: "2.5rem 3rem",
    },

    row: {
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
