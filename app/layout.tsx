import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import Divider from '@/components/Divider';
import { ActiveLinkProvider } from '@/components/ActiveLinkContext';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'ChatGPT Styler',
  description:
    "The ultimate Chrome extension to effortlessly enhance ChatGPT's look and feel!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <ActiveLinkProvider>
          <NavBar />
          {children}
        </ActiveLinkProvider>
        <Divider />
        <Footer />
      </body>
    </html>
  );
}
