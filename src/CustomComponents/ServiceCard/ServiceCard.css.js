const ServiceCardCSS = {
  root: {
    minHeight: "250px",
    margin: "1rem",
    padding: "1rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    cursor: "pointer",
    transition: "all ease 200ms",

    "&:hover": {
      transform: "scale(1.03)",
      boxShadow:
        "0 13px 40px -5px hsla(240, 30.1%, 28%, 0.12),0 8px 32px -8px hsla(0, 0%, 0%, 0.14),0 -6px 32px -6px hsla(0, 0%, 0%, 0.02)",
      transition: "all ease 200ms",
    },
  },

  service: {
    padding: "1rem",
    fontFamily: "Dosis,sans-serif",
    fontSize: "var(--mobView-2)",
    fontWeight: "500",
    textAlign: "center",
  },

  description: {
    fontFamily: "Lato,sans-serif",
    fontSize: "var(--mobView-4)",
    fontWeight: "300",
    textAlign: "center",
  },

  /* Tablet view */
  "@media only screen and (min-width: 401px) and (max-width: 960px)": {
    root: {
      minHeight: "300px",
      maxWidth: "275px",
    },

    service: {
      fontSize: "var(--tabView-2)",
    },

    description: {
      fontSize: "var(--tabView-4)",
    },
  },

  /* Desktop view */
  "@media only screen and (min-width: 961px)": {
    root: {
      minHeight: "350px",
      maxWidth: "300px",
    },

    service: {
      fontSize: "var(--desView-2)",
    },

    description: {
      fontSize: "var(--desView-4)",
    },
  },
};

export default ServiceCardCSS;
