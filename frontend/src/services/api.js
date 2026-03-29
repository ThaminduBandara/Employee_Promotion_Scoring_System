import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
});

export const predictPromotion = async (payload) => {
  const response = await api.post("/predict", payload);
  return response.data;
};