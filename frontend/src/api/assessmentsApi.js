import axios from 'axios';

const API = "http://localhost:5000";

export const getAssessments = async (courseId) => {
    const res = await axios.get(`${API}/assessments/${courseId}`);
    return res.data;
}

export const addAssessment = async (assessment) => {
    const res = await axios.post(`${API}/assessments`, assessment);
    return res.data;
}