import React from "react";
import { makeStyles } from "@material-ui/styles";

import TestimonialCarousel from "../../../CustomComponents/TestimonialCarousel/TestimonialCarousel";

// Image imports
import AnandKulkarni from "../../../Assets/img/testimonials/AnandKulkarni.png";

const useStyles = makeStyles({
  root: {
    minHeight: "var(--minHeight)",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "var(--gray-100)",
  },
});

// Testimonial Data
const list = [
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

function Testimonials(props) {
  const classes = useStyles();

  return (
    <section className={classes.root}>
      <TestimonialCarousel list={list} />
    </section>
  );
}

export default Testimonials;
