import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './features/counter/counterSlice'
import authReducer from './features/auth/authSlice'

export const makeStore = () => {
  return configureStore({
    reducer: {
        auth: authReducer,
        counter: counterReducer
    },
  })
}