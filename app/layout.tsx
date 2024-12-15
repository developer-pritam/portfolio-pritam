import './globals.css'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: {
    default: 'Developer Pritam - Backend Engineer Portfolio',
    template: '%s | Developer Pritam - Backend Engineer Portfolio',
  },
  description: 'Portfolio of Pritam Kumar also known as Developer Pritam, a backend engineer with 3+ years of experience in cloud technologies and backend development.',
  keywords: 'backend engineer, cloud technologies, full-stack development, React, Node.js, AWS, Azure, GCP',
  author: 'Pritam Kumar',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://developerpritam.in',
    siteName: 'Developer Pritam - Backend Engineer Portfolio',
    title: 'Developer Pritam - Backend Engineer Portfolio',
    description: 'Portfolio of Pritam Kumar also known as Developer Pritam, a backend engineer with 3+ years of experience in cloud technologies and backend development.',
    images: [
      {
        url: 'https://developerpritam.in/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Developer Pritam - Backend Engineer Portfolio',
      },
    ],
  },
  twitter: {
    handle: '@developerpritam',
    site: '@developerpritam',
    cardType: 'summary_large_image',
  },
  robots: {
    index: false,
    follow: false,
  },
  manifest: '/favicon_io/site.webmanifest',
  icons: {
    icon: [
      {
        url: '/favicon_io/favicon.ico',
      },
      {
        url: '/favicon_io/favicon-32x32.png',
        sizes: '32x32',
        type: 'image/png',
      },
      {
        url: '/favicon_io/favicon-16x16.png',
        sizes: '16x16',
        type: 'image/png',
      },
    ],
    apple: {
      url: '/favicon_io/apple-touch-icon.png',
      sizes: '180x180',
      type: 'image/png',
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={`${inter.className} min-h-screen bg-background text-foreground`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}

