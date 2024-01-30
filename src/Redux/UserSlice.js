import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const login = createAsyncThunk('login', async ({ formvalue, navigate }, { dispatch }) => {
  try {
    dispatch(statloading());
    const response = await axios.post("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAZJ7oHXXkOwe--748f9gwPS7_VkF7jMNA", formvalue);
    if (response.status === 200) {
      navigate('/stats');
      dispatch(loginsucces());
    }
  } catch (error) {
    dispatch(loginfail(error.response.data.error.message));
  }
});

export const signup = createAsyncThunk('signup', async ({ navigate, formvalue }, { dispatch }) => {
  try {
    dispatch(statloading());
    const response = await axios.post("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAZJ7oHXXkOwe--748f9gwPS7_VkF7jMNA", formvalue);
    if (response.status === 200) {
      navigate('/login');
      dispatch(setUser());
    }
  } catch (error) {
    dispatch(setError(error.message));
  }
});

const UserSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    loading: false,
    errormsg: ''
  },
  reducers: {
    statloading: (state, action) => {
      state.loading = true;
    },
    setUser: (state, action) => {
      state.user = action.payload;
      state.loading = false;
      state.errormsg = null;
    },
    loginsucces: (state, action) => {
      state.loading = false;
      state.user = true;
    },
    loginfail: (state, action) => {
      let errormsg = action.payload;
      if (errormsg === "INVALID_EMAIL" || errormsg === "INVALID_PASSWORD") {
        errormsg = "Email or Password is Incorrect!";
      }
      state.loading = false;
      state.errormsg = errormsg;
    },
    logout: (state, action) => {
      state.user = false;
    },
    setError: (state, action) => {
      state.errormsg = action.payload;
      state.loading = false;
    },
  },
});

export const { statloading, loginsucces, loginfail, logout, setUser, setError } = UserSlice.actions;

export default UserSlice.reducer;
