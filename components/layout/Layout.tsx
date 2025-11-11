import React from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`flex min-h-screen flex-col ${inter.className}`}>
      <Navbar />
      <main className="grow">
        {children}
      </main>
      <Footer />
    </div>
  );
}