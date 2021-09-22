import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Link } from "react-router-dom";

import ServiceCard from "../../../CustomComponents/ServiceCard/ServiceCard";

import { ServicesList } from "./Services.list";
import { ServicesCSS } from "./Service.css";

//CSS
const useStyles = makeStyles({ ...ServicesCSS });

function Services(props) {
  const classes = useStyles();

  return (
    <section className={classes.root}>
      <div className={classes.serviceCardContainer}>
        {ServicesList.map((service) => (
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
