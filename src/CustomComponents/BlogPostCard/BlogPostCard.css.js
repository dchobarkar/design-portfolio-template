const BlogPostCardCSS = {
  root: {
    width: "100%",
    paddingTop: "2rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },

  blogPostContainer: {
    width: "90%",
    paddingBottom: "1rem",
  },

  header: {
    paddingBottom: "0.5rem",
    fontFamily: "Dosis,sans-serif",
    fontWeight: "500",
    fontSize: "var(--mobView-2)",
    color: "var(--text-black)",
  },

  blogDetails: {
    paddingBottom: "1rem",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    fontFamily: "Lato,sans-serif",
    fontWeight: "300",
    fontSize: "var(--mobView-5)",
    fontStyle: "normal",
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
    fontWeight: "400",
    fontSize: "var(--mobView-4)",
    fontStyle: "normal",
    color: "var(--text-black)",
  },

  link: {
    fontFamily: "Montserrat,sans-serif",
    fontWeight: "400",
    fontStyle: "normal",
    fontSize: "var(--mobView-5)",
    textDecoration: "none",
    color: "var(--text-black)",
  },

  hr: {
    width: "100%",
    color: "#777777",
  },

  /* Tablet view */
  "@media only screen and (min-width: 401px) and (max-width: 960px)": {
    root: {
      paddingTop: "3rem",
    },

    blogPostContainer: {
      width: "80%",
    },

    header: {
      fontSize: "var(--tabView-2)",
    },

    blogDetails: {
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

    blogPostContainer: {
      width: "80%",
    },

    header: {
      fontSize: "var(--desView-2)",
    },

    blogDetails: {
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
