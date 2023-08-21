'use client';

import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { CookiesProvider } from 'react-cookie';
// import { Provider as JotaiProvider } from 'jotai';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
});

type Props = {
  children: React.ReactNode;
};

export default function Provider({ children }: Props) {
  return (
    <CookiesProvider>
      <QueryClientProvider client={queryClient}>
        {/* <JotaiProvider>{children}</JotaiProvider> */}
        {children}
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </CookiesProvider>
  );
}
