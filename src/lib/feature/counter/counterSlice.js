// // ../lib/features/counter/counterSlice.js
// import { createSlice } from '@reduxjs/toolkit';

// // Initial state
// const initialState = {
//   value: 0,  // The initial count value
// };

// // Create the slice
// const counterSlice = createSlice({
//   name: 'counter',
//   initialState,
//   reducers: {
//     // The action to initialize the count with a passed value
//     initializeCount: (state, action) => {
//       state.value = action.payload;  // Set the initial value
//     },
//     // Other reducers (increment, decrement, etc.)
//     increment: (state) => {
//       state.value += 1;
//     },
//     decrement: (state) => {
//       state.value -= 1;
//     },
//   },
// });

// // Export the action creators (this includes initializeCount)
// export const { initializeCount, increment, decrement } = counterSlice.actions;

// // Export the reducer to be added to the store
// export default counterSlice.reducer;
