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

export async function AdminAdd(username, password, superUser) {
  try {
    const res = await axios.post(`${baseURL}/admin/add`, {
      username,
      password,
      superUser,
    });
    return res.data;
  } catch (err) {
    console.log(err);
  }
}

export async function FetchAdminList() {
  try {
    const res = await axios.post(`${baseURL}/admin/list`);
    return res.data;
  } catch (err) {
    console.log(err);
  }
}

export async function SuperUserPermissionsUpdate(username, superUser) {
  try {
    const res = await axios.post(`${baseURL}/admin/superuserpermissions`, {
      username,
      superUser,
    });
    return res.data;
  } catch (err) {
    console.log(err);
  }
}

export async function superUser(token) {
  try {
    const res = await axios.post(`${baseURL}/admin/issuperuser`, {
      token,
    });
    return res.data;
  } catch (err) {
    console.log(err);
  }
}
