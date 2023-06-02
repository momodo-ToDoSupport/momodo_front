import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { Noto_Sans_KR } from '@next/font/google';

const notosanskr = Noto_Sans_KR({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={notosanskr.className}>
      <Component {...pageProps} />
    </main>
  );
}
