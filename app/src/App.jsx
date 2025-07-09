import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/landing";
import Login from "./pages/login";
import Waitlist from "./pages/waitlist";
import WaitlistSuccess from "./pages/waitlistSuccess";
import WaitlistCheck from "./pages/waitlistCheckPage";
import WaitlistStatus from "./pages/waitlistStatus";
import WaitlistAlready from "./pages/waitlistAlreadyExist";
import WaitlistUser from "./pages/waitlistUserExist";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/waitlist" element={<Waitlist />} />
          <Route path="/waitlistsuccess" element={<WaitlistSuccess />} />
          <Route path="/waitlistcheck" element={<WaitlistCheck />} />
          <Route path="/waitliststatus" element={<WaitlistStatus />} />
          <Route path="/waitlisterror" element={<WaitlistAlready />} />
          <Route path="/waitlistuserexist" element={<WaitlistUser />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
