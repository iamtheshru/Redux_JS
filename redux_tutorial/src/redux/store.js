import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice.js';
import productsReducer from './slices/productsSlice.js';

const store = configureStore({
  reducer: {
    auth: authReducer,
    products: productsReducer,
  },
});

export default store;
