import React from "react";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
  },
  header: {
    padding: "1.5rem",
    textAlign: "center",
    fontSize: "1.5rem",
    fontWeight: "500",
  },
  questionContainer: {
    padding: "0.5rem",
  },
  question: {
    padding: "1rem",
    fontSize: "1.2rem",
    fontWeight: "500",
  },
  answer: {
    padding: "0.5rem 2rem",
    textAlign: "justify",
    fontSize: "1rem",
    maxWidth: "40rem",
  },
});

function FAQ(props) {
  const classes = useStyles();

  return (
    <section className={classes.root}>
      <p className={classes.header}>Frequently Asked Questions</p>

      <div className={classes.questionContainer}>
        <p className={classes.question}>What is custom design ?</p>
        <p className={classes.answer}>
          A custom design starts from a blank slate. Every decision is made
          specifically to suit your needs, from colors to fonts, layout to
          structure. Every single component is entirely customized for you. With
          a custom design, your website will be one-of-a-kind. It’s all about
          getting the right message across and keeping the site structure lean
          and efficient without unnecessary page bloat.
        </p>
      </div>

      <div className={classes.questionContainer}>
        <p className={classes.question}>
          Do I need a custom design or a theme ?
        </p>
        <p className={classes.answer}>
          Well, a pre-built theme might cost a bit less—but it’s generic. I
          specialize in custom-designed themes because it makes anything
          possible. Doesn’t that sound fun? Instead of trying to mold something
          into something else, why not start fresh and build it exactly the way
          you want? Custom design isn’t just about the look—but also how the
          site functions. Pre-built themes can have baked-in functionality that
          you’re probably not going to use. It won’t be streamlined or efficient
          for your needs. A custom-designed theme ensures you can edit
          everything you need to edit, easily. Many of my clients are designers,
          and they want a site that doesn’t look like everybody else’s.
        </p>
      </div>
    </section>
  );
}

export default FAQ;
