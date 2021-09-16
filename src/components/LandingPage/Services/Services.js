import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Link } from "react-router-dom";

import ServiceCard from "../../../CustomComponents/ServiceCard/ServiceCard";

//CSS
const useStyles = makeStyles({
  root: {
    minHeight: "var(--minHeight)",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "2rem 0",
    backgroundColor: "var(--gray-100)",
  },
  serviceCardContainer: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
  },
  serviceLink: {
    width: "200px",
    margin: "1rem",
    padding: "0.5rem 1rem",
    fontSize: "1.5rem",
    textAlign: "center",
    textDecoration: "none",
    color: "var(--secondary-text)",
    backgroundColor: "transperant",
    border: "1px solid var(--gray)",
    borderRadius: "10rem",
    transition: "all 0.5s ease",

    "&:hover": {
      transform: "scale(1.1)",
      color: "var(--primary-text)",
      backgroundColor: "var(--gray-900)",
      transition: "all 0.5s ease",
    },
  },
});

// Services to be shown
const services = [
  {
    title: "DESIGN + DEVELOPMENT",
    description:
      "Clean & modern designs - optimized for performance, search engines, and converting users to consumers.",
  },
  {
    title: "E-COMMERCE",
    description:
      "Integration of eCommerce platforms, payment gateways, custom products templates, and more.",
  },
  {
    title: "SEO ( SEARCH ENGINE OPTIMIZATION )",
    description:
      "Improve and promote your website in order to increase the number of visitors it receives.",
  },
];

function Services(props) {
  const classes = useStyles();

  return (
    <section className={classes.root}>
      <div className={classes.serviceCardContainer}>
        {services.map((service) => (
          <ServiceCard key={service.title} {...service} />
        ))}
      </div>

      <Link className={classes.serviceLink} to="/services">
        More
      </Link>
    </section>
  );
}

export default Services;
