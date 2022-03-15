import axios from "axios";
console.log(process.env.REACT_APP_DOMAIN);
const axiosClient = axios.create({
  baseURL: process.env.REACT_APP_DOMAIN,
  withCredentials: true,
  headers: {
    crossDomain: true,
    "Content-Type": "application/json",
  },
});
export default axiosClient;
