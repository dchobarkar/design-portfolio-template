import React from "react";
import { makeStyles } from "@material-ui/styles";

import TestimonialCard from "../../../CustomComponents/TestimonialCard/TestimonialCard";
import TestimonialListList from "./TestimonialList.list";
import TestimonialListCSS from "./TestimonialList.css";

// CSS
const useStyles = makeStyles({ ...TestimonialListCSS });

// Driver component
function TestimonialList(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <h1 className={classes.header}>My clients say the nicest things.</h1>

      <div className={classes.container}>
        {TestimonialListList.map((testimonial) => (
          <TestimonialCard key={testimonial.name} {...testimonial} />
        ))}
      </div>
    </div>
  );
}

export default TestimonialList;
