import React from "react";
import { Routes, Route } from "react-router-dom";
import RequireAdminAuth from "../components/auth/RequireAdminAuth";
import AdminDashboard from "../pages/admin/AdminDashboard";
import Settings from "../pages/admin/settings/Settings";
import WaitistManagement from "../pages/admin/WaitlistManagement";
import PageNotFound from "../pages/misc/404";

function AdminRoutes() {
  return (
    <Routes>
      <Route
        path="dashboard"
        element={
          <RequireAdminAuth>
            <AdminDashboard />
          </RequireAdminAuth>
        }
      />
      <Route
        path="settings"
        element={
          <RequireAdminAuth>
            <Settings />
          </RequireAdminAuth>
        }
      />
      <Route
        path="managerequest"
        element={
          <RequireAdminAuth>
            <WaitistManagement />
          </RequireAdminAuth>
        }
      />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default AdminRoutes;
