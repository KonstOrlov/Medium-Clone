import axios from "axios";
import { getItem } from '@/helpers/persistanceStorage'
axios.defaults.baseURL = 'https://conduit.productionready.io/api';

axios.interceptors.request.use(config => {
  const token = getItem('authToken');
  config.headers.Authorization = token ? `Token ${token}` : '';
  return config
})

export default axios;