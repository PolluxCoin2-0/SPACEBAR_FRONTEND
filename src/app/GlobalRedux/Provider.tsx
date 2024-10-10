'use client';

import { Provider } from 'react-redux';
import { ReactNode } from 'react'; // Import ReactNode
import { store } from './store';

interface ProvidersProps {
  children: ReactNode; // Define the type for children
}

export function Providers({ children }: ProvidersProps) {
  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
}
