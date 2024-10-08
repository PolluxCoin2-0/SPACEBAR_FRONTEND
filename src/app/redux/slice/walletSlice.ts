// walletSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface WalletState {
  walletAddress: string | null;
  network: string | null;
}

const initialState: WalletState = {
  walletAddress: null,
  network: null,
};

const walletSlice = createSlice({
  name: 'wallet',
  initialState,
  reducers: {
    setWalletAddress(state, action: PayloadAction<string>) {
      state.walletAddress = action.payload;
    },
    setNetwork(state, action: PayloadAction<string>) {
      state.network = action.payload;
    },
  },
});

export const { setWalletAddress, setNetwork } = walletSlice.actions;
export default walletSlice.reducer;
