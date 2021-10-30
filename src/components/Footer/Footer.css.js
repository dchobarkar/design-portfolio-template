const FooterCSS = {
  root: {
    padding: "1rem 30px",
    fontFamily: "Montserrat,sans-serif",
    fontWeight: "400",
    fontSize: "1rem",
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
    },
  },

  /* Desktop view */
  "@media only screen and (min-width: 961px)": {
    root: {
      padding: "1rem 120px",
    },
  },
};

export default FooterCSS;
