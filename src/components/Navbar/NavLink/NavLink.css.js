export const NavLinkCSS = {
  tab: {
    padding: "2rem 0",
    fontSize: "1.3rem",
    listStyleType: "none",
  },

  /* Tablet view */
  "@media only screen and (min-width: 401px) and (max-width: 960px)": {},

  /* Desktop view */
  "@media only screen and (min-width: 961px)": {
    tab: {
      padding: "0px 1rem",
    },
    active: {
      borderBottomWidth: "1px",
      borderBottomStyle: "solid",
      transition: "all 0.5s ease",
    },
  },
};
