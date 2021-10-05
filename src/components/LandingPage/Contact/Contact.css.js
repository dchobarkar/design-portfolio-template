export const ContactCSS = {
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
    fontFamily: "Lato",
    fontWeight: "700",
    fontStyle: "italic",
    fontSize: "2rem",
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
      fontSize: "1rem",
      border: "none",
      borderRadius: "0.5rem",
    },

    "& textarea": {
      width: "100%",
      minHeight: "13rem",
      padding: "7px",
      fontSize: "1rem",
      border: "none",
      borderRadius: "0.5rem",
    },

    "& label": {
      marginBottom: "1rem",
    },

    "& button": {
      padding: "0.5rem",
      fontSize: "1.3rem",
      fontWeight: "bold",
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
      fontSize: "3rem",
    },
    formContainer: {
      width: "50vw",
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
      fontSize: "4rem",
    },

    formContainer: {
      width: "40vw",
      padding: "2.5rem 3rem",
    },
  },
};
