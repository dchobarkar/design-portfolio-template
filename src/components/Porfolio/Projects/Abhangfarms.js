import React from "react";
import { makeStyles } from "@material-ui/styles";

import ProjectCSS from "./Projects.css";

// CSS
const useStyles = makeStyles({ ...ProjectCSS });

// Driver component
function Abhangfarms(props) {
  const classes = useStyles();

  return (
    <React.Fragment>
      <h1 className={classes.header}>Abhang farms</h1>

      <div className={classes.root}>
        <div className={classes.column}>
          <h2 className={classes.subHeader}>
            Abhang farms is a private organization that constructs and operates
            multiple polyhouse across India.
          </h2>

          <h3 className={classes.topic}>THE CHALLENGE</h3>
          <p className={classes.text}>
            The Aging Mind Foundation reached out to me in need of a complete
            redesign of their current website. They wanted viewers to easily see
            who they are, what they do and how they differ from similar
            organizations. They also wanted the site to drive the reader to take
            action.
          </p>

          <h3 className={classes.topic}>THE SOLUTION</h3>
          <p className={classes.text}>
            Using the Aging Mind Foundation’s brand standards guide, I created a
            warm and friendly website design that connects with the reader with
            distinctive calls to action to donate and get involved. I then built
            a custom WordPress website that is easy for the organization to
            manage and includes specialized events and press sections that are
            simple to update. I continue to support the Aging Mind Foundation
            with ongoing website maintenance.
          </p>
        </div>

        <div className={classes.column}>
          <h3 className={classes.topic}>SERVICES</h3>

          <ul className={classes.list}>
            <li>Website Design</li>
            <li>
              Responsive, front-end web development (HTML, CSS + JavaScript)
            </li>
            <li>Website maintenance</li>
          </ul>
          <button className={classes.button}>VISIT SITE</button>
        </div>
      </div>

      <div className={classes.container}>
        <img className={classes.image} alt="screenShot1" />
        <img className={classes.image} alt="screenShot2" />
        <img className={classes.image} alt="screenShot3" />
        <img className={classes.image} alt="screenShot4" />
      </div>
    </React.Fragment>
  );
}

export default Abhangfarms;
