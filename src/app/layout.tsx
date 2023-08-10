"use client";

import "../styles/globals.css";
import { Noto_Sans_KR } from "@next/font/google";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { CookiesProvider } from "react-cookie";
import type { Metadata } from "next";

const notosanskr = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

type Children = React.ReactNode;

// export const metadata: Metadata = {
//   title: "momodo",
//   description: "ToDo suport App",
// };

const queryClient = new QueryClient();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <main className="flex flex-col items-center justify-end h-screen">
          <CookiesProvider>
            <QueryClientProvider client={queryClient}>
              {children}
              <ReactQueryDevtools initialIsOpen={false} />
            </QueryClientProvider>
          </CookiesProvider>
        </main>
      </body>
    </html>
  );
}
