import axios from "axios";

const baseURL = import.meta.env.VITE_BACKEND_URL;
//api handling page for waitlist page

export async function addToWaitlist(firstName, lastName, email) {
  try {
    const res = await axios.post(`${baseURL}/waitlist/add`, {
      firstName,
      lastName,
      email,
    });
    return {
      success: true,
      status: res.status,
      message: res.data.message,
    };
  } catch (err) {
    return {
      success: false,
      status: err?.response?.status || 500,
      message:
        err?.response?.data?.message ||
        "Server unreachable. please try again later.",
    };
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

export async function fetchWaitlistData() {
  try {
    const res = await axios.post(`${baseURL}/waitlist/list`);
    return res.data;
  } catch (err) {
    console.log(err);
  }
}

export async function approveWaitlist(email) {
  try {
    const res = await axios.post(`${baseURL}/waitlist/approve`, {
      email,
    });
    return res.data;
  } catch (err) {
    console.log(err);
  }
}

export async function rejectWaitlist(email) {
  try {
    const res = await axios.post(`${baseURL}/waitlist/reject`, {
      email,
    });
    return res.data;
  } catch (err) {
    console.log(err);
  }
}

export async function tokenValidation(token) {
  try {
    const res = await axios.get(`${baseURL}/waitlist/tokenverify`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data;
  } catch (err) {
    console.log(err);
  }
}

export async function onBoard(token, password) {
  try {
    const res = await axios.post(`${baseURL}/waitlist/onboard`, {
      token,
      password,
    });
    return res.data;
  } catch (err) {
    console.log(err);
  }
}
