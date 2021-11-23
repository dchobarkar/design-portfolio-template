const ServicesCSS = {
  root: {
    minHeight: "var(--mob-minHeight)",
    padding: "0 30px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FEE934",
  },

  intro: {
    minHeight: "var(--mob-minHeight)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    "& h1": {
      fontFamily: "Dosis,sans-serif",
      fontSize: "var(--mobView-1)",
      fontWeight: "400",
      letterSpacing: "3px",
      textAlign: "center",
      color: "var(--text-white)",
    },
  },

  /* Tablet view */
  "@media only screen and (min-width: 401px) and (max-width: 960px)": {
    root: {
      minHeight: "var(--tab-minHeight)",
      padding: "0 60px",
    },

    intro: {
      minHeight: "var(--tab-minHeight)",

      "& h1": {
        fontSize: "var(--tabView-1)",
      },
    },
  },

  /* Desktop view */
  "@media only screen and (min-width: 961px)": {
    root: {
      minHeight: "var(--des-minHeight)",
      padding: "0 120px",
    },

    intro: {
      minHeight: "var(--des-minHeight)",

      "& h1": {
        fontSize: "var(--desView-1)",
      },
    },
  },
};

export default ServicesCSS;
