const TestimonialCardCSS = {
  root: {
    minHeight: "400px",
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
    fontWeight: "500",
    fontSize: "var(--mobView-2)",
    textAlign: "center",
    color: "var(--text-white)",
  },

  image: {
    width: "50px",
    margin: "1rem",
  },

  name: {
    padding: "0.5rem",
    fontFamily: "Lato,sans-serif",
    fontWeight: "400",
    fontSize: "var(--mobView-4)",
    letterSpacing: "0.1rem",
    color: "var(--text-black)",
  },

  websiteURL: {
    fontFamily: "Lato,sans-serif",
    fontWeight: "300",
    fontStyle: "italic",
    fontSize: "var(--mobView-5)",
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
