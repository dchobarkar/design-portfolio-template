const PostCSS = {
  root: {
    padding: "3rem 30px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },

  postHeader: {
    paddingBottom: "1rem",
    fontFamily: "Dosis,sans-serif",
    fontWeight: "500",
    fontSize: "var(--mobView-1)",
    color: "#F86449",
    textAlign: "Center",
  },

  authorContainer: {
    width: "100%",
    paddingBottom: "1rem",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    borderBottom: "1px solid var(--text-white)",
  },

  authorImage: {
    width: "2.5rem",
    marginRight: "1rem",
    borderRadius: "50%",
  },

  author: {
    fontFamily: "Lato,sans-serif",
    fontWeight: "300",
    fontSize: "var(--mobView-5)",
    color: "var(--text-black)",
  },

  content: {
    paddingTop: "1rem",
    fontFamily: "Lato,sans-serif",
    fontWeight: "500",
    fontSize: "var(--mobView-3)",
    lineHeight: "1.5rem",
  },

  /* Tablet view */
  "@media only screen and (min-width: 401px) and (max-width: 960px)": {
    root: {
      padding: "4rem 60px",
    },

    postHeader: {
      fontSize: "var(--tabView-1)",
    },

    authorContainer: {
      paddingLeft: "10%",
    },

    authorImage: {
      width: "3rem",
      marginRight: "2rem",
    },

    author: {
      fontSize: "var(--tabView-5)",
    },

    content: {
      width: "80%",
      paddingTop: "2rem",
      fontSize: "var(--tabView-3)",
    },
  },

  /* Desktop view */
  "@media only screen and (min-width: 961px)": {
    root: {
      padding: "4rem 120px",
    },

    postHeader: {
      fontSize: "var(--desView-1)",
    },

    authorContainer: {
      paddingLeft: "20%",
    },

    authorImage: {
      width: "3rem",
      marginRight: "3rem",
    },

    author: {
      fontSize: "var(--desView-5)",
    },

    content: {
      width: "60%",
      paddingTop: "3rem",
      fontSize: "var(--desView-3)",
    },
  },
};

export default PostCSS;
