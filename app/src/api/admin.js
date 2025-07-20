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

export async function PasswordUpdate(oldPassword, newPassword) {
  try {
    const res = await axios.post(`${baseURL}/admin/passwordupdate`, {
      oldPassword,
      newPassword,
    });
    return res.data;
  } catch (err) {
    console.log(err);
  }
}
