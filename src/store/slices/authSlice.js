import { getAuthStateFromLS } from '@/helpers/getAuthStateFromLS';
import { AuthService } from '@/services/auth.service';
import { createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const registration = createAsyncThunk(
  'auth/registration',
  async ({ email, password }, { rejectWithValue }) => {
    try {
      return await AuthService.registration(email, password);
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);

export const login = createAsyncThunk(
  'auth/login',
  async ({ email, password }, { rejectWithValue }) => {
    try {
      return await AuthService.login(email, password);
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);

const initialState = getAuthStateFromLS();

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      state.token = null;
    },
  },
  extraReducers: {
    [login.fulfilled]: (state, { payload }) => {
      state.token = payload.accessToken;
      state.user = payload.user;
    },
    [login.rejected]: (state) => {
      state.isLoading = false;
    },
    [login.pending]: (state) => {
      state.isLoading = true;
    },
    [registration.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.user = payload.user;
    },
    [registration.rejected]: (state) => {
      state.isLoading = false;
    },
    [registration.pending]: (state) => {
      state.isLoading = true;
    },
  },
});

export const checkIsAuth = (state) => Boolean(state.auth.token);
export const getIsLoading = (state) => state.auth.isLoading;

export const { logout } = authSlice.actions;

export default authSlice.reducer;
