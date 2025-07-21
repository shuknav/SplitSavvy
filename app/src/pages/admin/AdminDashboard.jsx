import React from "react";
import ButtonField from "../../components/ButtonField";
import { useNavigate } from "react-router-dom";

function AdminDashboard() {
  const navigate = useNavigate();

  function HandleLogout() {
    sessionStorage.removeItem("Admin Token");
    navigate("/admin");
  }

  function HandleSettings() {
    navigate("/admin/settings");
  }

  function HandleRequests() {
    navigate("/admin/managerequest");
  }

  return (
    <>
      <ButtonField text={"logout"} handleClick={HandleLogout} />
      <ButtonField text={"Settings"} handleClick={HandleSettings} />
      <ButtonField text={"Pending Requests"} handleClick={HandleRequests} />
    </>
  );
}

export default AdminDashboard;
