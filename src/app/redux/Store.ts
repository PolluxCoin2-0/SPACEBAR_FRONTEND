// store.ts
import { configureStore } from '@reduxjs/toolkit';
import walletReducer from './slice/walletSlice'; // Adjust the import path as needed

const store = configureStore({
  reducer: {
    wallet: walletReducer,
  },
});

// Optional: Export the types of the store and the RootState
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;



