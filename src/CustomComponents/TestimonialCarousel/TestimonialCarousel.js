import React from "react";
import { makeStyles } from "@material-ui/styles";
import clsx from "clsx";

import { ReactComponent as DoubleLeftIcon } from "../../Assets/svg/DoubleLeft.svg";
import { ReactComponent as DoubleRightIcon } from "../../Assets/svg/DoubleRight.svg";

// CSS
const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
  },

  slideContainer: {
    width: "90vw",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  arrow: {
    width: "45px",
    height: "45px",
    color: "#111",
    cursor: "pointer",
    opacity: "0.75",
    transition: "opacity 0.15s cubic-bezier(0.4, 0, 1, 1)",
    "&:hover": {
      opacity: "0.5",
    },
  },

  slide: {
    width: "80vw",
    padding: "2rem",
    display: "none",
    textAlign: "center",
    listStyleType: "none",
  },
  slideActive: {
    display: "block",
  },

  indicatorList: {
    marginTop: "2rem",
    display: "flex",
    justifyContent: "center",
    listStyleType: "none",
  },

  indicator: {
    margin: "0 0.2rem",
    display: "block",
    width: "24px",
    height: "3px",
    backgroundColor: "#111",
    cursor: "pointer",
    opacity: "0.15",
    transition: "opacity 0.15s cubic-bezier(0.4, 0, 1, 1)",

    "&:hover": {
      opacity: "0.5",
    },
  },
  indicatorActive: {
    opacity: "0.75",
    "&:hover": {
      opacity: "0.75",
    },
  },

  comment: {
    padding: "1rem",
    fontSize: "1.2rem",
    fontWeight: "500",
  },

  image: {
    width: "50px",
  },

  name: {
    fontSize: "0.8rem",
    fontWeight: "700",
  },

  websiteURL: {
    fontSize: "0.8rem",
    fontStyle: "italic",
    color: "#888",
  },
});

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

function TestimonialCarousel(props) {
  const classes = useStyles();

  const [activeIndex, setActiveIndex] = React.useState(0);

  const goToSlide = (index) => {
    setActiveIndex(index);
  };

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
