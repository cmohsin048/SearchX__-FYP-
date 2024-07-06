import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  // Check localStorage directly for the logged-in state
  isLoggedIn: localStorage.getItem('isLoggedIn') === 'true',
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setLoggedIn: (state) => {
      state.isLoggedIn = true;
      localStorage.setItem('isLoggedIn', 'true'); // Ensure localStorage is updated
    },
    setLoggedOut: (state) => {
      state.isLoggedIn = false;
      localStorage.setItem('isLoggedIn', 'false'); // Ensure localStorage is updated
    },
  },
});

export const { setLoggedIn, setLoggedOut } = authSlice.actions;
export default authSlice.reducer;
