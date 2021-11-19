const AboutCSS = {
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
    fontFamily: "'Lato',sans-serif",
    fontWeight: "500",
    fontStyle: "italic",
    fontSize: "var(--mobView-4)",
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
      fontSize: "var(--tabView-4)",
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
      fontSize: "var(--desView-4)",
      lineHeight: "1.7rem",
    },
  },
};

export default AboutCSS;
