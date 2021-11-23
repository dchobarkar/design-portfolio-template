const TestimonialCarouselCSS = {
  root: {
    minHeight: "50vh",
    padding: "2rem 0",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "1rem",
    backgroundColor: "#F1F4F4",
  },

  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  icon: {
    width: "1rem",
    height: "1rem",
    cursor: "pointer",
    opacity: "0.75",
    color: "var(--text-black)",
    transition: "opacity 0.15s cubic-bezier(0.4, 0, 1, 1)",

    "&:hover": {
      opacity: "0.5",
    },
  },

  slide: {
    width: "70vw",
    padding: "1.5rem",
    display: "none",
    textAlign: "center",
    listStyleType: "none",
  },

  activeSlide: {
    display: "block",
  },

  comment: {
    padding: "1rem",
    fontFamily: "Montserrat,sans-serif",
    fontSize: "var(--mobView-2)",
    fontWeight: "600",
    fontStyle: "italic",
    color: "#1544C0",
  },

  image: {
    width: "5rem",
  },

  name: {
    fontFamily: "Dosis,sans-serif",
    fontSize: "var(--mobView-4)",
    fontWeight: "500",
    color: "var(--text-black)",
  },

  websiteURL: {
    fontFamily: "Lato,sans-serif",
    fontSize: "var(--mobView-5)",
    fontWeight: "300",
    fontStyle: "italic",
    color: "var(--text-black)",
  },

  indicatorList: {
    display: "flex",
    justifyContent: "center",
    listStyleType: "none",
  },

  indicator: {
    width: "24px",
    height: "3px",
    margin: "0 0.2rem",
    display: "block",
    cursor: "pointer",
    opacity: "0.15",
    transition: "opacity 0.15s cubic-bezier(0.4, 0, 1, 1)",
    backgroundColor: "black",

    "&:hover": {
      opacity: "0.5",
    },
  },

  activeIndicator: {
    opacity: "0.75",

    "&:hover": {
      opacity: "0.75",
    },
  },

  /* Tablet view */
  "@media only screen and (min-width: 401px) and (max-width: 960px)": {
    icon: {
      height: "1.5rem",
      width: "1.5rem",
    },

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
    icon: {
      height: "2rem",
      width: "2rem",
    },

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

export default TestimonialCarouselCSS;
