import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Async thunk for user login
export const loginUser = createAsyncThunk('user/login', async (credentials) => {
  try {
    console.log(credentials)
    const response = await axios.post('http://localhost:3300/login', credentials  ,{
     withCredentials : true
    });
    return response.data;
  } catch (error) {
    console.log(error)
    throw new Error(error.response.data.error || 'Something Went Wrong!');
  }
});

// Async thunk for user signup
export const signupUser = createAsyncThunk('user/signup', async (userData) => {
  try {
    const response = await axios.post('http://localhost:3300/SignUp',userData , {
     withCredentials : true
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message || 'something went wrong!');
  }
});

const userSlice = createSlice({
  name: 'user',
  initialState: {
    isLoggedIn: false,
    user: null,
    isLoading: false,
    error: null,
  },
  reducers: {
    logoutUser: (state) => {
      state.isLoggedIn = false;
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isLoggedIn = true;
        state.user = action.payload;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(signupUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(signupUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isLoggedIn = true;
        state.user = action.payload;
      })
      .addCase(signupUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export const { logoutUser } = userSlice.actions;
export default userSlice.reducer;
