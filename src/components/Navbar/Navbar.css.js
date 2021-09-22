export const NavbarCSS = {
  root: {
    height: "4rem",
    padding: "0px 30px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    fontFamily: "Montserrat",
    fontWeight: "400",

    "& a:link,a:visited": {
      color: "#212121",
      textDecoration: "none",
    },
  },

  brand: {
    fontSize: "1.5rem",
  },

  menu: {
    width: "100%",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: "-100%",
    left: "0",
    opacity: "0",
    transition: "all 0.7s ease",
  },
  open: {
    zIndex: "1",
    top: "4rem",
    opacity: "1",
    backgroundImage:
      "linear-gradient(to right bottom, #fffefe, #fdfcfd, #fcfbfc, #faf9fa, #f8f8f9, #f4f4f5, #efeff0, #ebebec, #e3e3e4, #dbdbdc, #d4d4d4, #cccccc)",
    transition: "all 0.7s ease",
  },

  navbarIcon: {
    display: "block",
  },

  icon: {
    width: "2rem",
    height: "2rem",
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
      height: "5rem",
      padding: "0px 120px",
    },

    brand: {
      fontSize: "2rem",
    },

    menu: {
      flexDirection: "row",
      justifyContent: "flex-end",
      position: "static",
      opacity: "1",
    },

    navbarIcon: {
      display: "none",
    },
  },

  blue: {
    backgroundColor: "#1747BF",
    color: "#ffffff",
  },
  orange: {
    backgroundColor: "#F96342",
    color: "#ffffff",
  },
  yellow: {
    backgroundColor: "#FEE832",
    color: "#363323",
  },
  white: {
    backgroundColor: "#ffffff",
    color: "#363323",
  },
  gray: {
    backgroundColor: "#E6EEEC",
    color: "#F96549",
  },
};
