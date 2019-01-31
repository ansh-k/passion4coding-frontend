import axios from "axios";
const baseUrl = process.env.REACT_APP_API_URL;

const get = async (url) => {
  return await axios.get(`${baseUrl}${url}`,{ headers:{"Authorization": `Bearer ${window.localStorage.getItem("token")}`}});
}

const create = async (url) => {
  return await axios.post(`${baseUrl}${url}`);
}

export default { get, create }