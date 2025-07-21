import React from "react";
import ButtonField from "../../components/ButtonField";
import { useNavigate } from "react-router-dom";

function AdminDashboard() {
  const navigate = useNavigate();

  function HandleLogout() {
    sessionStorage.removeItem("Admin Token");
    navigate("/admin");
  }

  return (
    <>
      <ButtonField text={"logout"} handleClick={HandleLogout} />
      <ButtonField />
      <ButtonField />
    </>
  );
}

export default AdminDashboard;
