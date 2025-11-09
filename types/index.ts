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

export interface ContactFormData {
  name: string
  email: string
  message: string
}

export interface FormErrors {
  name?: string
  email?: string
  message?: string
}

export interface Award {
  id: string
  title: string
  organization: string
  year: string
}

export interface Testimonial {
  id: string
  name: string
  role: string
  company: string
  content: string
  project?: string
}

export interface ProcessStep {
  id: string
  number: string
  title: string
  description: string
}

export interface TeamMember {
  id: string
  name: string
  role: string
  bio: string
  image?: string
}