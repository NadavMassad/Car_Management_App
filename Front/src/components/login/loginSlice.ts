import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../app/store';
import { getProfile, login, register,getDepartments,getRoles } from './loginApi';
import {Cred} from '../../models/Cred'


export interface loginState {
  access: any
  refresh:any
  logged:boolean
}

const initialState: loginState = {
  access: localStorage.getItem('access'),
  refresh: localStorage.getItem('refresh'),
  logged: localStorage.hasOwnProperty('access'),
};

export const loginAsync = createAsyncThunk(
  'login/login',
  async (cred: Cred) => {
    console.log(cred)
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
export const getDepartmentsAsync = createAsyncThunk(
  'login/getDepartments',
  async () => {
    const response = await getDepartments();
    return response;
  }
);
export const getRolesAsync = createAsyncThunk(
  'login/getRoles',
  async () => {
    const response = await getRoles();
    return response;
  }
);

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    logout:(state)=>{
      state.logged = false
      localStorage.removeItem('access');
      state.access = ""
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginAsync.fulfilled, (state, action) => {
        console.log(action.payload)
        state.access = action.payload.access;
        state.refresh = action.payload.refresh;
        localStorage.setItem("access", action.payload.access)
        localStorage.setItem("refresh", action.payload.refresh)
        state.logged = true
      });
  },
});

export const { logout } = loginSlice.actions;
export const userAccess = (state: RootState) => state.login.access;
export const userRefresh = (state: RootState) => state.login.refresh;
export const isLogged = (state: RootState) => state.login.logged;
export default loginSlice.reducer;
