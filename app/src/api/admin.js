import axios from "axios";

const baseURL = import.meta.env.VITE_BACKEND_URL;

export async function AdminLogin(username, password) {
  try {
    const res = await axios.post(`${baseURL}/admin/verify`, {
      username,
      password,
    });
    return res.data;
  } catch (err) {
    console.log(err);
  }
}
