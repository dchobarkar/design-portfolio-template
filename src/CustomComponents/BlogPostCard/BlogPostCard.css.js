const BlogPostCardCSS = {
  root: {
    paddingTop: "2rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },

  container: {
    width: "90%",
    paddingBottom: "1rem",
  },

  header: {
    paddingBottom: "0.5rem",
    fontFamily: "Dosis,sans-serif",
    fontSize: "var(--mobView-2)",
    fontWeight: "500",
    color: "var(--text-black)",
  },

  details: {
    paddingBottom: "1rem",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    fontFamily: "Lato,sans-serif",
    fontSize: "var(--mobView-5)",
    fontWeight: "300",
    color: "var(--text-black)",

    "& img": {
      width: "4rem",
      marginRight: "1rem",
      borderRadius: "50%",
    },
  },

  abstract: {
    padding: "0.5rem 0",
    fontFamily: "Lato,sans-serif",
    fontSize: "var(--mobView-4)",
    fontWeight: "400",
    color: "var(--text-black)",
  },

  link: {
    fontFamily: "Montserrat,sans-serif",
    fontSize: "var(--mobView-5)",
    fontWeight: "400",
    textDecoration: "none",
    color: "var(--text-black)",
  },

  hr: {
    width: "90%",
    color: "#777777",
  },

  /* Tablet view */
  "@media only screen and (min-width: 401px) and (max-width: 960px)": {
    root: {
      paddingTop: "3rem",
    },

    container: {
      width: "80%",
    },

    header: {
      fontSize: "var(--tabView-2)",
    },

    details: {
      fontSize: "var(--tabView-5)",
    },

    abstract: {
      fontSize: "var(--tabView-4)",
    },

    link: {
      fontSize: "var(--tabView-5)",
    },
  },

  /* Desktop view */
  "@media only screen and (min-width: 961px)": {
    root: {
      paddingTop: "4rem",
    },

    container: {
      width: "80%",
      paddingBottom: "2rem",
    },

    header: {
      fontSize: "var(--desView-2)",
    },

    details: {
      fontSize: "var(--desView-5)",
    },

    abstract: {
      fontSize: "var(--desView-4)",
    },

    link: {
      fontSize: "var(--desView-5)",
    },
  },
};

export default BlogPostCardCSS;
