'use client';

import { configureStore } from "@reduxjs/toolkit";
import walletReducer from "./Features/wallet/walletSlice";
// import { persistStore, persistReducer } from 'redux-persist';
// import storageSession from 'redux-persist/lib/storage';

// const persistConfig = {
//     key: 'wallet',
//     storage: storageSession,
//   }

// const walletPersistReducer = persistReducer(persistConfig, walletReducer)

export const store = configureStore({
    reducer: {
        wallet: walletReducer,
    }
})

// export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;