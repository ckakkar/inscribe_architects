export interface Project {
  id: string
  title: string
  category: string
  year: string
  location: string
  image: string
  description: string
}

export interface Service {
  id: string
  title: string
  description: string
  icon: string
  features: string[]
}

export interface Stat {
  number: string
  label: string
}

export interface NavLink {
  name: string
  href: string
}