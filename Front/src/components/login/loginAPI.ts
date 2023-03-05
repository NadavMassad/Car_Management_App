import axios from 'axios';
import { Cred } from '../../models/Cred'

const LOGIN_SERVER = 'http://127.0.0.1:8000/login'
const REG_SERVER = 'http://127.0.0.1:8000/reg'
const PROFILE_SERVER = 'http://127.0.0.1:8000/profile'

export const login = async (cred: Cred) => {
  return await axios.post(LOGIN_SERVER, cred).then((res) => res.data)
}

export const register = async (cred: Cred) => {
  return await axios.post(REG_SERVER, cred).then((res) => res.data);
}

export const getProfile = async (token: string) => {
  return await axios.get(PROFILE_SERVER, {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  }).then((res) => res.data);
}
