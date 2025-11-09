import { NavLink, Stat, Service, Project, Award, Testimonial, ProcessStep } from '@/types'

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
    description: 'Transform your spaces with innovative interior solutions that balance aesthetics, functionality, and sustainability.',
    icon: '🏠',
    features: ['Residential Interiors', 'Commercial Spaces', 'Custom Furniture Design', 'Space Planning'],
  },
  {
    id: 'facade',
    title: 'Facade Design',
    description: 'Stunning exteriors that make lasting impressions while optimizing energy efficiency and environmental performance.',
    icon: '🏢',
    features: ['Modern Facades', 'Sustainable Materials', 'Innovative Systems', 'Heritage Integration'],
  },
  {
    id: 'commercial',
    title: 'Commercial Architecture',
    description: 'Comprehensive solutions for business spaces that enhance productivity and reflect your brand identity.',
    icon: '🏗️',
    features: ['Office Buildings', 'Retail Spaces', 'Hospitality Design', 'Mixed-Use Developments'],
  },
  {
    id: 'residential',
    title: 'Residential Architecture',
    description: 'Creating homes that reflect your lifestyle while incorporating sustainable design principles and modern amenities.',
    icon: '🏡',
    features: ['Luxury Villas', 'Apartment Complexes', 'Sustainable Homes', 'Custom Residences'],
  },
  {
    id: 'restoration',
    title: 'Heritage Conservation',
    description: 'Preserving architectural heritage while integrating modern functionality and meeting contemporary needs.',
    icon: '🏛️',
    features: ['Heritage Restoration', 'Adaptive Reuse', 'Conservation Planning', 'Historical Research'],
  },
  {
    id: 'planning',
    title: 'Urban Planning',
    description: 'Comprehensive planning services for sustainable urban development and community-oriented design.',
    icon: '🗺️',
    features: ['Master Planning', 'Site Development', 'Landscape Design', 'Infrastructure Planning'],
  },
]

export const projects: Project[] = [
  {
    id: '1',
    title: 'Sky Tower Complex',
    category: 'Commercial',
    year: '2023',
    location: 'Mumbai, Maharashtra',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop',
    description: 'A state-of-the-art 45-story office complex featuring sustainable design principles and cutting-edge technology integration.',
  },
  {
    id: '2',
    title: 'Villa Serenity',
    category: 'Residential',
    year: '2023',
    location: 'Pune, Maharashtra',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop',
    description: 'Contemporary luxury villa with seamless indoor-outdoor living spaces and sustainable energy systems.',
  },
  {
    id: '3',
    title: 'Modern Workspace',
    category: 'Interior',
    year: '2022',
    location: 'Bangalore, Karnataka',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop',
    description: 'Minimalist office design promoting collaboration and employee wellbeing through biophilic design elements.',
  },
  {
    id: '4',
    title: 'Heritage Restoration',
    category: 'Restoration',
    year: '2022',
    location: 'Delhi, NCR',
    image: 'https://images.unsplash.com/photo-1511818966892-d7d671e672a2?w=800&h=600&fit=crop',
    description: 'Careful restoration of a 19th-century heritage building while integrating modern amenities.',
  },
  {
    id: '5',
    title: 'Eco-Resort Complex',
    category: 'Hospitality',
    year: '2024',
    location: 'Goa',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop',
    description: 'Sustainable eco-resort featuring local materials and renewable energy systems.',
  },
  {
    id: '6',
    title: 'Urban Housing Complex',
    category: 'Residential',
    year: '2023',
    location: 'Gurgaon, Haryana',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop',
    description: 'Modern affordable housing complex with community spaces and green infrastructure.',
  },
]

export const awards: Award[] = [
  { id: '1', title: 'Best Commercial Architecture', organization: 'Indian Institute of Architects', year: '2023' },
  { id: '2', title: 'Sustainable Design Excellence', organization: 'Green Building Council', year: '2023' },
  { id: '3', title: 'Residential Project of the Year', organization: 'Architecture + Design Awards', year: '2022' },
  { id: '4', title: 'Innovation in Architecture', organization: 'Council of Architecture', year: '2022' },
  { id: '5', title: 'Heritage Conservation Award', organization: 'INTACH', year: '2021' },
]

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Rajesh Kumar',
    role: 'CEO',
    company: 'TechCorp Industries',
    content: 'Inscribe Architects transformed our vision into reality. Their attention to detail and innovative approach exceeded our expectations. The Sky Tower Complex has become a landmark in Mumbai.',
    project: 'Sky Tower Complex',
  },
  {
    id: '2',
    name: 'Priya Sharma',
    role: 'Property Developer',
    company: 'Sharma Developers',
    content: 'Working with Inscribe Architects was a pleasure. They understood our requirements perfectly and delivered a stunning residential project that has received overwhelming positive response from buyers.',
    project: 'Villa Serenity',
  },
  {
    id: '3',
    name: 'Amit Patel',
    role: 'Founder',
    company: 'InnovateTech Solutions',
    content: 'The modern workspace designed by Inscribe Architects has significantly improved our team productivity. The thoughtful design and sustainable features align perfectly with our company values.',
    project: 'Modern Workspace',
  },
]

export const processSteps: ProcessStep[] = [
  {
    id: '1',
    number: '01',
    title: 'Discovery & Consultation',
    description: 'We begin by understanding your vision, requirements, and constraints through detailed consultations and site analysis.',
  },
  {
    id: '2',
    number: '02',
    title: 'Concept Development',
    description: 'Our team creates initial design concepts that align with your goals, budget, and site conditions.',
  },
  {
    id: '3',
    number: '03',
    title: 'Design Refinement',
    description: 'We refine the chosen concept through collaborative iterations, incorporating your feedback and technical requirements.',
  },
  {
    id: '4',
    number: '04',
    title: 'Technical Documentation',
    description: 'Comprehensive drawings, specifications, and documentation are prepared for approvals and construction.',
  },
  {
    id: '5',
    number: '05',
    title: 'Construction Support',
    description: 'We provide ongoing support during construction, ensuring design intent is maintained and quality standards are met.',
  },
]

export const contactInfo = {
  phone: '+91-9814224971',
  email: 'info@inscribearchitects.com',
  address: 'Ludhiana, Punjab, India',
  officeHours: 'Monday - Friday: 9:00 AM - 6:00 PM',
  social: {
    linkedin: 'https://linkedin.com/company/inscribe-architects',
    instagram: 'https://instagram.com/inscribearchitects',
  },
}