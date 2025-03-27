import { Plus_Jakarta_Sans } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta-sans",
});

const argaka = localFont({
  src: "./fonts/ArgakaFashion-Regular.ttf",
  variable: "--font-argaka-fashion",
});

const telma = localFont({
  src: "./fonts/Telma.ttf",
  variable: "--font-telma",
});

export const metadata = {
  title: "OneTAC",
  description: "OneTAC is a unified network transforming tourism by making India's stories, experiences, and opportunities accessible to all.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="apple-mobile-web-app-title" content="OneTAC" />
      </head>
      <body
        className={`${plusJakartaSans.variable} ${argaka.variable} ${telma.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}