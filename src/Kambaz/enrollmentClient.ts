import axios from "axios";
const REMOTE_SERVER = import.meta.env.VITE_REMOTE_SERVER;
const ENROLLMENTS_API = `${REMOTE_SERVER}/api/enrollments`;
const axiosWithCredentials = axios.create({ withCredentials: true });

export const enrollCourse = async (courseId: string) => {
  const { data } = await axiosWithCredentials.post(`${ENROLLMENTS_API}/${courseId}`);
  return data;
};

export const unEnrollCourse = async (courseId: string) => {
    const { data } = await axiosWithCredentials.delete(`${ENROLLMENTS_API}/${courseId}`);
    return data;
  };
  