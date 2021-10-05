export const AboutCSS = {
  root: {
    minHeight: "var(--minHeight)",
    padding: "0px 30px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "75vw",
    position: "relative",
    right: "25px",
  },
  aboutIntro: {
    padding: "2rem 0",
    fontFamily: "Lato",
    fontWeight: "400",
    fontStyle: "italic",
    fontSize: "1.2rem",
    lineHeight: "1.5rem",
    textAlign: "justify",
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
