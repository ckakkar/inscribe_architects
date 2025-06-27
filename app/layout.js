import { Inter, Space_Grotesk } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import ScrollToTop from '@/components/common/ScrollToTop'
import CustomCursor from '@/components/common/CustomCursor'
import Preloader from '@/components/common/Preloader'
import SmoothScroll from '@/components/common/SmoothScroll'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

export const metadata = {
  title: 'Inscribe Architects - Award Winning Architecture Firm',
  description: 'Inscribe Architects creates innovative, sustainable architectural designs that transform spaces and inspire communities. Founded by Shelly Kakkar.',
  keywords: 'architecture, interior design, facade design, commercial planning, renovation, Ludhiana, Punjab, India',
  openGraph: {
    title: 'Inscribe Architects - Award Winning Architecture Firm',
    description: 'Transforming spaces with innovative architectural designs',
    images: ['/images/og-image.jpg'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Inscribe Architects',
    description: 'Award Winning Architecture Firm',
    images: ['/images/og-image.jpg'],
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="font-sans antialiased bg-black text-white overflow-x-hidden">
        <Preloader />
        <CustomCursor />
        
        <SmoothScroll>
          <div className="relative min-h-screen">
            {/* Background Effects */}
            <div className="fixed inset-0 -z-10">
              <div className="absolute inset-0 bg-gradient-to-br from-dark-100 via-black to-dark-200" />
              <div className="absolute inset-0 noise opacity-[0.02]" />
              
              {/* Animated Gradient Orbs */}
              <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl animate-float" />
              <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-orange/5 rounded-full blur-3xl animate-float animation-delay-1000" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-primary-500/5 to-accent-orange/5 rounded-full blur-3xl animate-pulse" />
            </div>

            {/* Content */}
            <Navbar />
            <main className="relative z-10">
              {children}
            </main>
            <Footer />
            <ScrollToTop />
          </div>
        </SmoothScroll>
      </body>
    </html>
  )
}