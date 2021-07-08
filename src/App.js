import React, { Suspense } from "react";

function App() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <section>Portfolio</section>
      </Suspense>
    </div>
  );
}

export default App;
