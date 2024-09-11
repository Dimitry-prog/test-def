import axios from 'axios';

export const axiosInfinityInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_INFINITY_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const axiosWeatherInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_WEATHER_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const axiosSocketInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_SOCKET_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});
