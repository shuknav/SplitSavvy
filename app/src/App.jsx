//Import core react functionality
import React from "react";
//Import routing components from React Router
import { BrowserRouter, Routes, Route } from "react-router-dom";
//Import all the pages components used in routing
import Landing from "./layouts/landing";
import Login from "./pages/authentication/Login";
import Waitlist from "./pages/waitlist/Waitlist";
import WaitlistCheck from "./pages/waitlist/WaitlistCheck";
import LoginUserNotFound from "./pages/auth/loginUserNotExist";
import Success from "./pages/success";
import PageNotFound from "./pages/pageNotFound";
import AdminLanding from "./pages/admin/dashboard/adminLanding";
import AdminDashboard from "./layouts/adminDashboard";
import AdminAcceptLog from "./pages/admin/logs/adminAcceptLogs";
import WaitlistMessage from "./pages/waitlist/WaitlistMessage";

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
          <Route path="/waitlistmessage" element={<WaitlistMessage />} />
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
