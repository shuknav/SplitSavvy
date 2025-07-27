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

export async function fetchWaitlistData() {
  try {
    const res = await axios.post(`${baseURL}/waitlist/list`);
    return {
      success: true,
      status: res.status,
      message: res.data.message,
      result: res.data.result,
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

export async function approveWaitlist(email) {
  try {
    const res = await axios.post(`${baseURL}/waitlist/approve`, {
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

export async function rejectWaitlist(email) {
  try {
    const res = await axios.post(`${baseURL}/waitlist/reject`, {
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

export async function tokenValidation(token) {
  try {
    const res = await axios.get(`${baseURL}/waitlist/tokenverify`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return {
      success: true,
      status: res.status,
      message: res.data.message,
      mode: res.data.mode,
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

export async function onBoard(token, password) {
  try {
    const res = await axios.post(`${baseURL}/waitlist/onboard`, {
      token,
      password,
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
