import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Async thunk action to get projects
export const getTeams = createAsyncThunk('Teams/getTeams', async () => {
  try {
    const response = await axios.get('http://localhost:3300/getTeams' ,{
        withCredentials : true
    } ); // Adjust the API endpoint based on your server configuration
    return response.data;
  } catch (error) {
    throw Error(error.response.data.error || 'something went wrong!' );
  }
});

// Async thunk action to add a project
export const addTeam = createAsyncThunk('Teams/addTeam', async (projectData) => {
  try {
    const response = await axios.post('http://localhost:3300/addTeam', projectData); // Adjust the API endpoint based on your server configuration
    return response.data;
  } catch (error) {
    throw Error(error.response.data.error || 'something went wrong!' );
  }
});

// Teamss slice
const TeamsSlice = createSlice({
  name: 'Teams',
  initialState: {
    Teams: [],
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    // Reducer for getProjects async thunk
    builder.addCase(getTeams.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(getTeams.fulfilled, (state, action) => {
      state.isLoading = false;
      state.Teams = action.payload;
    });
    builder.addCase(getTeams.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });

    // Reducer for addProject async thunk
    builder.addCase(addTeam.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(addTeam.fulfilled, (state, action) => {
      state.isLoading = false;
      state.Teams.push(action.payload);
    });
    builder.addCase(addTeam.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
  },
});

export default TeamsSlice.reducer;
