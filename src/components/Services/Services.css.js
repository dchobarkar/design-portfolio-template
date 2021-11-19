const ServicesCSS = {
  root: {
    minHeight: "var(--minHeight)",
    padding: "0 30px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },

  serviceIntro: {
    minHeight: "var(--minHeight)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "Dosis,sans-serif",
    fontWeight: "400",
    fontSize: "var(--mobView-1)",
    letterSpacing: "3px",
    textAlign: "center",
  },

  /* Tablet view */
  "@media only screen and (min-width: 401px) and (max-width: 960px)": {
    root: {
      padding: "0 60px",
    },

    serviceIntro: {
      fontSize: "var(--tabView-1)",
    },
  },

  /* Desktop view */
  "@media only screen and (min-width: 961px)": {
    root: {
      padding: "0 120px",
    },

    serviceIntro: {
      minHeight: "60vh",
      fontSize: "var(--desView-1)",
    },
  },
};

export default ServicesCSS;
