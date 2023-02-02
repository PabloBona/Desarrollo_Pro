import axios from 'axios';
import { User } from '../interfaces/user.interface';

const baseUrl = 'http://68.183.49.192:8001/api/v1';
function createUser(user: User) {
  return axios.post(`${baseUrl}/auth/sign-up`, user);
}

function login(user: { email: string; password: string }) {
  return axios.post(`${baseUrl}/auth/login`, user);
}
export { createUser, login };
