import type { Metadata } from 'next';
import { Fira_Code } from 'next/font/google';
import './globals.css';

// Optimize font loading by specifying only the subsets and display type needed
const firaCode = Fira_Code({
  subsets: ['latin'],
  display: 'swap', // Use swap to prevent layout shifts
  preload: true,
  weight: ['400', '500', '600'],
  variable: '--font-fira-code',
});

export const metadata: Metadata = {
  metadataBase: new URL('http://localhost:3000/'),
  title: {
    default:
      'FAZIL SHAIKH | Full Stack Web Developer',
    template: '%s | Fazil Shaikh',
  },
  description:
    'Full Stack Product Engineer specializing in Next.js, React, and AI Integration. Expert in building high-performance web applications with modern technologies.',
  keywords: [
    'Next.js Developer',
    'React Developer',
    'Full Stack Developer',
    'Web Development',
    'JavaScript',
    'TypeScript',
    'Frontend Developer',
    'Software Engineer',
    'Web Applications',
    'Performance Optimization',
    'Fazil Shaikh',
  ],
  authors: [{ name: 'Fazil Shaikh' }],
  creator: 'Fazil Shaikh',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'http://localhost:3000/',
    siteName: 'Fazil Shaikh Portfolio',
    title: 'Fazil Shaikh | Full Stack Web Developer',
    description:
      'Full Stack Web Developer in Next.js, React. Building high-performance web applications.',
    images: [
      {
        url: '/imgs/website.webp',
        width: 1200,
        height: 630,
        alt: 'Aga Kadela - Full Stack Product Engineer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aga Kadela | Full Stack Product Engineer',
    description:
      'Full Stack Product Engineer specializing in Next.js, React, and AI Integration',
    images: ['/imgs/website.webp'],
    creator: '@agakadela',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'http://localhost:3000/',
  },
  icons: {
    icon: '/imgs/logo.png',
    apple: '/imgs/logo.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className='dark' lang='en'>
      <head />
      <body className={`${firaCode.className} ${firaCode.variable}`}>
        {children}
      </body>
    </html>
  );
}
