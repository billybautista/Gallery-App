import axios from 'axios';

export const ArticApi = axios.create({
  baseURL: 'https://api.artic.edu/api/v1',
});

ArticApi.interceptors.response.use(
  response => {
    return response.data;
  },
  error => {
    return Promise.reject(error);
  }
);
