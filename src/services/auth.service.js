import axios from 'axios';

export const AuthService = {
  async registration(data) {
    return await axios.post('/auth/registration', data);
  },
  async login(data) {
    return await axios.post('/auth/login', data);
  },
};
