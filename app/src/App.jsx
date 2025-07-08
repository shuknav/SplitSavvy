import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/landing";
import Login from "./pages/login";
import Waitlist from "./pages/waitlist";
import WaitlistSuccess from "./pages/waitlistSuccess";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/waitlist" element={<Waitlist />} />
          <Route path="/waitlistSuccess" element={<WaitlistSuccess />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
