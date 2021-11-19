const FooterCSS = {
  root: {
    padding: "1rem 30px",
    fontFamily: "Montserrat,sans-serif",
    fontWeight: "400",
    fontSize: "var(--mobView-4)",
    textAlign: "center",
    color: "var(--text-black)",
    backgroundColor: "var(--background-white)",

    "& svg": {
      position: "relative",
      top: "3px",
      color: "red",
      fill: "red",
    },
  },

  /* Tablet view */
  "@media only screen and (min-width: 401px) and (max-width: 960px)": {
    root: {
      padding: "1rem 60px",
      fontSize: "var(--tabView-4)",
    },
  },

  /* Desktop view */
  "@media only screen and (min-width: 961px)": {
    root: {
      padding: "1rem 120px",
      fontSize: "var(--desView-4)",
    },
  },
};

export default FooterCSS;
