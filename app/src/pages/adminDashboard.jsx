import React from "react";

function AdminDashboard() {
  return (
    <main className="flex flex-col items-center justify-center text-white p-8">
      <h1 className="text-3xl font-bold mb-4">🎉 Logged in as Admin</h1>
      <button
        className="bg-red-500 px-4 py-2 rounded-full text-white"
        onClick={() => {
          document.cookie = "admin_token=; Max-Age=0; path=/";
          navigate("/admin");
        }}
      >
        Logout
      </button>
    </main>
  );
}
export default AdminDashboard;
