import axios from "axios";

const baseURL = import.meta.env.VITE_BACKEND_URL;

export async function submitToWaitlist(email) {
  try {
    const res = await axios.post(`${baseURL}/waitlist/add`, {
      value: email,
    });
    return res.data;
  } catch (err) {
    throw err.response?.data || { error: "Something went wrong" };
  }
}

export async function checkInWaitlist(email) {
  try {
    const res = await axios.get(`${baseURL}/waitlist/check?email=${email}`);
    return res.data;
  } catch (err) {
    throw err.response?.data || { error: "Something went wrong" };
  }
}
