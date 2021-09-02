import React from "react";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  root: {
    minHeight: "var(--minHeight)",
    width: "100%",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "var(--gray-100)",
  },
  serviceContainer: {
    maxWidth: "300px",
    height: "300px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "2rem",
  },
  service: {
    fontSize: "1.1rem",
    fontWeight: "600",
    textAlign: "center",
    padding: "1rem",
  },
  description: {
    fontSize: "1rem",
    textAlign: "justify",
  },
});

function Services(props) {
  const classes = useStyles();

  return (
    <section className={classes.root}>
      <div className={classes.serviceContainer}>
        <p className={classes.service}>DESIGN + DEVELOPMENT</p>
        <p className={classes.description}>
          Clean & modern designs - optimized for performance, search engines,
          and converting users to consumers.
        </p>
      </div>

      <div className={classes.serviceContainer}>
        <p className={classes.service}>ECOMMERCE</p>
        <p className={classes.description}>
          Integration of eCommerce platforms, payment gateways, custom products
          templates, and more.
        </p>
      </div>

      <div className={classes.serviceContainer}>
        <p className={classes.service}>ANALYTICS</p>
        <p className={classes.description}>
          Get insights into who is browsing your site so that you can make
          smarter business decisions.
        </p>
      </div>

      <div className={classes.serviceContainer}>
        <p className={classes.service}>LOGO DESIGN</p>
        <p className={classes.description}>
          A processional yet creative logo that reflects your company's spirit
          and leaves a lasting, memorable effects.
        </p>
      </div>

      <div className={classes.serviceContainer}>
        <p className={classes.service}>MOBILE FRIENDLY</p>
        <p className={classes.description}>
          A responsive design that makes your website accessible to all users,
          regardless of their device.
        </p>
      </div>

      <div className={classes.serviceContainer}>
        <p className={classes.service}>SEO ( SEARCH ENGINE OPTIMIZATION )</p>
        <p className={classes.description}>
          Improve and promote your website in order to increase the number of
          visitors it receives.
        </p>
      </div>

      <div className={classes.serviceContainer}>
        <p className={classes.service}>SOCIAL MEDIA INTEGRATION</p>
        <p className={classes.description}>
          Enable your website to post updates on facebook, display twitter feed,
          and link your social media accounts.
        </p>
      </div>

      <div className={classes.serviceContainer}>
        <p className={classes.service}>WEBSITE AUDITS</p>
        <p className={classes.description}>
          Looking to improve your page performance, SEO, or user experience?
          Request a free site audit.
        </p>
      </div>
    </section>
  );
}

export default Services;
