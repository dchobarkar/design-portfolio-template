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
        </Switch>
      </Suspense>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
