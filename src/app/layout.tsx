import "../styles/globals.css";
import Provider from "../queryContext/Provider";
import { Noto_Sans_KR } from "@next/font/google";

const notosanskr = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <main className="flex flex-col items-center justify-end h-screen">
          <Provider>{children}</Provider>
        </main>
      </body>
    </html>
  );
}
