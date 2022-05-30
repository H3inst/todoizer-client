import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  projects: [],
  project: {}
};

export const projectSlice = createSlice({
  name: 'project',
  initialState,
  reducers: {
    getAllProjects: (state, action) => {
      state.projects = action.payload;
    }
  }
});

export const { getAllProjects } = projectSlice.actions;
const projectReducer = projectSlice.reducer;

export default projectReducer;