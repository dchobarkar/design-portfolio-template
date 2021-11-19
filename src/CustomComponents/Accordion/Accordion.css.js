const AccordionCSS = {
  root: {
    width: "100%",
  },

  question: {
    padding: "2rem",
    display: "flex",
    justifyContent: "space-between",
    lineHeight: "2rem",
    fontFamily: "Lato,sans-serif",
    fontWeight: "400",
    fontSize: "var(--mobView-4)",
    textAlign: "left",
    transition: "all 0.5s ease",

    "&:hover": {
      transition: "all 0.5s ease",
    },
  },

  icon: {
    width: "15px",
    height: "15px",
    position: "relative",
    top: "17px",
    left: "10px",
  },

  answerBox: {
    height: "0px",
    padding: "2rem",
    marginBottom: "3rem",
    opacity: 0,
    fontFamily: "Lato,sans-serif",
    fontWeight: "300",
    fontSize: "var(--mobView-5)",
    lineHeight: "2rem",
    transition: "all 0.5s ease",
  },

  open: {
    height: "100%",
    display: "block",
    opacity: 1,
    transition: "all 0.5s ease",
  },

  close: {
    height: "100%",
    display: "none",
    opacity: 1,
    transition: "all 0.5s ease",
  },

  /* Tablet view */
  "@media only screen and (min-width: 401px) and (max-width: 960px)": {
    root: {
      width: "65vw",
    },

    question: {
      width: "100%",
      fontSize: "var(--tabView-4)",
    },

    answerBox: {
      fontSize: "var(--tabView-5)",
    },
  },

  /* Desktop view */
  "@media only screen and (min-width: 961px)": {
    root: {
      width: "65vw",
    },

    question: {
      width: "100%",
      fontSize: "var(--desView-4)",
    },

    answerBox: {
      fontSize: "var(--desView-5)",
    },
  },
};

export default AccordionCSS;
