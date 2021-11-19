const PortfolioCSS = {
  root: {
    minHeight: "var(--minHeight)",
    width: "100%",
    padding: "0 30px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },

  header: {
    width: "100%",
    padding: "3rem 0",
    fontFamily: "Dosis,sans-serif",
    fontWeight: "400",
    fontSize: "var(--mobView-1)",
    textAlign: "center",
  },

  portfolioContainer: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
  },

  /* Tablet view */
  "@media only screen and (min-width: 401px) and (max-width: 960px)": {
    root: {
      padding: "0px 60px",
    },

    header: {
      fontSize: "var(--tabView-1)",
    },
  },

  /* Desktop view */
  "@media only screen and (min-width: 961px)": {
    root: {
      padding: "0px 120px",
    },

    header: {
      fontSize: "var(--desView-1)",
    },
  },
};

export default PortfolioCSS;
