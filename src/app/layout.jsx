import { Plus_Jakarta_Sans } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { keywords } from "../lib/keywords";
import { GoogleTagManager } from '@next/third-parties/google'

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
  title: "One TAC | Tourism, Art and Culture",
  description: "OneTAC is a unified network transforming tourism by making India's stories, experiences, and opportunities accessible to all.",
  url: 'https://onetac.org/',

  ogTitle: "One TAC | Tourism, Art and Culture",
  ogDescription: "Partner with Volshauz for expert web development, branding, UI/UX design, and marketing solutions. Empower your brand’s online presence with tailored strategies to boost engagement and growth.",
  ogUrl: 'https://onetac.org/',
  ogSiteName: "One TAC | Tourism, Art and Culture",

  keywords: keywords,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta property="og:title" content="One TAC | Tourism, Art and Culture" />
        <meta property="og:description" content="Partner with Volshauz for expert web development, branding, UI/UX design, and marketing solutions. Empower your brand’s online presence with tailored strategies to boost engagement and growth." />
        {/* <meta property="og:image" content="https://onetac.org/_next/image?url=%2Fassets%2Fl1.webp&w=256&q=75" /> */}
        <meta property="og:url" content="https://onetac.org/" />
        <meta name="keywords" content={metadata.keywords.join(", ")} />
        <meta name="apple-mobile-web-app-title" content="OneTAC" />
      </head>
      <GoogleTagManager gtmId="GTM-MG4ZCXSH" />
      <body
        className={`${plusJakartaSans.variable} ${argaka.variable} ${telma.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}