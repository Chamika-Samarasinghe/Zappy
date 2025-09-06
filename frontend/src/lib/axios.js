import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "http://loacalhost:5001/api",
  withCredentials: true, //Send cookies with the request
});
