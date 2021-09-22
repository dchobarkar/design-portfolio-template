export const AboutCSS = {
  root: {
    minHeight: "90vh",
    padding: "0px 30px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1444C1",
  },
  image: {
    width: "75vw",
    position: "relative",
    right: "25px",
  },
  aboutIntro: {
    padding: "2rem 0",
    fontFamily: "Lato",
    fontStyle: "italic",
    fontWeight: "400",
    fontSize: "1.2rem",
    lineHeight: "1.5rem",
    textAlign: "justify",
    color: "#ffffff",
  },

  /* Tablet view */
  "@media only screen and (min-width: 401px) and (max-width: 960px)": {
    root: {
      padding: "0px 60px",
    },
    image: {
      maxWidth: "50vw",
    },
    aboutIntro: {
      fontSize: "1.3rem",
    },
  },

  /* Desktop view */
  "@media only screen and (min-width: 961px)": {
    root: {
      padding: "0px 120px",
      flexDirection: "row-reverse",
    },
    image: {
      maxWidth: "30vw",
      position: "static",
    },
    aboutIntro: {
      fontSize: "1.5rem",
      lineHeight: "1.7rem",
    },
  },
};
