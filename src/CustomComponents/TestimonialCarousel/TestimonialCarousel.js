import React, { useState } from "react";
import { makeStyles } from "@material-ui/styles";
import clsx from "clsx";

import { ReactComponent as DoubleLeftIcon } from "../../Assets/svg/DoubleLeft.svg";
import { ReactComponent as DoubleRightIcon } from "../../Assets/svg/DoubleRight.svg";
import TestimonialCarouselCSS from "./TestimonialCarousel.css";

// CSS
const useStyles = makeStyles({ ...TestimonialCarouselCSS });

// Component to show the slide indicator
function Indicator(props) {
  const classes = useStyles();

  return (
    <li>
      <span
        className={
          props.index === props.activeIndex
            ? clsx(classes.indicator, classes.activeIndicator)
            : classes.indicator
        }
        onClick={props.onClick}
      />
    </li>
  );
}

// Component to show slide
function Slide(props) {
  const classes = useStyles();

  return (
    <li
      className={
        props.index === props.activeIndex
          ? clsx(classes.slide, classes.activeSlide)
          : classes.slide
      }
    >
      <h2 className={classes.comment}>"{props.comment}"</h2>

      <img className={classes.image} alt={props.name} src={props.imgURL} />

      <p>
        <strong className={classes.name}>{props.name}</strong>,{" "}
        <small className={classes.websiteURL}>{props.websiteURL}</small>
      </p>
    </li>
  );
}

// Driver component
function TestimonialCarousel(props) {
  const classes = useStyles();

  // Flag for active slide
  const [activeIndex, setActiveIndex] = useState(0);

  // Function to go the index'th slide
  const goToSlide = (index) => {
    setActiveIndex(index);
  };

  // Function to go next slide
  const preSlide = (e) => {
    e.preventDefault();

    let index = activeIndex;

    if (index < 1) {
      index = props.list.length;
    }

    --index;

    setActiveIndex(index);
  };

  // Function to go previous slide
  const nextSlide = (e) => {
    e.preventDefault();

    let index = activeIndex;

    if (index === props.list.length - 1) {
      index = -1;
    }

    ++index;

    setActiveIndex(index);
  };

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <DoubleLeftIcon className={classes.icon} onClick={(e) => preSlide(e)} />

        <ul>
          {props.list.map((testimonial, index) => (
            <Slide
              key={index}
              index={index}
              activeIndex={activeIndex}
              {...testimonial}
            />
          ))}
        </ul>

        <DoubleRightIcon
          className={classes.icon}
          onClick={(e) => nextSlide(e)}
        />
      </div>

      <ul className={classes.indicatorList}>
        {props.list.map((testimonial, index) => (
          <Indicator
            key={index}
            index={index}
            activeIndex={activeIndex}
            isActive={activeIndex === index}
            onClick={() => goToSlide(index)}
          />
        ))}
      </ul>
    </div>
  );
}

export default TestimonialCarousel;
