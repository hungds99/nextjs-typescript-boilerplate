'use client';

import React from 'react';
import { ThemeProvider } from './theme-providers';

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ThemeProvider defaultTheme='system'>{children}</ThemeProvider>
    </>
  );
}
