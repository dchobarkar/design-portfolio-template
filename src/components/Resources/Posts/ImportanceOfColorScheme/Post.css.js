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
    fontSize: "1.5rem",
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
    fontSize: "0.8rem",
    color: "var(--text-black)",
  },

  content: {
    paddingTop: "1rem",
    fontFamily: "Lato,sans-serif",
    fontWeight: "500",
    fontSize: "1.2rem",
  },

  /* Tablet view */
  "@media only screen and (min-width: 401px) and (max-width: 960px)": {
    root: {
      padding: "4rem 60px",
    },

    postHeader: {
      fontSize: "2rem",
    },

    authorContainer: {
      paddingLeft: "10%",
    },

    authorImage: {
      width: "3rem",
      marginRight: "2rem",
    },

    author: {
      fontSize: "1rem",
    },

    content: {
      width: "80%",
      paddingTop: "2rem",
      fontSize: "1.5rem",
    },
  },

  /* Desktop view */
  "@media only screen and (min-width: 961px)": {
    root: {
      padding: "4rem 120px",
    },

    postHeader: {
      fontSize: "2rem",
    },

    authorContainer: {
      paddingLeft: "20%",
    },

    authorImage: {
      width: "3rem",
      marginRight: "3rem",
    },

    author: {
      fontSize: "1rem",
    },

    content: {
      width: "60%",
      paddingTop: "3rem",
      fontSize: "1.5rem",
    },
  },
};

export default PostCSS;
