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

export async function TokenVerify(token) {
  try {
    const res = await axios.get(`${baseURL}/admin/tokenverify`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data;
  } catch (err) {
    console.log(err);
  }
}

export async function PasswordUpdate(oldPassword, newPassword, token) {
  try {
    const res = await axios.post(`${baseURL}/admin/passwordupdate`, {
      oldPassword,
      newPassword,
      token,
    });
    return res.data;
  } catch (err) {
    console.log(err);
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
