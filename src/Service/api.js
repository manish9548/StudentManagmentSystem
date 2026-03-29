import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:8080/api",
});

export const registerStudent = (data) => API.post("/auth/register", data);
export const getStudents = () => API.get("/users");
export const deleteStudent = (id) => API.delete(`/users/${id}`);