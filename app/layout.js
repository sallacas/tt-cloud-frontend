import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/admin-lte@3.2/dist/css/adminlte.min.css"
        ></link>
      </Head>
      <body className={inter.className}>{children}</body>
      <Script src="https://cdn.jsdelivr.net/npm/admin-lte@3.2/dist/js/adminlte.min.js"></Script>
    </html>
  );
}
