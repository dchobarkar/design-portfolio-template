import React, { Suspense } from "react";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <React.Fragment>
      <Navbar />

      <Suspense fallback={<div>Loading...</div>}>
        <section>Portfolio</section>
      </Suspense>

      <Footer />
    </React.Fragment>
  );
}

export default App;
