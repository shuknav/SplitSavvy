import axios from "axios";

const baseURL = import.meta.env.VITE_BACKEND_URL;
//api logic handling page for authentication

export async function loginEmailCheck(email) {
  try {
    const res = await axios.get(`${baseURL}/auth/check?email=${email}`);
    return res.data;
  } catch (err) {
    throw err.response?.data || { error: "Something went wrong" };
  }
}

export async function loginVerify(email, password) {
  try {
    const res = await axios.post(`${baseURL}/auth/login`, {
      email,
      password,
    });
    return res.data;
  } catch (err) {
    throw err.response?.data || { error: "Something went wrong" };
  }
}

export async function TokenVerify(token) {
  try {
    const res = await axios.get(`${baseURL}/auth/tokenverify`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data;
  } catch (err) {
    console.log(err);
  }
}

export async function UserDetails(token) {
  try {
    const res = await axios.get(`${baseURL}/auth/userdetails`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data;
  } catch (err) {
    console.log(err);
  }
}

export async function PassChange(oldPass, cNewPass) {
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
