import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { Noto_Sans_KR } from '@next/font/google';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { CookiesProvider } from 'react-cookie';

const notosanskr = Noto_Sans_KR({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
});

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={notosanskr.className}>
      <CookiesProvider>
        <QueryClientProvider client={queryClient}>
          <Component {...pageProps} />
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </CookiesProvider>
    </main>
  );
}
