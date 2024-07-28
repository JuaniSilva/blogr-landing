import type { Metadata } from 'next';
import { Overpass, Ubuntu } from 'next/font/google';
import './globals.css';

const overpassFont = Overpass({
  subsets: ['latin'],
  variable: '--font-overpass',
  weight: ['300', '600', '700'],
});

const ubuntuFont = Ubuntu({
  subsets: ['latin'],
  variable: '--font-ubuntu',
  weight: ['300', '500', '700'],
});

export const metadata: Metadata = {
  title: 'Blogr',
  description: 'A modern publishing platform',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${overpassFont.variable} ${ubuntuFont.variable} bg-white`}
      >
        {children}
      </body>
    </html>
  );
}
