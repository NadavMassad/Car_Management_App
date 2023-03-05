import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../app/store';
import { getProfile, login, register } from './loginAPI';
import {Cred} from '../../models/Cred'


export interface loginState {
  access: any
  logged:boolean
}

const initialState: loginState = {
  access: localStorage.getItem('token'),
  logged: localStorage.hasOwnProperty('token'),
};

export const loginAsync = createAsyncThunk(
  'login/login',
  async (cred: any) => {
    const response = await login(cred);
    return response;
  }
);

export const regAsync = createAsyncThunk(
  'login/register',
  async (cred: Cred) => {
    const response = await register(cred);
    return response;
  }
);


export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    logout:(state)=>{
      state.logged = false
      localStorage.removeItem('token');
      state.access = ""
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginAsync.fulfilled, (state, action) => {
        state.access = action.payload.access;
        localStorage.setItem("token", action.payload.access)
        state.logged = true
      });
  },
});

export const {logout } = loginSlice.actions;
export const userAccess = (state: RootState) => state.login.access;
export const isLogged = (state: RootState) => state.login.logged;
export default loginSlice.reducer;
