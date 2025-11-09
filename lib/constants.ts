import { NavLink, Stat, Service, Project, Award, Testimonial, ProcessStep } from '@/types'

export const navLinks: NavLink[] = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Projects', href: '/projects' },
  { name: 'Contact', href: '/contact' },
]

export const stats: Stat[] = [
  { number: '23+', label: 'Years' },
  { number: '1100+', label: 'Projects' },
  { number: '100%', label: 'Satisfaction' },
  { number: '12+', label: 'Team' },
]

export const services: Service[] = [
  {
    id: 'residential',
    title: 'Residential Architecture',
    description: 'Creating thoughtful homes that blend practical design thinking with artistic sensibility, tailored to your lifestyle and context.',
    icon: '🏡',
    features: ['Luxury Villas', 'Apartment Complexes', 'Custom Residences', 'Residential Interiors'],
  },
  {
    id: 'commercial',
    title: 'Commercial Architecture',
    description: 'Comprehensive architectural solutions for business spaces, office buildings, and commercial developments that enhance productivity.',
    icon: '🏢',
    features: ['Office Buildings', 'Commercial Façade Design', 'Retail Spaces', 'Workplace Planning'],
  },
  {
    id: 'interior',
    title: 'Interior Design',
    description: 'Transform your spaces with innovative interior solutions that balance aesthetics, functionality, and contextual detailing.',
    icon: '🏠',
    features: ['Residential Interiors', 'Commercial Interiors', 'Turnkey Interiors', 'Space Planning'],
  },
  {
    id: 'visualization',
    title: '3D Visualization & Rendering',
    description: 'Bring your vision to life with photorealistic 3D visualizations, elevations, and detailed renderings before construction begins.',
    icon: '🎨',
    features: ['3D Renders', 'Elevation Design', 'Virtual Walkthroughs', 'Design Presentations'],
  },
  {
    id: 'turnkey',
    title: 'Turnkey Project Execution',
    description: 'End-to-end project management from concept to completion, ensuring seamless execution and quality delivery.',
    icon: '🏗️',
    features: ['Project Management', 'Construction Oversight', 'Quality Control', 'Timeline Management'],
  },
  {
    id: 'institutional',
    title: 'Institutional Architecture',
    description: 'Designing educational, healthcare, and institutional facilities that serve communities while maintaining design excellence.',
    icon: '🏛️',
    features: ['Educational Facilities', 'Healthcare Buildings', 'Institutional Design', 'Community Spaces'],
  },
]

export const projects: Project[] = [
  {
    id: '1',
    title: 'Luxury Villa Complex',
    category: 'Residential',
    year: '2024',
    location: 'Ludhiana, Punjab',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop',
    description: 'Contemporary luxury villa complex with seamless indoor-outdoor living spaces, modern amenities, and contextual design that reflects local architectural sensibilities.',
  },
  {
    id: '2',
    title: 'Commercial Plaza',
    category: 'Commercial',
    year: '2023',
    location: 'Ludhiana, Punjab',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop',
    description: 'Modern commercial plaza featuring innovative façade design, retail spaces, and office complexes that blend functionality with aesthetic appeal.',
  },
  {
    id: '3',
    title: 'Residential Interior Design',
    category: 'Interior',
    year: '2024',
    location: 'Ludhiana, Punjab',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop',
    description: 'Elegant residential interior design project featuring custom furniture, thoughtful space planning, and a harmonious blend of modern and traditional elements.',
  },
  {
    id: '4',
    title: 'Office Complex',
    category: 'Commercial',
    year: '2023',
    location: 'Ludhiana, Punjab',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop',
    description: 'Contemporary office complex designed to promote productivity and employee wellbeing through thoughtful space planning and modern design elements.',
  },
  {
    id: '5',
    title: 'Modern Residence',
    category: 'Residential',
    year: '2024',
    location: 'Ludhiana, Punjab',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop',
    description: 'A thoughtfully designed modern residence that balances contemporary aesthetics with functional excellence, creating a home that truly reflects the client\'s lifestyle.',
  },
  {
    id: '6',
    title: 'Retail Showroom',
    category: 'Commercial',
    year: '2023',
    location: 'Ludhiana, Punjab',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop',
    description: 'Striking retail showroom design featuring innovative display systems, modern materials, and an inviting atmosphere that enhances the shopping experience.',
  },
  {
    id: '7',
    title: 'Luxury Apartment Interior',
    category: 'Interior',
    year: '2024',
    location: 'Ludhiana, Punjab',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop',
    description: 'Sophisticated apartment interior design project showcasing premium finishes, custom solutions, and a cohesive design language throughout.',
  },
  {
    id: '8',
    title: 'Residential Complex',
    category: 'Residential',
    year: '2023',
    location: 'Ludhiana, Punjab',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop',
    description: 'Well-planned residential complex featuring modern amenities, green spaces, and thoughtful architectural design that creates a sense of community.',
  },
]

export const awards: Award[] = [
  { id: '1', title: 'Excellence in Residential Design', organization: 'Punjab Architects Association', year: '2023' },
  { id: '2', title: 'Best Commercial Project', organization: 'Ludhiana Builders Association', year: '2023' },
  { id: '3', title: 'Outstanding Interior Design', organization: 'Punjab Interior Designers Forum', year: '2022' },
  { id: '4', title: 'Innovation in Architecture', organization: 'Indian Institute of Architects - Punjab Chapter', year: '2022' },
  { id: '5', title: 'Client Choice Award', organization: 'Ludhiana Real Estate Awards', year: '2021' },
]

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Harpreet Singh',
    role: 'Business Owner',
    company: 'Singh Enterprises',
    content: 'Inscribe Architects transformed our commercial space into something truly exceptional. Shelly and her team understood our vision from day one and delivered beyond our expectations. The attention to detail and professionalism is outstanding.',
    project: 'Commercial Plaza',
  },
  {
    id: '2',
    name: 'Neetu Verma',
    role: 'Homeowner',
    company: '',
    content: 'We worked with Inscribe Architects for our dream home, and it has been an incredible journey. The design perfectly balances modern aesthetics with functional living. Every corner of our home reflects thoughtful design and quality craftsmanship.',
    project: 'Modern Residence',
  },
  {
    id: '3',
    name: 'Rohit Malhotra',
    role: 'Director',
    company: 'Malhotra Group',
    content: 'Having completed multiple projects with Inscribe Architects over the years, we can confidently say they are the best in Ludhiana. Their expertise in both architecture and interiors, combined with their commitment to quality, makes them our go-to firm.',
    project: 'Residential Complex',
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
  phone: '+91-98142-24971',
  email: 'info@inscribearchitects.com',
  address: 'Prakash Colony / Barewal Road, Ludhiana, Punjab, India',
  officeHours: 'Monday - Saturday: 9:00 AM - 6:00 PM',
  social: {
    linkedin: 'https://linkedin.com/company/inscribe-architects',
    instagram: 'https://instagram.com/inscribearchitects',
    facebook: 'https://facebook.com/inscribearchitects',
    youtube: 'https://youtube.com/@inscribearchitects',
    pinterest: 'https://pinterest.com/inscribearchitects',
  },
}