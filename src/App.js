import React, { Suspense } from "react";

import Spinner from "./CustomComponents/Spinner/Spinner";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

function App(props) {
  return (
    <React.Fragment>
      <Navbar />

      <Suspense fallback={<Spinner />}>
        <section>Portfolio</section>
      </Suspense>

      <Footer />
    </React.Fragment>
  );
}

export default App;
