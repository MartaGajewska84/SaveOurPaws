import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeModeScript } from 'flowbite-react';
import Header from './components/Header';
import FooterComponent from './components/Footer';
import { DarkThemeToggle, Flowbite } from 'flowbite-react';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Save our paws',
  description: 'Help us saving animals in need',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <ThemeModeScript />
      </head>
      <body className={inter.className}>
        <Flowbite>
          <Header darktheme={<DarkThemeToggle />} />
          {children}
          <FooterComponent />
        </Flowbite>
      </body>
    </html>
  );
}
