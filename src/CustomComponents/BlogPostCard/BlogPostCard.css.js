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
    fontSize: "1.5rem",
  },

  blogDetails: {
    paddingBottom: "1rem",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    fontFamily: "Lato,sans-serif",
    fontWeight: "300",
    fontStyle: "normal",

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
    fontStyle: "normal",
  },

  link: {
    fontFamily: "Montserrat,sans-serif",
    fontWeight: "400",
    fontStyle: "normal",
    fontSize: "0.8rem",
    textDecoration: "none",
  },

  hr: {
    width: "100%",
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
      fontSize: "2rem",
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
      fontSize: "2.5rem",
    },
  },
};

export default BlogPostCardCSS;
