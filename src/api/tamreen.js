import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const instance = axios.create({
  baseURL: 'http://192.168.43.211:8000/api',
});

instance.interceptors.request.use(
  async (config) => {
    const token = await JSON.parse(AsyncStorage.getItem('token'));
    console.log(`Token in instance is: ${token}`);
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error.response.message);
  },
);

export default instance;
