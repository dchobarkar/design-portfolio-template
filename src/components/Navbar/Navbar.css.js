export const NavbarCSS = {
  root: {
    height: "4rem",
    padding: "0px 30px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    fontFamily: "'Montserrat', sans-serif",

    "& a:link,a:visited": {
      textDecoration: "none",
    },
  },

  brand: {
    fontWeight: "500",
    fontSize: "1.5rem",
  },

  menu: {
    width: "100%",
    height: "100vh",
    position: "absolute",
    top: "-100%",
    left: "0",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "400",
    fontSize: "1rem",
    opacity: "0",
    transition: "all 0.7s ease",
  },
  open: {
    zIndex: "1",
    top: "4rem",
    opacity: "1",
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
      position: "static",
      flexDirection: "row",
      justifyContent: "flex-end",
      opacity: "1",
    },

    navbarIcon: {
      display: "none",
    },
  },
};
