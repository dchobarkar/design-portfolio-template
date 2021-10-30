import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/styles";

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
            ? clsx(classes.indicator, classes.indicatorActive)
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
          ? clsx(classes.slide, classes.slideActive)
          : classes.slide
      }
    >
      <p className={classes.comment}>"{props.testimonial.comment}"</p>

      <img
        className={classes.image}
        alt={props.testimonial.name}
        src={props.testimonial.imgURL}
      />

      <p>
        <strong className={classes.name}>{props.testimonial.name}</strong>,{" "}
        <small className={classes.websiteURL}>
          {props.testimonial.websiteURL}
        </small>
      </p>
    </li>
  );
}

// Driver component
function TestimonialCarousel(props) {
  const classes = useStyles();

  // Flag for active slide
  const [activeIndex, setActiveIndex] = React.useState(0);

  const goToSlide = (index) => {
    setActiveIndex(index);
  };

  // Function to go next slide
  const goToPreSlide = (e) => {
    e.preventDefault();

    let index = activeIndex;
    let { list } = props;
    let length = list.length;

    if (index < 1) {
      index = length;
    }

    --index;

    setActiveIndex(index);
  };

  // Function to go previous slide
  const goToNextSlide = (e) => {
    e.preventDefault();

    let index = activeIndex;
    let { list } = props;
    let length = list.length - 1;

    if (index === length) {
      index = -1;
    }

    ++index;

    setActiveIndex(index);
  };

  return (
    <div className={classes.root}>
      <div className={classes.slideContainer}>
        <DoubleLeftIcon
          className={classes.arrow}
          onClick={(e) => goToPreSlide(e)}
        />

        <ul>
          {props.list.map((testimonial, index) => (
            <Slide
              key={index}
              index={index}
              activeIndex={activeIndex}
              testimonial={testimonial}
            />
          ))}
        </ul>

        <DoubleRightIcon
          className={classes.arrow}
          onClick={(e) => goToNextSlide(e)}
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
