import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Async thunk action to get projects
export const getProjects = createAsyncThunk('projects/getProjects', async () => {
  try {
    const response = await axios.get('http://localhost:3300/getProject' ,{
        withCredentials : true
    } ); // Adjust the API endpoint based on your server configuration
    return response.data;
  } catch (error) {
    throw Error(error.response.data.error || 'something went wrong!' );
  }
});

// Async thunk action to add a project
export const addProject = createAsyncThunk('projects/addProject', async (projectData) => {
  try {
    const response = await axios.post('http://localhost:3300/addProject', projectData); // Adjust the API endpoint based on your server configuration
    return response.data;
  } catch (error) {
    throw Error(error.response.data.error || 'something went wrong!' );
  }
});

// Projects slice
const projectsSlice = createSlice({
  name: 'projects',
  initialState: {
    projects: [],
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    // Reducer for getProjects async thunk
    builder.addCase(getProjects.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(getProjects.fulfilled, (state, action) => {
      state.isLoading = false;
      state.projects = action.payload;
    });
    builder.addCase(getProjects.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });

    // Reducer for addProject async thunk
    builder.addCase(addProject.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(addProject.fulfilled, (state, action) => {
      state.isLoading = false;
      state.projects.push(action.payload);
    });
    builder.addCase(addProject.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
  },
});

export default projectsSlice.reducer;
