export const ServicesCSS = {
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
    fontSize: "3rem",
    letterSpacing: "3px",
    textAlign: "center",
  },

  /* Tablet view */
  "@media only screen and (min-width: 401px) and (max-width: 960px)": {
    root: {
      padding: "0 60px",
    },

    serviceIntro: {
      fontSize: "4rem",
    },
  },

  /* Desktop view */
  "@media only screen and (min-width: 961px)": {
    root: {
      padding: "0 120px",
    },

    serviceIntro: {
      minHeight: "60vh",
      fontSize: "5rem",
    },
  },
};
