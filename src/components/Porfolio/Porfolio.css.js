const PortfolioCSS = {
  root: {
    minHeight: "var(--mob-minHeight)",
    padding: "2rem 30px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FA6543",
  },

  header: {
    height: "20vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "Dosis,sans-serif",
    fontSize: "var(--mobView-1)",
    fontWeight: "400",
    textAlign: "center",
    color: "#FFF45B",
  },

  container: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
  },

  /* Tablet view */
  "@media only screen and (min-width: 401px) and (max-width: 960px)": {
    root: {
      minHeight: "var(--tab-minHeight)",
      padding: "2rem 60px",
    },

    header: {
      height: "40vh",
      fontSize: "var(--tabView-1)",
    },
  },

  /* Desktop view */
  "@media only screen and (min-width: 961px)": {
    root: {
      minHeight: "var(--des-minHeight)",
      padding: "2rem 120px",
    },

    header: {
      height: "40vh",
      fontSize: "var(--desView-1)",
    },
  },
};

export default PortfolioCSS;
