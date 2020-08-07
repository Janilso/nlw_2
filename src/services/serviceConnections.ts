import api, { URL_CONNECTIONS } from "./api";

interface PromisseTypes {
  total: number;
}

const getConnections = () => {
  return new Promise<PromisseTypes>((resolve, reject) => {
    api
      .get(URL_CONNECTIONS)
      .then(({ data }) => resolve(data))
      .catch((err) => reject(`Error: ${err}`));
  });
};

const createConnections = (objectSend: Object) => {
  return new Promise<PromisseTypes>((resolve, reject) => {
    api
      .post(URL_CONNECTIONS, objectSend)
      .then(({ data }) => resolve(data))
      .catch((err) => reject(`Error: ${err}`));
  });
};

export { getConnections, createConnections };
