const IntroCSS = {
  root: {
    height: "var(--minHeight)",
    padding: "0px 30px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  header: {
    fontFamily: "'Dosis',sans-serif",
    fontWeight: "700",
    fontSize: "2rem",
    textAlign: "center",
  },

  /* Tablet view */
  "@media only screen and (min-width: 401px) and (max-width: 960px)": {
    root: {
      padding: "0px 60px",
    },

    header: {
      fontSize: "3rem",
    },
  },

  /* Desktop view */
  "@media only screen and (min-width: 961px)": {
    root: {
      padding: "0px 120px",
    },

    header: {
      fontSize: "5rem",
    },
  },
};

export default IntroCSS;
