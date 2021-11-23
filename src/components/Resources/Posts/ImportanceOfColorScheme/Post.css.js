const PostCSS = {
  root: {
    padding: "3rem 30px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#E6EFED",
  },

  header: {
    paddingBottom: "1rem",
    fontFamily: "Dosis,sans-serif",
    fontSize: "var(--mobView-1)",
    fontWeight: "500",
    textAlign: "Center",
    color: "#F86449",
  },

  container: {
    width: "100%",
    paddingBottom: "1rem",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    borderBottom: "1px solid var(--text-white)",
  },

  image: {
    width: "2.5rem",
    marginRight: "1rem",
    borderRadius: "50%",
  },

  author: {
    fontFamily: "Lato,sans-serif",
    fontSize: "var(--mobView-5)",
    fontWeight: "300",
    color: "var(--text-black)",
  },

  content: {
    paddingTop: "1rem",
    fontFamily: "Lato,sans-serif",
    fontSize: "var(--mobView-3)",
    fontWeight: "400",
    lineHeight: "1.5rem",
    color: "var(--text-black)",
  },

  /* Tablet view */
  "@media only screen and (min-width: 401px) and (max-width: 960px)": {
    root: {
      padding: "4rem 60px",
    },

    header: {
      fontSize: "var(--tabView-1)",
    },

    container: {
      paddingLeft: "10%",
    },

    image: {
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

    header: {
      fontSize: "var(--desView-1)",
    },

    container: {
      paddingLeft: "20%",
    },

    image: {
      width: "3rem",
      marginRight: "3rem",
    },

    author: {
      fontSize: "var(--desView-5)",
    },

    content: {
      width: "50%",
      paddingTop: "3rem",
      fontSize: "var(--desView-3)",
    },
  },
};

export default PostCSS;
