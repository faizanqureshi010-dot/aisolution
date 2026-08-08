import type { Metadata } from 'next';
import './globals.css';
import Nav from '@/components/Nav';
import CustomCursor from '@/components/CustomCursor';
import { ToastProvider } from '@/components/ui/Toast';
import { OrganizationSchema } from '@/components/StructuredData';
import Analytics from '@/components/Analytics';
import { poppins } from '@/lib/fonts';

export const metadata: Metadata = {
  title: {
    default: 'AI Solution Company | The Complete AI Front Office',
    template: '%s | AI Solution Company',
  },
  description:
    'AI Solution Company builds a complete AI front office — eight coordinated AI Employees that answer calls, book appointments, and handle the front-desk work your team can\'t keep up with alone.',
  metadataBase: new URL('https://aisolutioncompany.com'),
  icons: { icon: '/logo.jpeg', apple: '/logo.jpeg' },
  openGraph: {
    type: 'website',
    siteName: 'AI Solution Company',
    images: ['/logo.jpeg'],
  },
  twitter: {
    card: 'summary_large_image',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={poppins.variable}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=IBM+Plex+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <OrganizationSchema />
        <Analytics />
        <ToastProvider>
          <CustomCursor />
          <Nav />
          {children}
        </ToastProvider>
      </body>
    </html>
  );
}
