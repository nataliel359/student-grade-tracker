import axios from 'axios';

const API = "http://localhost:5000";

export const getCourses = async () => {
    const res = await axios.get(`${API}/courses`);
    return res.data;
}

export const addCourse = async (course) => {
    const res = await axios.post(`${API}/courses`, course);
    return res.data;
}