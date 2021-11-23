import React from "react";
import { makeStyles } from "@material-ui/styles";

import ServiceCard from "../../../CustomComponents/ServiceCard/ServiceCard";
import ServicesListList from "./ServicesList.list";
import ServicesListCSS from "./ServiceList.css";

// CSS
const useStyles = makeStyles({ ...ServicesListCSS });

// Driver component
function ServicesList(props) {
  const classes = useStyles();

  return (
    <section className={classes.root}>
      {ServicesListList.map((service) => (
        <ServiceCard key={service.service} {...service} />
      ))}
    </section>
  );
}

export default ServicesList;
