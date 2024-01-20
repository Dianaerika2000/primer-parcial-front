import axios from "axios";

const api = axios.create({
  // baseURL: "https://diagram-api.adaptable.app/api",
  baseURL: "http://localhost:3000/api",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default api;