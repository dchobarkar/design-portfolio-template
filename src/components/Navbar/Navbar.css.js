const NavbarCSS = {
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
    fontSize: "var(--mobView-2)",
    fontWeight: "500",
  },

  menu: {
    width: "90%",
    height: "75vh",
    marginLeft: "1rem",
    position: "absolute",
    top: "-100%",
    left: "0",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
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

  /* Mobile view */
  "@media only screen and (max-width:400px)": {
    menu: {
      backgroundColor: "#FEFEFE",
    },
  },

  /* Tablet view */
  "@media only screen and (min-width: 401px) and (max-width: 960px)": {
    root: {
      padding: "0px 60px",
    },

    brand: {
      fontSize: "var(--tabView-2)",
    },

    menu: {
      backgroundColor: "#FEFEFE",
    },
  },

  /* Desktop view */
  "@media only screen and (min-width: 961px)": {
    root: {
      height: "5rem",
      padding: "0px 120px",
    },

    brand: {
      fontSize: "var(--desView-2)",
    },

    menu: {
      height: "4rem",
      position: "static",
      flexDirection: "row",
      justifyContent: "flex-end",
      opacity: "1",
      transition: "all 0.7s ease",
    },

    navbarIcon: {
      display: "none",
    },
  },
};

export default NavbarCSS;
