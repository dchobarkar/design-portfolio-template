import React from "react";
import { makeStyles } from "@material-ui/styles";

import ServiceCard from "../../../CustomComponents/ServiceCard/ServiceCard";

// CSS
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
    title: "ANALYTICS",
    description:
      "Get insights into who is browsing your site so that you can make smarter business decisions.",
  },
  {
    title: "LOGO DESIGN",
    description:
      "A processional yet creative logo that reflects your company's spirit and leaves a lasting, memorable effects.",
  },
  {
    title: "MOBILE FRIENDLY",
    description:
      "A responsive design that makes your website accessible to all users, regardless of their device.",
  },
  {
    title: "SEO ( SEARCH ENGINE OPTIMIZATION )",
    description:
      "Improve and promote your website in order to increase the number of visitors it receives.",
  },
  {
    title: "SOCIAL MEDIA INTEGRATION",
    description:
      "Enable your website to post updates on facebook, display twitter feed,  and link your social media accounts.",
  },
  {
    title: "WEBSITE AUDITS",
    description:
      "Looking to improve your page performance, SEO, or user experience? Request a free site audit.",
  },
];

function ServicesList(props) {
  const classes = useStyles();

  return (
    <section className={classes.root}>
      {services.map((service) => (
        <ServiceCard
          key={service.title}
          title={service.title}
          description={service.description}
        />
      ))}
    </section>
  );
}

export default ServicesList;
