import React from 'react';
import { AuthProvider } from './src/contexts/AuthContext';
import RootRouter from './src/router';

export default function App() {
  return (
    <AuthProvider>
      <RootRouter />
    </AuthProvider>
  );
}