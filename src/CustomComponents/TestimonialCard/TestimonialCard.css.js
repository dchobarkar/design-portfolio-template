const TestimonialCardCSS = {
  root: {
    minHeight: "100px",
    width: "300px",
    margin: "1rem",
    padding: "2rem 0",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "0.5rem",
    backgroundColor: "#FFD849",
  },

  comment: {
    padding: "1rem",
    lineHeight: "2rem",
    fontFamily: "Montserrat,sans-serif",
    fontSize: "var(--mobView-2)",
    fontWeight: "500",
    textAlign: "center",
    color: "var(--text-white)",
  },

  image: {
    width: "5rem",
    margin: "1rem",
  },

  name: {
    padding: "0.5rem",
    fontFamily: "Lato,sans-serif",
    fontSize: "var(--mobView-4)",
    fontWeight: "400",
    letterSpacing: "0.1rem",
    color: "var(--text-black)",
  },

  websiteURL: {
    fontFamily: "Lato,sans-serif",
    fontSize: "var(--mobView-5)",
    fontWeight: "300",
    fontStyle: "italic",
    color: "var(--text-black)",
  },

  /* Tablet view */
  "@media only screen and (min-width: 401px) and (max-width: 960px)": {
    comment: {
      fontSize: "var(--tabView-2)",
    },

    name: {
      fontSize: "var(--tabView-4)",
    },

    websiteURL: {
      fontSize: "var(--tabView-5)",
    },
  },

  /* Desktop view */
  "@media only screen and (min-width: 961px)": {
    comment: {
      fontSize: "var(--desView-2)",
    },

    name: {
      fontSize: "var(--desView-4)",
    },

    websiteURL: {
      fontSize: "var(--desView-5)",
    },
  },
};

export default TestimonialCardCSS;
