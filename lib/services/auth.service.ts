import axios from 'axios';
import getConfig from 'next/config';
import { User } from '../interfaces/user.interface';

const { publicRuntimeConfig } = getConfig();
const BASE_URL = publicRuntimeConfig.BASE_URL;

function createUser(user: User) {
  return axios.post(`${BASE_URL}/auth/sign-up`, user);
}

function login(user: { email: string; password: string }) {
  return axios.post(`${BASE_URL}/auth/login`, user);
}
export { createUser, login };
