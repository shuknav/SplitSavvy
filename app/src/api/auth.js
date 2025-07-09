import axios from "axios";

const baseURL = import.meta.env.VITE_BACKEND_URL;

export async function loginEmailCheck(email) {
  try {
    const res = await axios.get(`${baseURL}/auth/check?email=${email}`);
    return res.data;
  } catch (err) {
    throw err.response?.data || { error: "Something went wrong" };
  }
}
