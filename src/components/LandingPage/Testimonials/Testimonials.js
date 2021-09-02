import React from "react";
import { makeStyles } from "@material-ui/styles";

import testimonial1 from "../../../Assets/img/testimonial1.png";

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
  testimonialContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  heading: {
    padding: "1rem",
    fontSize: "1.2rem",
    fontWeight: "500",
  },
  description: {
    padding: "1rem",
    fontSize: "1rem",
    fontWeight: "400",
  },
  imageContainer: {
    paddingTop: "40px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  image: { width: "50px" },
  name: {
    fontSize: "0.8rem",
    fontWeight: "700",
  },
  company: {
    fontSize: "0.8rem",
  },
});

function Testimonials(props) {
  const classes = useStyles();

  return (
    <section className={classes.root}>
      <div className={classes.testimonialContainer}>
        <p className={classes.heading}>
          "I loved working with Darshan for my freelance writing website."
        </p>
        <p className={classes.description}>
          "No kidding, I sleep better knowing Darshan's there, for updates,for
          design tweaks."
        </p>
        <div className={classes.imageContainer}>
          <img
            className={classes.image}
            alt="Testimonial 1 "
            src={testimonial1}
          />
          <p className={classes.name}>Anand Kulkarni</p>
          <p className={classes.company}>A B C</p>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
