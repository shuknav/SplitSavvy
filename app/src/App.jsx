//Import core react functionality
import React from "react";
//Import routing components from React Router
import { BrowserRouter, Routes, Route } from "react-router-dom";
//Import all the pages components used in routing
import Landing from "./pages/landing";
import Login from "./pages/login";
import Waitlist from "./pages/waitlist";
import WaitlistSuccess from "./pages/waitlistSuccess";
import WaitlistCheck from "./pages/waitlistCheckPage";
import WaitlistStatus from "./pages/waitlistStatus";
import WaitlistAlready from "./pages/waitlistAlreadyExist";
import WaitlistUser from "./pages/waitlistUserExist";
import WaitlistUserNotExist from "./pages/waitlistNotExist";
import LoginUserNotFound from "./pages/loginUserNotExist";
import Success from "./pages/success";
import PageNotFound from "./pages/pageNotFound";
import AdminLanding from "./pages/adminLanding";
import AdminDashboard from "./pages/adminDashboard";
import AdminAcceptLog from "./pages/adminAcceptLogs";

//App functions defining all routes and structure of application
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
          <Route
            path="/waitlistusernotexist"
            element={<WaitlistUserNotExist />}
          />
          <Route path="/usernotfound" element={<LoginUserNotFound />} />
          <Route path="/success" element={<Success />} />
          <Route path="/admin" element={<AdminLanding />} />
          <Route path="/admindashboard" element={<AdminDashboard />} />
          <Route path="/adminstats" element={<AdminAcceptLog />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

//Export default component
export default App;
