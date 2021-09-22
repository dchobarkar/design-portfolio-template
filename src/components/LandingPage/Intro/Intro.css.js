export const IntroCSS = {
  root: {
    height: "90vh",
    padding: "0px 30px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#97FFCB",
    backgroundImage:
      "linear-gradient(to right bottom, #1445bf, #1343be, #1241be, #123fbd, #113dbc, #103bbb, #103aba, #0f38b9, #0f36b8, #0e34b7, #0e32b5, #0e30b4)",
  },
  header: {
    fontFamily: "Dosis",
    fontWeight: "700",
    fontSize: "2rem",
    textAlign: "center",
  },

  /* Tablet view */
  "@media only screen and (min-width: 401px) and (max-width: 960px)": {
    root: {
      padding: "0px 60px",
    },

    header: {
      fontSize: "3rem",
    },
  },

  /* Desktop view */
  "@media only screen and (min-width: 961px)": {
    root: {
      padding: "0px 120px",
    },

    header: {
      fontSize: "5rem",
    },
  },
};
