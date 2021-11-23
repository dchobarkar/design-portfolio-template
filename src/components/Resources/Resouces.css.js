const ResourcesCSS = {
  root: {
    minHeight: "var(--mob-minHeight)",
    padding: "20px 30px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F7F7F7",
  },

  /* Tablet view */
  "@media only screen and (min-width: 401px) and (max-width: 960px)": {
    root: {
      minHeight: "var(--tab-minHeight)",
      padding: "20px 60px",
    },
  },

  /* Desktop view */
  "@media only screen and (min-width: 961px)": {
    root: {
      minHeight: "var(--des-minHeight)",
      padding: "20px 120px",
    },
  },
};

export default ResourcesCSS;
