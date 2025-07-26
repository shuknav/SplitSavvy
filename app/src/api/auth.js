import axios from "axios";

const baseURL = import.meta.env.VITE_BACKEND_URL;
//api logic handling page for authentication

export async function loginEmailCheck(email) {
  try {
    const res = await axios.get(`${baseURL}/auth/check?email=${email}`);
    return { success: true, status: res.status, message: res.data.message };
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

export async function loginVerify(email, password) {
  try {
    const res = await axios.post(`${baseURL}/auth/login`, {
      email,
      password,
    });
    return {
      success: true,
      status: res.status,
      message: res.data.message,
      userToken: res.data.token,
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

export async function tokenVerify(token) {
  try {
    const res = await axios.get(`${baseURL}/auth/tokenverify`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return { success: true, status: res.status, message: res.data.message };
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

export async function userDetails(token) {
  try {
    const res = await axios.get(`${baseURL}/auth/userdetails`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return {
      success: true,
      status: res.status,
      message: res.data.message,
      userInfo: res.data.userInfo,
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

export async function passChangeResolver(oldPass, cNewPass) {
  try {
    const res = await axios.post(`${baseURL}/auth/passchange`, {
      oldPass,
      cNewPass,
    });
    return res.data;
  } catch (err) {
    throw err.response?.data || { error: "Something went wrong" };
  }
}

export async function resetPassword(email) {
  try {
    const res = await axios.post(`${baseURL}/auth/reset`, {
      email,
    });
    return { success: true, status: res.status, message: res.data.message };
  } catch (err) {
    return {
      success: false,
      status: err?.response?.status || 500,
      message:
        err?.response?.data?.message ||
        "Server unreachable. Please try again later.",
    };
  }
}
