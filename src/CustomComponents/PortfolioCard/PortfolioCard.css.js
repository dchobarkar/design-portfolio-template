const PortfolioCardCSS = {
  root: {
    margin: "1rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },

  image: {
    width: "20rem",
  },

  name: {
    padding: "0.5rem",
    fontFamily: "Dosis,sans-serif",
    fontWeight: "500",
    fontSize: "var(--mobView-3)",
  },

  services: {
    fontFamily: "Lato,sans-serif",
    fontWeight: "300",
    fontSize: "var(--mobView-5)",
  },

  /* Tablet view */
  "@media only screen and (min-width: 401px) and (max-width: 960px)": {
    name: {
      fontSize: "var(--tabView-3)",
    },

    services: "var(--tabView-5)",
  },

  /* Desktop view */
  "@media only screen and (min-width: 961px)": {
    name: {
      fontSize: "var(--desView-3)",
    },

    services: {
      fontSize: "var(--desView-5)",
    },
  },
};

export default PortfolioCardCSS;
