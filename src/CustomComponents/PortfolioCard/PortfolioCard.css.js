const PortfolioCardCSS = {
  root: {
    margin: "1rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },

  image: {
    width: "15rem",
  },

  name: {
    padding: "0.5rem",
    fontFamily: "Dosis,sans-serif",
    fontSize: "var(--mobView-3)",
    fontWeight: "500",

    "& a:link,a:visited": {
      textDecoration: "none",
    },
  },

  services: {
    fontFamily: "Lato,sans-serif",
    fontSize: "var(--mobView-5)",
    fontWeight: "300",
  },

  /* Tablet view */
  "@media only screen and (min-width: 401px) and (max-width: 960px)": {
    image: {
      width: "20rem",
    },

    name: {
      fontSize: "var(--tabView-3)",
    },

    services: {
      fontSize: "var(--tabView-5)",
    },
  },

  /* Desktop view */
  "@media only screen and (min-width: 961px)": {
    image: {
      width: "20rem",
    },

    name: {
      fontSize: "var(--desView-3)",
    },

    services: {
      fontSize: "var(--desView-5)",
    },
  },
};

export default PortfolioCardCSS;
