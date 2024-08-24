import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from 'next-themes';
import './globals.css';

import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import Head from 'next/head';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'GridTrust',
  description:
    'We build high-performance, data-rich web applications that drive business success. Book a call today to learn more!',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Head>
        <title>Your Website Title</title>
        <meta property="og:title" content="Grid Trust" />
        <meta
          property="og:description"
          content="Unleash Yout Data with AG Grid Pros"
        />
        <meta property="og:image" content="public/logoIco.png" />
        <meta property="og:url" content="https://gridtrust.pro" />
        <meta property="og:type" content="website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <body className={inter.className}>
        <ThemeProvider attribute="class">
          <Navbar />
          <div>{children}</div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
