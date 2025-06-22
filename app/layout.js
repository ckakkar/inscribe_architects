import { Inter, Space_Grotesk } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import ScrollToTop from '@/components/common/ScrollToTop'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'],
  variable: '--font-space-grotesk',
})

export const metadata = {
  title: 'Inscribe Architects - Award Winning Architecture Firm',
  description: 'Inscribe Architects creates innovative, sustainable architectural designs that transform spaces and inspire communities. Founded by Shelly Kakkar.',
  keywords: 'architecture, interior design, facade design, commercial planning, renovation, Ludhiana, Punjab',
  openGraph: {
    title: 'Inscribe Architects - Award Winning Architecture Firm',
    description: 'Transforming spaces with innovative architectural designs',
    images: ['/images/og-image.jpg'],
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="font-sans antialiased bg-black text-white overflow-x-hidden">
        <div className="relative min-h-screen">
          {/* Background Effects */}
          <div className="fixed inset-0 -z-10">
            <div className="absolute inset-0 bg-gradient-to-br from-dark-100 via-black to-dark-200" />
            <div className="absolute inset-0 grid-pattern opacity-5" />
            <div className="absolute inset-0 noise" />
          </div>

          {/* Content */}
          <Navbar />
          <main className="relative z-10">
            {children}
          </main>
          <Footer />
          <ScrollToTop />
        </div>
      </body>
    </html>
  )
}