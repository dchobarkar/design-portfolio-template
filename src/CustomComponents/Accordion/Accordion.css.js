const AccordionCSS = {
  root: {
    width: "100%",
    backgroundColor: "#FFD849",
  },

  question: {
    padding: "2rem",
    display: "flex",
    justifyContent: "space-between",

    "& h2": {
      fontFamily: "Lato,sans-serif",
      fontSize: "var(--mobView-4)",
      fontWeight: "400",
      color: "var(--text-black)",
    },
  },

  icon: {
    width: "1rem",
    height: "1rem",
    position: "relative",
    left: "10px",
    color: "var(--text-black)",
  },

  answerBox: {
    padding: "2rem",
    marginBottom: "3rem",
    opacity: 0,
    fontFamily: "Lato,sans-serif",
    fontSize: "var(--mobView-5)",
    fontWeight: "300",
    lineHeight: "2rem",
    color: "var(--text-black)",
    transition: "all 0.5s ease",
  },

  open: {
    display: "block",
    opacity: 1,
    transition: "all 0.5s ease",
  },

  close: {
    display: "none",
    opacity: 0,
    transition: "all 0.5s ease",
  },

  /* Tablet view */
  "@media only screen and (min-width: 401px) and (max-width: 960px)": {
    root: {
      width: "65vw",
    },

    question: {
      "& h2": {
        fontSize: "var(--tabView-4)",
      },
    },

    answerBox: {
      fontSize: "var(--tabView-5)",
    },
  },

  /* Desktop view */
  "@media only screen and (min-width: 961px)": {
    root: {
      width: "60vw",
    },

    question: {
      "& h2": {
        fontSize: "var(--desView-4)",
      },
    },

    answerBox: {
      fontSize: "var(--desView-5)",
    },
  },
};

export default AccordionCSS;
