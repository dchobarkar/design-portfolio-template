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
    fontSize: "1.2rem",
    fontWeight: "500",
  },
  image: {
    width: "50px",
  },
  name: {
    fontSize: "0.8rem",
    fontWeight: "700",
  },
  websiteURL: {
    fontSize: "0.8rem",
    fontStyle: "italic",
  },
};
