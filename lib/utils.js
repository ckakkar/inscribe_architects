import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

// Combine classNames utility
export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

// Format phone number
export function formatPhoneNumber(phone) {
  const cleaned = phone.replace(/\D/g, '')
  const match = cleaned.match(/^(\d{2})(\d{5})(\d{5})$/)
  if (match) {
    return `+${match[1]} ${match[2]} ${match[3]}`
  }
  return phone
}

// Truncate text
export function truncateText(text, maxLength) {
  if (text.length <= maxLength) return text
  return text.substr(0, maxLength) + '...'
}

// Scroll to element
export function scrollToElement(elementId) {
  const element = document.getElementById(elementId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}

// Get initials from name
export function getInitials(name) {
  return name
    .split(' ')
    .map(word => word[0])
    .join('')
    .toUpperCase()
    .slice(0, 2)
}

// Validate email
export function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return re.test(email)
}

// Format date
export function formatDate(date) {
  return new Intl.DateTimeFormat('en-IN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(new Date(date))
}

// Generate random ID
export function generateId() {
  return Math.random().toString(36).substr(2, 9)
}

// Debounce function
export function debounce(func, wait) {
  let timeout
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout)
      func(...args)
    }
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
  }
}

// Throttle function
export function throttle(func, limit) {
  let inThrottle
  return function(...args) {
    if (!inThrottle) {
      func.apply(this, args)
      inThrottle = true
      setTimeout(() => inThrottle = false, limit)
    }
  }
}

// Check if element is in viewport
export function isInViewport(element) {
  const rect = element.getBoundingClientRect()
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  )
}

// Get random item from array
export function getRandomItem(array) {
  return array[Math.floor(Math.random() * array.length)]
}

// Smooth scroll to top
export function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}