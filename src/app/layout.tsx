import type { Metadata } from "next";
import { Montserrat, Neucha } from "next/font/google";
import "@/styles/globals.css";
import { ThemeProvider } from "@/providers/ThemeProvider";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-sans",
});

const neucha = Neucha({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
});

export const metadata: Metadata = {
  title: "Shradha Suman Praharaj",
  description: "Hello world! I am a web developer, a Trainer, a Learner. I love to connect with people try to solve their problems regarding the web design and programming.",
  keywords: "Software Engineer, Web designer, Web developer, JavaScript, JQuery, Angular, React, Vue, Next, Freelancing, Teaching, Cuttack, Orissa, India.",
  authors: [{ name: "Shradha Suman Prahraj" }],
  openGraph: {
    title: "Shradha Suman Praharaj",
    url: "https://shradhasuman.com", // update this
    siteName: "Shradha Suman Praharaj",
    images: [
      {
        url: "/SSP-full.png",
        width: 800,
        height: 600,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="theme-color" content="#131417" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={`${montserrat.variable} ${neucha.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
