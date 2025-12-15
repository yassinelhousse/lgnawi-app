import axios from "axios";

export const API = axios.create({
  baseURL: "http://192.168.1.84:3000/api",
  timeout: 8000,
  headers: {
    "Content-Type": "application/json",
  },
});
