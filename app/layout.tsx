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
  title: 'Inscribe Architects - Award Winning Architecture Firm',
  description: 'Creating innovative, sustainable architectural designs since 2001',
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
            <div className="fixed inset-0 -z-10 bg-[#0a0a0a]">
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:32px_32px]" />
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