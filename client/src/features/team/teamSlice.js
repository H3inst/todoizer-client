import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  teams: []
};

export const teamSlice = createSlice({
  name: 'team',
  initialState,
  reducers: {
    getAllTeams: (state, action) => {
      state.teams = action.payload;
    }
  }
});

export const { getAllTeams } = teamSlice.actions;
const teamReducer = teamSlice.reducer;

export default teamReducer;