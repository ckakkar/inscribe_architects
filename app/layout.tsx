import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { CustomCursor } from '@/components/shared/cursor'
import { SmoothScroll } from '@/components/shared/smooth-scroll'
import { ScrollProgress } from '@/components/shared/scroll-progress'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'],
  variable: '--font-space',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Inscribe Architects - Award Winning Architecture Firm | 25+ Years of Excellence',
  description: 'Leading architecture firm in India specializing in commercial, residential, and heritage conservation projects. Over 1,100 completed projects with sustainable design excellence.',
  keywords: 'architecture, architectural design, commercial architecture, residential design, heritage conservation, sustainable design, India architects',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body>
        <SmoothScroll>
          <CustomCursor />
          <ScrollProgress />
          
          <div className="relative min-h-screen">
            {/* Background */}
            <div className="fixed inset-0 -z-10 bg-beige-100">
              {/* Architectural Grid Pattern */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000002_1px,transparent_1px),linear-gradient(to_bottom,#00000002_1px,transparent_1px)] bg-[size:24px_24px]" />
              {/* Architectural Section Lines */}
              <div className="absolute inset-0">
                <div className="absolute left-[10%] top-0 bottom-0 w-px bg-grey-mouse/5" />
                <div className="absolute right-[10%] top-0 bottom-0 w-px bg-grey-mouse/5" />
                <div className="absolute top-[20%] left-0 right-0 h-px bg-grey-mouse/5" />
                <div className="absolute bottom-[20%] left-0 right-0 h-px bg-grey-mouse/5" />
              </div>
            </div>

            <Header />
            <main>{children}</main>
            <Footer />
          </div>
        </SmoothScroll>
      </body>
    </html>
  )
}