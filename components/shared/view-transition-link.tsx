'use client'

import Link from 'next/link'
import { ReactNode } from 'react'

interface ViewTransitionLinkProps {
  href: string
  children: ReactNode
  className?: string
  onClick?: () => void
  [key: string]: any
}

export function ViewTransitionLink({ 
  href, 
  children, 
  className,
  onClick,
  ...props 
}: ViewTransitionLinkProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Use View Transitions API if available
    if (typeof document !== 'undefined' && 'startViewTransition' in document) {
      e.preventDefault()
      const transition = (document as any).startViewTransition(() => {
        window.location.href = href
      })
    }
    
    if (onClick) {
      onClick()
    }
  }

  return (
    <Link 
      href={href} 
      className={className}
      onClick={handleClick}
      {...props}
    >
      {children}
    </Link>
  )
}

