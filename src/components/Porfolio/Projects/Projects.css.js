const ProjectCSS = {
  header: {
    width: "100%",
    padding: "4rem 2rem 2rem 2rem",
    fontFamily: "Montserrat,sans-serif",
    fontSize: "var(--mobView-1)",
    fontWeight: "bold",
    color: "#FA6543",
    backgroundColor: "#E6EFED",
  },

  root: {
    padding: "3rem 2rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },

  subHeader: {
    fontFamily: "Lato,sans-serif",
    fontSize: "var(--mobView-3)",
    fontWeight: "normal",
    lineHeight: "1.5rem",
  },

  topic: {
    width: "100%",
    paddingTop: "2rem",
    paddingBottom: "0.5rem",
    fontFamily: "Dosis,sans-serif",
    fontSize: "var(--mobView-4)",
    fontWeight: "bold",
  },

  text: {
    fontFamily: "Lato,sans-serif",
    fontSize: "var(--mobView-4)",
    fontWeight: "normal",
    lineHeight: "1.5rem",
  },

  list: {
    paddingTop: "0.5rem",
    paddingBottom: "2rem",
    listStyleType: "none",

    "& li": {
      paddingBottom: "0.75rem",
    },
  },

  button: {
    padding: "1rem 2rem",
    fontFamily: "Montserrat,sans-serif",
    fontSize: "var(--mobView-4)",
    fontWeight: "normal",
    border: "2px solid #FA6543",
    color: "#FA6543",
    backgroundColor: "transparent",
  },

  container: {
    padding: "2rem",
  },

  image: {
    width: "100%",
  },

  /* Tablet view */
  "@media only screen and (min-width: 401px) and (max-width: 960px)": {
    header: {
      padding: "4rem 4rem 2rem 4rem",
      fontSize: "var(--tabView-1)",
    },

    root: {
      padding: "5rem 4rem",
    },

    column: {
      width: "100%",
    },

    subHeader: {
      fontSize: "var(--tabView-3)",
    },

    topic: {
      fontSize: "var(--tabView-4)",
    },

    text: {
      fontSize: "var(--tabView-4)",
    },

    list: {
      "& li": {
        paddingBottom: "1.5rem",
      },
    },

    button: {
      fontSize: "var(--tabView-4)",
    },

    container: {
      padding: "4rem",
    },
  },

  /* Desktop view */
  "@media only screen and (min-width: 961px)": {
    header: {
      padding: "4rem 6rem 2rem 6rem",
      fontSize: "var(--desView-1)",
    },

    root: {
      padding: "7rem 6rem",
      flexDirection: "row",
      alignItems: "flex-start",
    },

    column: {
      minWidth: "250px",
      padding: "0 1rem",
    },

    subHeader: {
      fontSize: "var(--desView-3)",
    },

    topic: {
      fontSize: "var(--desView-4)",
    },

    text: {
      fontSize: "var(--desView-4)",
    },

    list: {
      "& li": {
        paddingBottom: "1.5rem",
      },
    },

    button: {
      fontSize: "var(--desView-4)",
    },

    container: {
      padding: "6rem",
    },
  },
};

export default ProjectCSS;
