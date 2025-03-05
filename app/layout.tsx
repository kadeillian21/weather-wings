/* eslint-disable react/no-unescaped-entities */

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from './components/Navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'WeatherWings - Learn Meteorology with Helpful Ducks',
  description: 'Explore weather concepts with interactive visualizations and duck-guided learning',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="app-container">
          <Navbar />
          <main className="main-content">
            {children}
          </main>
          <footer className="app-footer">
            <p>Created with <span className="heart">❤️</span> and duck wisdom</p>
            <p className="duck-quote">"If it looks like rain, sounds like rain, and feels like rain, it's probably raining." - Harold the Duck</p>
          </footer>
        </div>
      </body>
    </html>
  );
}
