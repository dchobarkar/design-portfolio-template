const AboutCSS = {
  root: {
    minHeight: "var(--mob-minHeight)",
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

  introduction: {
    padding: "2rem 0",
    fontFamily: "'Lato',sans-serif",
    fontSize: "var(--mobView-4)",
    fontWeight: "500",
    fontStyle: "italic",
    lineHeight: "1.5rem",
    textAlign: "justify",
    color: "var(--text-white)",

    "& p": {
      paddingBottom: "1.5rem",
    },
  },

  /* Tablet view */
  "@media only screen and (min-width: 401px) and (max-width: 960px)": {
    root: {
      minHeight: "var(--tab-minHeight)",
      padding: "0px 60px",
    },

    image: {
      maxWidth: "50vw",
    },

    introduction: {
      fontSize: "var(--tabView-4)",
    },
  },

  /* Desktop view */
  "@media only screen and (min-width: 961px)": {
    root: {
      minHeight: "var(--des-minHeight)",
      padding: "0px 120px",
      flexDirection: "row-reverse",
    },

    image: {
      maxWidth: "30vw",
      marginBottom: "4rem",
      position: "static",
    },

    introduction: {
      fontSize: "var(--desView-4)",
      lineHeight: "1.7rem",
    },
  },
};

export default AboutCSS;
