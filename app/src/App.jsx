//Import core react functionality
import React from "react";
//Import routing components from React Router
import { BrowserRouter, Routes, Route } from "react-router-dom";
//Import all the pages components used in routing
import Landing from "./pages/landing/Landing";
import Login from "./pages/authentication/Login";
import Waitlist from "./pages/waitlist/Waitlist";
import WaitlistCheck from "./pages/waitlist/WaitlistCheck";
import WIP from "./pages/misc/WIP";
import PageNotFound from "./pages/misc/404";
import AdminLanding from "./pages/landing/AdminLanding";
import Message from "./pages/misc/Message";

//App functions defining all routes and structure of application
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/waitlist" element={<Waitlist />} />
          <Route path="/waitlistcheck" element={<WaitlistCheck />} />
          <Route path="/message" element={<Message />} />
          <Route path="/wip" element={<WIP />} />
          <Route path="/admin" element={<AdminLanding />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

//Export default component
export default App;
