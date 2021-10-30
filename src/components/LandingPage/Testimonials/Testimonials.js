import React from "react";
import { makeStyles } from "@material-ui/styles";

import TestimonialCarousel from "../../../CustomComponents/TestimonialCarousel/TestimonialCarousel";
import TestimonialsList from "./Testimonials.list";
import TestimonialsCSS from "./Testimonials.css";

// CSS
const useStyles = makeStyles({ ...TestimonialsCSS });

// Driver component
function Testimonials(props) {
  const classes = useStyles();

  return (
    <section className={classes.root}>
      <TestimonialCarousel list={TestimonialsList} />
    </section>
  );
}

export default Testimonials;
