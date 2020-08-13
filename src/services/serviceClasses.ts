import api, { URL_CLASSES } from "./api";

export interface Teacher {
  id: number;
  subject: string;
  cost: number;
  user_id: number;
  name: string;
  avatar: string;
  whatsapp: number;
  bio: string;
}

const getClasses = (subject: string, weekDay: number, time: string) => {
  const objectSend = { params: { subject, week_day: weekDay, time } };
  return new Promise<Teacher[]>((resolve, reject) => {
    api
      .get(URL_CLASSES, objectSend)
      .then(({ data }) => resolve(data))
      .catch((err) => reject(`Error: ${err}`));
  });
};

const createClass = (objectSend: Object) => {
  return new Promise((resolve, reject) => {
    api
      .post(URL_CLASSES, objectSend)
      .then(({ data }) => resolve(data))
      .catch((err) => reject(`Error: ${err}`));
  });
};

export { getClasses, createClass };
