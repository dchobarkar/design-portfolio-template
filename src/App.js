import React, { Suspense } from "react";

import Spinner from "./CustomComponents/Spinner/Spinner";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

import LandingPage from "./components/LandingPage/LandingPage";

function App(props) {
  return (
    <React.Fragment>
      <Navbar />

      <Suspense fallback={<Spinner />}>
        <LandingPage {...props} />
      </Suspense>

      <Footer />
    </React.Fragment>
  );
}

export default App;
