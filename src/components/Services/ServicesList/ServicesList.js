import React from "react";
import { makeStyles } from "@material-ui/styles";

import ServiceCard from "../../../CustomComponents/ServiceCard/ServiceCard";
import ServicesListCSS from "./ServiceList.css";
import ServicesListList from "./ServicesList.list";

// CSS
const useStyles = makeStyles({ ...ServicesListCSS });

// Driver component
function ServicesList(props) {
  const classes = useStyles();

  return (
    <section className={classes.root}>
      {ServicesListList.map((service) => (
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
