export const TestimonialsCSS = {
  root: {
    height: "70vh",
    padding: "0 30px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#E6EEEC",
  },

  /* Tablet view */
  "@media only screen and (min-width: 401px) and (max-width: 960px)": {
    root: {
      padding: "0px 60px",
    },
  },

  /* Desktop view */
  "@media only screen and (min-width: 961px)": {
    root: {
      padding: "0px 120px",
    },
  },
};
