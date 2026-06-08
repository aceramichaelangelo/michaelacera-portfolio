import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import { constructMetadata } from '@/lib/metadata';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = constructMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased bg-[#030014] text-slate-100 min-h-screen`}
      >
        {children}
      </body>
    </html>
  );
}
