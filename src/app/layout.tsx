
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Providers } from "./GlobalRedux/Provider";
// import { PersistGate } from 'redux-persist/integration/react'
// import { persistor } from "./GlobalRedux/store";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "SpaceBar1.0",
  description: "A Decentralized Space Adventure Game",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >

        <Providers>
        {/* <PersistGate loading={null} persistor={persistor}> */}
        {children}
        {/* </PersistGate> */}
        </Providers>
        
        
      </body>
    </html>
  );
}
