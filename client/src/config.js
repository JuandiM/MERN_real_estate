import axios from 'axios';

export const axiosInstance = axios.create ({
  baseURL: 'https://onedprop.herokuapp.com/api/',
});
