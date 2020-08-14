import api, { URL_CLASSES, URL_CLASSES_ALL, URL_CLASSES_SUBJECTS } from "./api";

export interface iTeacher {
  id: number;
  subject: string;
  cost: number;
  user_id: number;
  name: string;
  avatar: string;
  whatsapp: number;
  bio: string;
}
export interface iSubject {
  subject: string;
}

const getClasses = (subject: string, weekDay: number, time: string) => {
  const objectSend = { params: { subject, week_day: weekDay, time } };
  return new Promise<iTeacher[]>((resolve, reject) => {
    api
      .get(URL_CLASSES, objectSend)
      .then(({ data }) => resolve(data))
      .catch((err) => reject(`Error: ${err}`));
  });
};

const getClassesAll = () => {
  return new Promise<iTeacher[]>((resolve, reject) => {
    api
      .get(URL_CLASSES_ALL)
      .then(({ data }) => resolve(data))
      .catch((err) => reject(`Error: ${err}`));
  });
};

const getClassesSubjects = () => {
  return new Promise<iSubject[]>((resolve, reject) => {
    api
      .get(URL_CLASSES_SUBJECTS)
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

export { getClasses, getClassesAll, getClassesSubjects, createClass };
