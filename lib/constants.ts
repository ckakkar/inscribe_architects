import { NavLink, Stat, Service, Project } from '@/types'

export const navLinks: NavLink[] = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Projects', href: '/projects' },
  { name: 'Contact', href: '/contact' },
]

export const stats: Stat[] = [
  { number: '25+', label: 'Years' },
  { number: '1100+', label: 'Projects' },
  { number: '100%', label: 'Satisfaction' },
  { number: '15+', label: 'Team' },
]

export const services: Service[] = [
  {
    id: 'interior',
    title: 'Interior Design',
    description: 'Transform your spaces with innovative interior solutions',
    icon: '🏠',
    features: ['Residential', 'Commercial', 'Custom Furniture'],
  },
  {
    id: 'facade',
    title: 'Facade Design',
    description: 'Stunning exteriors that make lasting impressions',
    icon: '🏢',
    features: ['Modern', 'Sustainable', 'Innovative'],
  },
  {
    id: 'commercial',
    title: 'Commercial Planning',
    description: 'Comprehensive solutions for business spaces',
    icon: '🏗️',
    features: ['Offices', 'Retail', 'Hospitality'],
  },
]

export const projects: Project[] = [
  {
    id: '1',
    title: 'Sky Tower Complex',
    category: 'Commercial',
    year: '2023',
    location: 'Downtown District',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop',
    description: 'A state-of-the-art office complex',
  },
  {
    id: '2',
    title: 'Villa Serenity',
    category: 'Residential',
    year: '2023',
    location: 'Green Valley',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop',
    description: 'Contemporary luxury villa',
  },
  {
    id: '3',
    title: 'Modern Workspace',
    category: 'Interior',
    year: '2022',
    location: 'Tech Park',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop',
    description: 'Minimalist office design',
  },
]

export const contactInfo = {
  phone: '+91-9814224971',
  email: 'info@inscribearchitects.com',
  address: 'Ludhiana, Punjab, India',
}