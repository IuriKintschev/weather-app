import axios from "axios";

const Api = axios.create({
  baseURL: "https://api.openweathermap.org",
  timeout: 1000,
});

export default Api;
