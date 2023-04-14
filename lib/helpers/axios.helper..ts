import axios from 'axios';
import Cookie from 'js-cookie';
import getConfig from 'next/config';
import Router from 'next/router';

const { publicRuntimeConfig } = getConfig();
const BASE_URL = publicRuntimeConfig.BASE_URL;

const instance = axios.create({
  baseURL: BASE_URL,
});

instance.interceptors.request.use(
  async (config) => {
    const token = getTokenFromCookie();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    if (error.response && error.response.status === 401) {
      // Redirigir a la página de inicio en caso de un error de autorización, aquí podemos agregar lógica para manejar mejor el error.
      Router.push('/');
    }
    return Promise.reject(error);
  }
);

export default instance;

export function getTokenFromCookie() {
 return Cookie.get('token');
}


