const FAQCSS = {
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },

  header: {
    paddingBottom: "2rem",
    fontFamily: "Dosis,sans-serif",
    fontSize: "var(--mobView-1)",
    fontWeight: "400",
    textAlign: "center",
    color: "var(--text-white)",
  },

  /* Tablet view */
  "@media only screen and (min-width: 401px) and (max-width: 960px)": {
    header: {
      fontSize: "var(--tabView-1)",
    },
  },

  /* Desktop view */
  "@media only screen and (min-width: 961px)": {
    header: {
      fontSize: "var(--desView-1)",
    },
  },
};

export default FAQCSS;
