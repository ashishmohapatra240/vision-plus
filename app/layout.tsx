import type { Metadata } from "next";
import { Instrument_Sans } from "next/font/google";
import "./globals.css";

const instrumentsSans = Instrument_Sans({
  variable: "--font-instruments-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vision Plus",
  description: "Vision Plus",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${instrumentsSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
