import { configureStore } from '@reduxjs/toolkit'
import { popReducer } from './reducer'

export const store = configureStore({
  reducer: {
    first: popReducer,
  },
})