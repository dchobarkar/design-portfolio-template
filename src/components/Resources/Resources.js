import React from "react";
import { makeStyles } from "@material-ui/styles";

import BlogPostCard from "../../CustomComponents/BlogPostCard/BlogPostCard";
import ResourcesList from "./Resources.list";
import ResourcesCSS from "./Resouces.css";

// CSS
const useStyles = makeStyles({ ...ResourcesCSS });

// Driver component
function Resources(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {ResourcesList.map((blogPost) => (
        <BlogPostCard key={blogPost.heading} {...blogPost} />
      ))}
    </div>
  );
}

export default Resources;
