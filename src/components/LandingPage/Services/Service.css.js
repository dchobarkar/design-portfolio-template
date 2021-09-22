export const ServicesCSS = {
  root: {
    minHeight: "90vh",
    padding: "20px 30px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#204EC6",
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
    fontSize: "1.5rem",
    textAlign: "center",
    textDecoration: "none",
    color: "#ffffff",
    border: "1px solid #ffffff",
    borderRadius: "1rem",
    transition: "all 0.5s ease",

    "&:hover": {
      transform: "scale(1.1)",
      color: "#97FFCB",
      border: "1px solid #97FFCB",
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
