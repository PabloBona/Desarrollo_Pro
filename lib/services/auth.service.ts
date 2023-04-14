import axios from '../helpers/axios.helper.';

import { LoginUser, User } from '../interfaces/user.interface';

function createUser(user: User) {
  return axios.post(`/auth/sign-up`, user);
}

function loginUser(user:LoginUser ) {
  return axios.post('auth/login',user)
}

export { createUser,loginUser };
