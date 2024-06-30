import { Inter } from "next/font/google";
import "./globals.css";
import  Providers  from "./storeProvider"

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Dashboard",
  description: "Dashboard for sales",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" data-theme="ligh">
      <body className={inter.className}>
      <Providers>
        {children}
    </Providers>
      </body>
    </html>

  );
}
