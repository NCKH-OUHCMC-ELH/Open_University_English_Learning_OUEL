import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_QUIZAPP_URL;

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: { 'Content-Type': 'application/json' },
  timeout: 30000,
});

api.interceptors.request.use((config) => {
  return config;
});

api.interceptors.response.use(
  (response) => response.data,
  (error) => Promise.reject(error)
);

export const getPassages = () => api.get('/passages/');
export const getPassage = (passageId) => api.get(`/passages/${passageId}/`);
export const getPassageRandom = () => api.get(`/passages/random/`);
export const getPassageQuestions = (passageId) => api.get(`/passages/${passageId}/questions/`);
export const checkAnswer = (questionId, answer) =>
  api.post(`/questions/${questionId}/check_answer/`, { answer });

export default api;
