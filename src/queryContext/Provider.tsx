"use client";

import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { CookiesProvider } from "react-cookie";

const queryClient = new QueryClient();

type Props = {
  children: React.ReactNode;
};

export default function Provider({ children }: Props) {
  return (
    <CookiesProvider>
      <QueryClientProvider client={queryClient}>
        {children}
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </CookiesProvider>
  );
}
