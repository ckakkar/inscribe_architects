import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="font-display text-9xl font-bold bg-gradient-to-r from-primary-400 to-accent-orange bg-clip-text text-transparent mb-4">
          404
        </h1>
        <p className="text-2xl text-gray-400 mb-8">Page not found</p>
        <Link href="/">
          <Button size="lg">Go Home</Button>
        </Link>
      </div>
    </div>
  )
}