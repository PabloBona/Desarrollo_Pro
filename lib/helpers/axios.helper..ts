import axios from 'axios';
import Cookie from 'js-cookie';
import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();
const BASE_URL = publicRuntimeConfig.BASE_URL;
const TOKEN = typeof window !== 'undefined' ? Cookie.get('token') : '';

const instance = axios.create({
  baseURL: BASE_URL,
  headers: { Authorization: `Bearer ${TOKEN}` },
});

export default instance;
