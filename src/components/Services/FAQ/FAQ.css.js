const FAQCSS = {
  root: {
    padding: "2rem 0",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },

  header: {
    width: "70vw",
    fontFamily: "Dosis,sans-serif",
    fontWeight: "400",
    fontSize: "var(--mobView-1)",
    textAlign: "center",
  },

  /* Tablet view */
  "@media only screen and (min-width: 401px) and (max-width: 960px)": {
    header: {
      padding: "1.5rem",
      fontSize: "var(--tabView-1)",
    },
  },

  /* Desktop view */
  "@media only screen and (min-width: 961px)": {
    header: {
      padding: "1.5rem",
      fontSize: "var(--desView-1)",
    },
  },
};

export default FAQCSS;
