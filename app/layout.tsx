import type { Metadata, Viewport } from 'next'
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
  title: 'Inscribe Architects - Architecture & Interior Design | Ludhiana, Punjab | 23+ Years',
  description: 'Leading architecture and interior design firm in Ludhiana, Punjab. Founded in 2001 by Shelly Kakkar. Over 1,100 completed projects including residential, commercial, and institutional designs. Specializing in integrated architectural and interior solutions.',
  keywords: 'architect in Ludhiana, Ludhiana architecture firm, residential architect Ludhiana, interior designer Ludhiana, commercial architecture Ludhiana, architecture firm Punjab, Shelly Kakkar architect',
}

export const viewport: Viewport = {
  themeColor: '#FAF8F4',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                if (typeof window !== 'undefined' && 'startViewTransition' in document) {
                  // Enable View Transitions API
                  document.documentElement.style.viewTransitionName = 'root';
                }
              })();
            `,
          }}
        />
      </head>
      <body>
        <SmoothScroll>
          <CustomCursor />
          <ScrollProgress />
          
          <div className="relative min-h-screen">
            {/* Background */}
            <div className="fixed inset-0 -z-10 bg-beige-100">
              {/* Architectural Grid Pattern - Reduced animation on mobile */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000002_1px,transparent_1px),linear-gradient(to_bottom,#00000002_1px,transparent_1px)] bg-[size:24px_24px] arch-grid-animate sm:arch-grid-animate" />
              {/* Architectural Section Lines - Hidden on mobile for performance */}
              <div className="absolute inset-0 hidden sm:block">
                <div className="absolute left-[10%] top-0 bottom-0 w-px bg-grey-mouse/5" />
                <div className="absolute right-[10%] top-0 bottom-0 w-px bg-grey-mouse/5" />
                <div className="absolute top-[20%] left-0 right-0 h-px bg-grey-mouse/5" />
                <div className="absolute bottom-[20%] left-0 right-0 h-px bg-grey-mouse/5" />
              </div>
            </div>

            <Header />
            <main id="main-content">{children}</main>
            <Footer />
          </div>
        </SmoothScroll>
      </body>
    </html>
  )
}