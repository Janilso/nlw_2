import axios from "axios";

const URL_BASE = "http://localhost:3333";
const URL_CONNECTIONS = `/connections`;
const URL_CLASSES = `/classes`;

export { URL_BASE, URL_CONNECTIONS, URL_CLASSES };

const api = axios.create({
  baseURL: URL_BASE,
});

api.defaults.headers.post["Content-Type"] = "application/json";
api.defaults.headers.post["Access-Control-Allow-Origin"] = "true";

export default api;
