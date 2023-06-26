import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://frontend-test-assignment-api.abz.agency/api/v1/',
});

instance.interceptors.response.use((response) => {
  return response.data;
});

export default instance;
