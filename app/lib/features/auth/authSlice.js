import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  loading: false,
  user: {}, // for user object  
  isAuthenticated: false, // for monitoring the registration process.
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
        console.log(state, action)
      state.user = action.payload;
      state.isAuthenticated = true;
    },
    logoutSuccess: (state) => {
      state.user = null;
      state.isAuthenticated = false;
    },
  },
})

export default authSlice.reducer
export const { loginSuccess, logoutSuccess } = authSlice.actions; 