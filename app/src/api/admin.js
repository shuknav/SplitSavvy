import axios from "axios";

const baseURL = import.meta.env.VITE_BACKEND_URL;

export async function adminLogin(username, password) {
  try {
    const res = await axios.post(`${baseURL}/admin/verify`, {
      username,
      password,
    });
    return {
      success: true,
      status: res.status,
      message: res.data.message,
      token: res.data.token,
    };
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

export async function tokenVerify(token) {
  try {
    const res = await axios.get(`${baseURL}/admin/tokenverify`, {
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
        "Server unreachable. Please try again later.",
    };
  }
}

export async function passwordUpdate(oldPassword, newPassword, token) {
  try {
    const res = await axios.post(`${baseURL}/admin/passwordupdate`, {
      oldPassword,
      newPassword,
      token,
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

export async function adminAdd(username, password, superUser) {
  try {
    const res = await axios.post(`${baseURL}/admin/add`, {
      username,
      password,
      superUser,
    });
    return { success: true, status: res.status, message: res.data.message };
  } catch (err) {
    return {
      success: false,
      status: err?.response?.status || 500,
      message:
        err?.response?.data?.message ||
        "Server unreachable. Please try adain later.",
    };
  }
}

export async function fetchAdminList() {
  try {
    const res = await axios.post(`${baseURL}/admin/list`);
    return {
      success: true,
      status: res.status,
      message: res.data.message,
      adminList: res.data.list,
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

export async function superUserPermissionsUpdate(username, superUser) {
  try {
    const res = await axios.post(`${baseURL}/admin/superuserpermissions`, {
      username,
      superUser,
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

export async function isSuperUser(token) {
  try {
    const res = await axios.post(`${baseURL}/admin/issuperuser`, {
      token,
    });
    return {
      success: true,
      status: res.status,
      message: res.data.message,
      superUser: res.data.superUser,
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
