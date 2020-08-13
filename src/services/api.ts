import axios from "axios";
import { toast } from "react-toastify";
const URL_BASE = "http://localhost:3333";
const URL_CONNECTIONS = `/connections`;
const URL_CLASSES = `/classes`;
const URL_CLASSES_ALL = `/classes/all`;

export { URL_BASE, URL_CONNECTIONS, URL_CLASSES, URL_CLASSES_ALL };

const api = axios.create({
  baseURL: URL_BASE,
});

api.defaults.headers.post["Content-Type"] = "application/json";
api.defaults.headers.post["Access-Control-Allow-Origin"] = "true";

const statusMessage = (code: number) => {
  switch (code) {
    case 400:
      return "Falha na requisição.";
    case 401:
      return "Você não tem permissão para seguir com esse acesso.";
    case 403:
      return "Você não tem permissão para seguir com esse acesso.";
    case 404:
      return "Falha ao carregar a página.";
    case 500:
      return "O Serviço está temporariamente Indisponível. Tente novamente mais tarde.";
    case 504:
      return "O Serviço está temporariamente Indisponível. Tente novamente mais tarde.";
    default:
      return "O Serviço está temporariamente Indisponível. Tente novamente mais tarde.";
  }
};

const errorHandler = (error: any) => {
  const {
    response: { status },
  } = error;

  toast.error(statusMessage(status));
  return Promise.reject(error);
};

api.interceptors.response.use(
  (response) => response,
  (error) => errorHandler(error)
);

export default api;
