
import { Inter } from "next/font/google";
import Header from "../components/Header/Header.jsx";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header/>
        {children}</body>
    </html>
  );
}
