const TestimonialListCSS = {
  root: {
    padding: "2rem 0",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },

  header: {
    padding: "2rem",
    fontFamily: "Dosis,sans-serif",
    fontWeight: "400",
    fontSize: "var(--mobView-1)",
    textAlign: "center",
    color: "var(--text-black)",
  },

  testimonialList: {
    padding: "1rem",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
  },

  /* Tablet view */
  "@media only screen and (min-width: 401px) and (max-width: 960px)": {
    header: {
      fontSize: "var(--tabView-1)",
    },
  },

  /* Desktop view */
  "@media only screen and (min-width: 961px)": {
    header: {
      fontSize: "var(--desView-1)",
    },
  },
};

export default TestimonialListCSS;
