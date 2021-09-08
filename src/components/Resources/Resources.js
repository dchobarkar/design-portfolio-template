import React from "react";
import { makeStyles } from "@material-ui/styles";

import BlogImg1 from "../../Assets/img/portfolio/portfolio1.png";

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
  blogContainer: {
    padding: "2rem",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
  },
  blogImage: {
    width: "40%",
  },
  blogContent: {
    width: "60%",
    lineHeight: "1.5rem",
  },
  img: {
    width: "250px",
  },
  date: {
    padding: "0.5rem",
    fontSize: "0.7rem",
  },
  heading: {
    padding: "0.5rem",
    fontSize: "2rem",
  },
  content: {
    padding: "0.5rem",
  },
});

function Resources(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.blogContainer}>
        <div className={classes.blogImage}>
          <img className={classes.img} alt="blogPost" src={BlogImg1} />
        </div>

        <div className={classes.blogContent}>
          <p className={classes.date}>08/09/2021</p>
          <p className={classes.heading}>
            Affirmations this freelance web designer lives by
          </p>
          <p className={classes.content}>
            Originally posted May 24, 2012, this post has been updated with new
            additions. As a busy freelancer, remembering to say "no," letting
            work be good enough, and turning off my darn email once in a while,
            helps me stay productive and focused. And sometimes, I have to
            remind …
          </p>
        </div>
      </div>

      <div className={classes.blogContainer}>
        <div className={classes.blogImage}>
          <img className={classes.img} alt="blogPost" src={BlogImg1} />
        </div>

        <div className={classes.blogContent}>
          <p className={classes.date}>08/09/2021</p>
          <p className={classes.heading}>
            Affirmations this freelance web designer lives by
          </p>
          <p className={classes.content}>
            Originally posted May 24, 2012, this post has been updated with new
            additions. As a busy freelancer, remembering to say "no," letting
            work be good enough, and turning off my darn email once in a while,
            helps me stay productive and focused. And sometimes, I have to
            remind …
          </p>
        </div>
      </div>
      <div className={classes.blogContainer}>
        <div className={classes.blogImage}>
          <img className={classes.img} alt="blogPost" src={BlogImg1} />
        </div>

        <div className={classes.blogContent}>
          <p className={classes.date}>08/09/2021</p>
          <p className={classes.heading}>
            Affirmations this freelance web designer lives by
          </p>
          <p className={classes.content}>
            Originally posted May 24, 2012, this post has been updated with new
            additions. As a busy freelancer, remembering to say "no," letting
            work be good enough, and turning off my darn email once in a while,
            helps me stay productive and focused. And sometimes, I have to
            remind …
          </p>
        </div>
      </div>
      <div className={classes.blogContainer}>
        <div className={classes.blogImage}>
          <img className={classes.img} alt="blogPost" src={BlogImg1} />
        </div>

        <div className={classes.blogContent}>
          <p className={classes.date}>08/09/2021</p>
          <p className={classes.heading}>
            Affirmations this freelance web designer lives by
          </p>
          <p className={classes.content}>
            Originally posted May 24, 2012, this post has been updated with new
            additions. As a busy freelancer, remembering to say "no," letting
            work be good enough, and turning off my darn email once in a while,
            helps me stay productive and focused. And sometimes, I have to
            remind …
          </p>
        </div>
      </div>
    </div>
  );
}

export default Resources;
