import React from "react";
import { makeStyles } from "@material-ui/styles";

import TestimonialCard from "../../../CustomComponents/TestimonialCard/TestimonialCard";

// Testimonial images
import AnandKulkarni from "../../../Assets/img/testimonials/AnandKulkarni.png";

// CSS
const useStyles = makeStyles({
  root: {
    padding: "2rem 0",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    padding: "2rem",
    fontFamily: "Dosis",
    fontSize: "2rem",
    textAlign: "center",
  },
  testimonialList: {
    padding: "1rem",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
  },
});

const testimonialList = [
  {
    comment: "Darshan is an awesome web designer and developer!",
    imgURL: AnandKulkarni,
    name: "Anand Kulkarni",
    websiteURL: "abcommunity.com",
  },
  {
    comment:
      "From the start, I warned Darshan about my nit-pickiness, but he handled my perfectionistic tendencies with patience and good humor",
    imgURL: AnandKulkarni,
    name: "ROBIN H. RIDLEY",
    websiteURL: "parfaitstudio.com",
  },
  {
    comment:
      "Darshan is by far the best designer I have ever worked with in my life.",
    imgURL: AnandKulkarni,
    name: "CHELSEA BERLER",
    websiteURL: "solamaragency.com",
  },
  {
    comment:
      "I’m grateful for our talented web designer Darshan Chobarkar who worked beautifully under pressure ... and who somehow figured out how to make me look good. ",
    imgURL: AnandKulkarni,
    name: "ED GANDIA",
    websiteURL: "b2blauncher.com",
  },
];

function TestimonialList(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <h2 className={classes.header}>My clients say the nicest things.</h2>

      <div className={classes.testimonialList}>
        {testimonialList.map((testimonial) => (
          <TestimonialCard key={testimonial.name} {...testimonial} />
        ))}
      </div>
    </div>
  );
}

export default TestimonialList;
