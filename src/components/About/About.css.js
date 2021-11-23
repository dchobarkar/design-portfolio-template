const AboutCSS = {
  root: {
    minHeight: "var(--mob-minHeight)",
    backgroundColor: "#E6EFED",
  },

  video: {
    width: "100%",
    height: "100%",
  },

  /* Tablet view */
  "@media only screen and (min-width: 401px) and (max-width: 960px)": {
    root: {
      minHeight: "var(--tab-minHeight)",
    },
  },

  /* Desktop view */
  "@media only screen and (min-width: 961px)": {
    root: {
      minHeight: "var(--des-minHeight)",
    },
  },
};

export default AboutCSS;
