export const TestimonialCarouselCSS = {
  root: {
    display: "flex",
    flexDirection: "column",
  },
  slideContainer: {
    width: "90vw",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  arrow: {
    width: "45px",
    height: "45px",
    cursor: "pointer",
    opacity: "0.75",
    transition: "opacity 0.15s cubic-bezier(0.4, 0, 1, 1)",
    "&:hover": {
      opacity: "0.5",
    },
  },
  slide: {
    width: "80vw",
    padding: "2rem",
    display: "none",
    textAlign: "center",
    listStyleType: "none",
  },
  slideActive: {
    display: "block",
  },
  indicatorList: {
    marginTop: "2rem",
    display: "flex",
    justifyContent: "center",
    listStyleType: "none",
  },
  indicator: {
    margin: "0 0.2rem",
    display: "block",
    width: "24px",
    height: "3px",
    cursor: "pointer",
    opacity: "0.15",
    transition: "opacity 0.15s cubic-bezier(0.4, 0, 1, 1)",
    "&:hover": {
      opacity: "0.5",
    },
  },
  indicatorActive: {
    opacity: "0.75",
    "&:hover": {
      opacity: "0.75",
    },
  },
  comment: {
    padding: "1rem",
    fontFamily: "Montserrat,sans-serif",
    fontWeight: "600",
    fontStlye: "italic",
    fontSize: "1.1rem",
  },
  image: {
    width: "50px",
  },
  name: {
    fontFamily: "Dosis,sans-serif",
    fontWeight: "500",
    fontSize: "0.8rem",
  },
  websiteURL: {
    fontFamily: "Lato,sans-serif",
    fontWeight: "300",
    fontStyle: "italic",
    fontSize: "0.8rem",
  },

  /* Tablet view */
  "@media only screen and (min-width: 401px) and (max-width: 960px)": {
    comment: {
      fontSize: "1.5rem",
    },
    name: {
      fontSize: "0.9rem",
    },
  },

  /* Desktop view */
  "@media only screen and (min-width: 961px)": {
    comment: {
      fontSize: "2rem",
    },
    name: {
      fontSize: "1rem",
    },
  },
};
