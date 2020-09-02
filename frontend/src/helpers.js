import axios from "axios";

const BASE_URL =
  process.env.REACT_APP_BACKEND_URL || "http://localhost:5000/users";

// POST request to register the new user to the backend using the endpoint "/users"
async function registerUser(data) {
  try {
    const res = await axios.post(`${BASE_URL}`, data);
    return res.data;
  } catch (e) {
    console.log(e);
  }
}

async function getUsers() {
  try {
    const res = await axios.get(`${BASE_URL}`);
    return res.data;
  } catch (e) {
    console.log(e);
  }
}

async function activateAdmin(id, data) {
  try {
    const res = await axios.put(`${BASE_URL}/${id}`, data);
    return res.data;
  } catch (e) {
    console.log(e);
  }
}
export { registerUser, getUsers, activateAdmin };
