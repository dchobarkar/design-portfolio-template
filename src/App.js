import React, { Suspense } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Spinner from "./CustomComponents/Spinner/Spinner";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

const LandingPage = React.lazy(() => {
  return import("./components/LandingPage/LandingPage");
});

const Portfolio = React.lazy(() => {
  return import("./components/Porfolio/Porfolio");
});

const Services = React.lazy(() => {
  return import("./components/Services/Services");
});

const Resources = React.lazy(() => {
  return import("./components/Resources/Resources");
});

const About = React.lazy(() => {
  return import("./components/About/About");
});

// Blogpost imports
const ImportanceOfColorScheme = React.lazy(() => {
  return import("./components/Resources/Posts/ImportanceOfColorScheme/Post");
});

function App(props) {
  return (
    <BrowserRouter>
      <Navbar />

      <Suspense fallback={<Spinner />}>
        <Switch>
          <Route
            path="/"
            exact
            render={(props) => <LandingPage {...props} />}
          />

          <Route
            path="/portfolio"
            exact
            render={(props) => <Portfolio {...props} />}
          />

          <Route
            path="/services"
            exact
            render={(props) => <Services {...props} />}
          />

          <Route
            path="/resources"
            exact
            render={(props) => <Resources {...props} />}
          />

          <Route path="/about" exact render={(props) => <About {...props} />} />

          {/* Blogpost routes */}
          <Route
            path="/resources/importance-of-color-scheme-in-website"
            exact
            render={(props) => <ImportanceOfColorScheme {...props} />}
          />
        </Switch>
      </Suspense>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
