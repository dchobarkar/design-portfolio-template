const ServicesCSS = {
  root: {
    minHeight: "var(--minHeight)",
    padding: "20px 30px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },

  serviceCardContainer: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
  },

  serviceLink: {
    height: "50px",
    width: "80%",
    margin: "1rem 0",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "'Lato',sans-serif",
    fontWeight: "400",
    fontSize: "1.5rem",
    textAlign: "center",
    textDecoration: "none",
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
      padding: "0px 60px",
    },

    serviceLink: {
      width: "40%",
      minWidth: "200px",
    },
  },

  /* Desktop view */
  "@media only screen and (min-width: 961px)": {
    root: {
      padding: "0px 120px",
    },

    serviceLink: {
      width: "30%",
      maxWidth: "300px",
    },
  },
};

export default ServicesCSS;
