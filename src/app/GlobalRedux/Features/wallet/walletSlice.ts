'use client';

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface WalletState {
    walletAddress: string | null;
    
}

const initialState: WalletState = {
    walletAddress: null,
    
}

export const walletSlice = createSlice({
    name: 'wallet',
    initialState,
    reducers: {
        setWalletAddress(state, action: PayloadAction<string>) {
            state.walletAddress = action.payload;
          },
        //   setNetwork(state, action: PayloadAction<string>) {
        //     state.network = action.payload;
        //   },
    }

})

export const { setWalletAddress } = walletSlice.actions;

export default walletSlice.reducer;