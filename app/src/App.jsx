import React, { useState } from "react";
import Landing from "./pages/landing";
import Waitlist from "./pages/waitlist";
import Login from "./pages/login";

function App() {
  return (
    <>
      {/* <Landing /> */}
      <Waitlist />
      {/* <Login /> */}
    </>
  );
}

export default App;

// import React, { Routes, Route } from "react-router-dom";
// import HomepageLogic from "./HomepageLogic";

// function App() {
//   return (
//     <Routes>
//       <Route path="/" element={<HomepageLogic />} />
//     </Routes>
//   );
// }

// export default App;
