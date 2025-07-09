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

export async function loginCheck(email, password) {
  try {
    const res = await axios.get(
      `${baseURL}/auth/login?email=${email}&password=${password}`
    );
    return res.data;
  } catch (err) {
    throw err.response?.data || { error: "Something went wrong" };
  }
}
