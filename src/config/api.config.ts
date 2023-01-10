import axios from "axios";
import { toast } from "react-toastify";

const token = localStorage.getItem("token");
const api = axios.create({
  baseURL: import.meta.env.VITE_BACKEND,
  timeout: 1000,
  headers: {
    authorization: `Bearer ${token}`,
  },
});

axios.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    toast.error(error.response.data.message);
    return Promise.reject(error);
  }
);

export { api };
