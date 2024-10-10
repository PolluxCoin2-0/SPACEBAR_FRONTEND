'use client';

import { Provider } from 'react-redux';
import { store } from './store';

interface ProvidersProps {
  children: any; // Define 'children' with the 'any' type
}

export function Providers({ children }: ProvidersProps) {
  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
}
