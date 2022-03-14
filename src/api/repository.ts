import axios from "axios";

const axiosClient = axios.create({
  baseURL: "http://127.0.0.1:8000/api/v1/",
  withCredentials: true,
  headers: {
    crossDomain: true,
    "Content-Type": "application/json",
  },
});
export default axiosClient;
