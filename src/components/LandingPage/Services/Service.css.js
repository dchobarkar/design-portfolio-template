const ServicesCSS = {
  root: {
    minHeight: "var(--mob-minHeight)",
    padding: "0 30px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },

  container: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
  },

  link: {
    height: "50px",
    width: "80%",
    margin: "2rem 0",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "'Montserrat',sans-serif",
    fontSize: "var(--mobView-3)",
    fontWeight: "400",
    textAlign: "center",
    textDecoration: "none",
    color: "var(--text-white)",
    border: "1px solid var(--text-white)",
    borderRadius: "1rem",
    transition: "all 0.5s ease",

    "&:hover": {
      transform: "scale(1.1)",
      transition: "all 0.5s ease",
    },
  },

  /* Tablet view */
  "@media only screen and (min-width: 401px) and (max-width: 960px)": {
    root: {
      minHeight: "var(--tab-minHeight)",
      padding: "0px 60px",
    },

    link: {
      width: "40%",
      minWidth: "200px",
      fontSize: "var(--tabView-3)",
    },
  },

  /* Desktop view */
  "@media only screen and (min-width: 961px)": {
    root: {
      minHeight: "var(--des-minHeight)",
      padding: "0px 120px",
    },

    link: {
      width: "30%",
      maxWidth: "300px",
      fontSize: "var(--desView-3)",
    },
  },
};

export default ServicesCSS;
