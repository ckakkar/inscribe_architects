'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, X, Send, Bot, User, Sparkles } from 'lucide-react'
import { contactInfo, services, projects, awards, testimonials, processSteps } from '@/lib/constants'

interface Message {
  id: string
  text: string
  sender: 'user' | 'bot'
  timestamp: Date
}

interface ConversationContext {
  lastTopic?: string
  mentionedServices?: string[]
  isFirstInteraction: boolean
}

const GREETINGS = [
  "Hello! I'm here to help you learn more about Inscribe Architects. I can answer questions about our services, projects, process, pricing, and more. How can I assist you today?",
  "Hi there! Welcome to Inscribe Architects. I'm your virtual assistant and I'm here to help you learn about our architecture and design services. What would you like to know?",
  "Greetings! I'm delighted to help you explore Inscribe Architects. Feel free to ask me about our services, portfolio, design process, or anything else you'd like to know.",
]

const QUICK_SUGGESTIONS = [
  "Tell me about your services",
  "What's your design process?",
  "How much does it cost?",
  "Show me your projects",
  "How do I get started?",
]

const getBotResponse = (userMessage: string, context: ConversationContext): string => {
  const message = userMessage.toLowerCase().trim()

  // Greetings
  if (message.match(/^(hi|hello|hey|good morning|good afternoon|good evening|greetings)/)) {
    return "Hello! I'm delighted to help you learn more about Inscribe Architects. We're a Ludhiana-based architecture and interior design firm with over 23 years of experience and 1,100+ completed projects. I can help you with:\n\n• Our services and expertise\n• Project portfolio and examples\n• Design process and methodology\n• Pricing and consultation\n• Contact information\n• Awards and recognition\n\nWhat would you like to know?"
  }

  // About the firm
  if (message.match(/(about|who are you|what do you do|tell me about|company|firm|studio)/)) {
    return "Inscribe Architects is a leading architecture and interior design firm founded in 2001 by Shelly Kakkar. Based in Ludhiana, Punjab, we've completed over 1,100 projects including residential, commercial, and institutional designs.\n\n**Our Philosophy:**\nWe specialize in creating thoughtful spaces that blend practical design thinking with artistic sensibility. Our work emphasizes function, aesthetics, and contextual detailing.\n\n**Our Expertise:**\n• Residential & Commercial Architecture\n• Interior Design (Residential & Commercial)\n• 3D Visualization & Rendering\n• Turnkey Project Execution\n• Institutional Architecture\n\n**Our Team:**\nLed by founder Shelly Kakkar, our team of 12+ professionals includes experienced architects, interior designers, and project managers.\n\nWould you like to know more about any specific aspect?"
  }

  // Services - General
  if (message.match(/(service|what do you offer|what can you do|expertise|specialization|capabilities)/)) {
    const serviceList = services.map(s => `• **${s.title}**\n  ${s.description}`).join('\n\n')
    return `We offer comprehensive architectural and design services:\n\n${serviceList}\n\n**Key Features:**\n• Over 23 years of experience\n• 1,100+ completed projects\n• Licensed by Council of Architecture, India\n• End-to-end project management\n• 3D visualization capabilities\n\nWould you like detailed information about any specific service?`
  }

  // Residential - Detailed
  if (message.match(/(residential|home|house|villa|apartment|residence|housing)/)) {
    const residentialService = services.find(s => s.id === 'residential')
    const residentialProjects = projects.filter(p => p.category === 'Residential')
    return `**Residential Architecture Services**\n\n${residentialService?.description}\n\n**What We Offer:**\n${residentialService?.features.map(f => `• ${f}`).join('\n')}\n\n**Our Approach:**\n• Thoughtful space planning tailored to your lifestyle\n• Emphasis on natural light and ventilation\n• Selection of materials that create warm, livable environments\n• Integration of indoor-outdoor living spaces\n• Custom design solutions for each client\n\n**Project Examples:**\nWe've completed ${residentialProjects.length}+ residential projects including luxury villas, modern residences, and apartment complexes.\n\nWould you like to know about our design process for residential projects, or see examples of our work?`
  }

  // Commercial - Detailed
  if (message.match(/(commercial|office|business|retail|shop|showroom|workplace|corporate)/)) {
    const commercialService = services.find(s => s.id === 'commercial')
    const commercialProjects = projects.filter(p => p.category === 'Commercial')
    return `**Commercial Architecture Services**\n\n${commercialService?.description}\n\n**What We Offer:**\n${commercialService?.features.map(f => `• ${f}`).join('\n')}\n\n**Our Approach:**\n• Design spaces that enhance productivity and employee wellbeing\n• Create lasting brand impressions through innovative façades\n• Optimize space utilization and workflow\n• Integrate modern technology and sustainability\n• Focus on functionality without compromising aesthetics\n\n**Project Examples:**\nWe've completed ${commercialProjects.length}+ commercial projects including office complexes, retail showrooms, and commercial plazas across Ludhiana and Punjab.\n\nWould you like information about our commercial design process or specific project types?`
  }

  // Interior design - Detailed
  if (message.match(/(interior|interior design|furniture|decoration|decor|furnishing|space planning)/)) {
    const interiorService = services.find(s => s.id === 'interior')
    const interiorProjects = projects.filter(p => p.category === 'Interior')
    return `**Interior Design Services**\n\n${interiorService?.description}\n\n**What We Offer:**\n${interiorService?.features.map(f => `• ${f}`).join('\n')}\n\n**Our Approach:**\n• Balance aesthetics with functionality\n• Contextual detailing that reflects your style\n• Custom furniture and fixture design\n• Material selection for durability and beauty\n• Turnkey solutions from concept to completion\n• Integration with architectural design\n\n**Project Examples:**\nWe've completed ${interiorProjects.length}+ interior design projects for both residential and commercial spaces.\n\nWould you like to know about our interior design process, material options, or see examples?`
  }

  // 3D Visualization
  if (message.match(/(3d|visualization|rendering|render|elevation|walkthrough|presentation|3-d)/)) {
    const vizService = services.find(s => s.id === 'visualization')
    return `**3D Visualization & Rendering Services**\n\n${vizService?.description}\n\n**What We Offer:**\n${vizService?.features.map(f => `• ${f}`).join('\n')}\n\n**Benefits:**\n• See your project before construction begins\n• Make informed design decisions\n• Present concepts to stakeholders effectively\n• Identify potential issues early\n• Photorealistic quality renderings\n• Virtual walkthroughs for immersive experience\n\n**Use Cases:**\n• Design presentations to clients\n• Marketing and promotional materials\n• Planning and approval processes\n• Contractor communication\n\nWould you like to know more about our visualization process or pricing?`
  }

  // Turnkey Services
  if (message.match(/(turnkey|project management|execution|construction|end to end|complete)/)) {
    const turnkeyService = services.find(s => s.id === 'turnkey')
    return `**Turnkey Project Execution**\n\n${turnkeyService?.description}\n\n**What We Offer:**\n${turnkeyService?.features.map(f => `• ${f}`).join('\n')}\n\n**Our Process:**\n• Single point of contact for entire project\n• Coordinated design and construction\n• Quality control at every stage\n• Timeline and budget management\n• Vendor and contractor coordination\n• Regular progress updates\n\n**Benefits:**\n• Seamless execution from concept to completion\n• Reduced stress and coordination efforts\n• Consistent quality throughout\n• Better cost control\n• Faster project delivery\n\nWould you like to know more about our project management approach?`
  }

  // Institutional
  if (message.match(/(institutional|educational|school|hospital|healthcare|community|facility)/)) {
    const institutionalService = services.find(s => s.id === 'institutional')
    return `**Institutional Architecture Services**\n\n${institutionalService?.description}\n\n**What We Offer:**\n${institutionalService?.features.map(f => `• ${f}`).join('\n')}\n\n**Our Approach:**\n• Design facilities that serve communities effectively\n• Focus on accessibility and safety\n• Optimize for specific institutional needs\n• Balance functionality with design excellence\n• Sustainable and cost-effective solutions\n• Compliance with regulatory requirements\n\nWould you like more information about our institutional design capabilities?`
  }

  // Contact information
  if (message.match(/(contact|phone|email|address|location|where|visit|office|reach|call|speak)/)) {
    return `**Contact Information**\n\n📞 **Phone:** ${contactInfo.phone}\n📧 **Email:** ${contactInfo.email}\n📍 **Address:** ${contactInfo.address}\n\n**Office Hours:**\n${contactInfo.officeHours}\n\n**How to Reach Us:**\n• Call us during office hours for immediate assistance\n• Email us for detailed inquiries or project proposals\n• Visit our office for in-person consultations\n• We're happy to schedule site visits for your project\n\n**What to Expect:**\n• Initial consultation to understand your needs\n• Transparent communication throughout\n• Detailed project proposals and timelines\n• Regular updates on project progress\n\nWould you like to schedule a consultation or have questions about our services?`
  }

  // Experience/Years
  if (message.match(/(experience|years|how long|since|established|founded)/)) {
    return "Inscribe Architects was founded in 2001 by Shelly Kakkar, giving us over 23 years of experience in architecture and interior design. We've completed over 1,100 projects across residential, commercial, and institutional sectors in Ludhiana and throughout Punjab."
  }

  // Projects/Portfolio
  if (message.match(/(project|portfolio|work|examples|show me|gallery|projekts|completed|done)/)) {
    const projectTypes = {
      'Residential': projects.filter(p => p.category === 'Residential').length,
      'Commercial': projects.filter(p => p.category === 'Commercial').length,
      'Interior': projects.filter(p => p.category === 'Interior').length,
    }
    const projectList = Object.entries(projectTypes).map(([type, count]) => `• ${type}: ${count}+ projects`).join('\n')
    
    return `**Our Portfolio**\n\nWe've completed **1,100+ projects** across various categories:\n\n${projectList}\n\n**Project Categories:**\n• Luxury Villas & Residences\n• Commercial Plazas & Office Complexes\n• Retail Showrooms & Spaces\n• Residential & Commercial Interiors\n• Institutional Buildings\n• Apartment Complexes\n\n**Recent Projects Include:**\n${projects.slice(0, 3).map(p => `• ${p.title} (${p.category}, ${p.year})`).join('\n')}\n\n**Explore Our Work:**\nVisit the 'Projekts' section on our website to see detailed project galleries with images and descriptions.\n\nWould you like to know about a specific project type or see examples of our work?`
  }

  // Pricing/Cost
  if (message.match(/(price|cost|fee|charge|budget|expensive|affordable|quote|estimate|how much|pricing)/)) {
    return `**Pricing & Cost Information**\n\nOur project costs vary based on several factors:\n\n**Factors Affecting Cost:**\n• Project scope and size\n• Type of service (design only vs. turnkey)\n• Complexity and customization level\n• Location and site conditions\n• Material selections\n• Timeline requirements\n\n**Service Options:**\n• **Design Consultation:** Initial meeting to discuss your project\n• **Design Services:** Architectural and interior design\n• **3D Visualization:** Renderings and presentations\n• **Turnkey Execution:** Complete project management\n\n**Our Approach:**\n• Transparent pricing with detailed breakdowns\n• No hidden costs or surprises\n• Flexible payment structures\n• Value-based pricing for quality results\n• Competitive rates for the region\n\n**Getting a Quote:**\nFor a detailed, personalized quote, please contact us:\n📞 ${contactInfo.phone}\n📧 ${contactInfo.email}\n\nWe'll discuss your specific requirements and provide a transparent estimate. Would you like to schedule a consultation?`
  }

  // Process - Detailed
  if (message.match(/(process|how do you work|workflow|steps|procedure|method|approach|how|timeline)/)) {
    const processDetails = processSteps.map(step => 
      `**${step.number} - ${step.title}**\n${step.description}`
    ).join('\n\n')
    
    return `**Our Design Process**\n\nWe follow a structured, collaborative approach:\n\n${processDetails}\n\n**Key Features of Our Process:**\n• Client involvement at every stage\n• Regular feedback and iteration cycles\n• Clear communication and updates\n• Detailed documentation and drawings\n• Quality assurance throughout\n• Support during construction\n\n**Timeline:**\nProject timelines vary based on scope:\n• Small residential projects: 2-4 months\n• Medium commercial projects: 4-8 months\n• Large/complex projects: 8-12+ months\n\n**What Makes Us Different:**\n• Personalized attention to each project\n• Balance of creativity and practicality\n• Focus on client satisfaction\n• Proven track record of on-time delivery\n\nWould you like detailed information about any specific phase?`
  }

  // Team
  if (message.match(/(team|staff|people|architect|designer|who works|founder|shelly)/)) {
    return `**Our Team**\n\n**Leadership:**\nLed by **Shelly Kakkar**, founder and principal architect, who established Inscribe Architects in 2001 with a vision to create thoughtful, contextual architecture.\n\n**Team Composition:**\n• **12+ dedicated professionals**\n• Experienced architects\n• Interior designers\n• 3D visualization specialists\n• Project managers\n• Support staff\n\n**Our Expertise:**\n• Architecture & Building Design\n• Interior Design & Space Planning\n• 3D Visualization & Rendering\n• Project Management & Execution\n• Technical Documentation\n• Construction Coordination\n\n**Our Approach:**\n• Collaborative team environment\n• Continuous learning and development\n• Attention to detail\n• Client-focused service\n• Quality-driven execution\n\n**Why Choose Us:**\n• Over 23 years of combined experience\n• Proven track record (1,100+ projects)\n• Licensed professionals\n• Award-winning designs\n• Strong client relationships\n\nWould you like to know more about our team's expertise or specific capabilities?`
  }

  // Location
  if (message.match(/(ludhiana|punjab|location|where are you|based|office location)/)) {
    return `We're based in Ludhiana, Punjab, India. Our office is located at ${contactInfo.address}. We serve clients throughout Punjab and beyond. Whether you're in Ludhiana or surrounding areas, we'd be happy to discuss your project.`
  }

  // Awards/Recognition
  if (message.match(/(award|recognition|achievement|accomplishment|certification|license|accreditation|certified)/)) {
    const awardsList = awards.map(a => `• **${a.title}**\n  ${a.organization} (${a.year})`).join('\n\n')
    return `**Awards & Recognition**\n\n**Licensing & Certification:**\n• Licensed by **Council of Architecture, India**\n• Registered architectural practice\n• Compliant with all regulatory requirements\n\n**Awards & Accolades:**\n\n${awardsList}\n\n**Recognition From:**\n• Punjab Architects Association\n• Ludhiana Builders Association\n• Indian Institute of Architects - Punjab Chapter\n• Punjab Interior Designers Forum\n• Ludhiana Real Estate Awards\n\n**Our Achievements:**\n• Excellence in Residential Design\n• Best Commercial Projects\n• Outstanding Interior Design\n• Innovation in Architecture\n• Client Choice Awards\n\nThese recognitions reflect our commitment to design excellence and client satisfaction. Would you like to know more about any specific award or our design philosophy?`
  }

  // Consultation/Meeting
  if (message.match(/(consultation|meeting|appointment|schedule|visit|discuss|talk|book|start|begin)/)) {
    return `**Schedule a Consultation**\n\nWe'd love to discuss your project! Here's how to get started:\n\n**Contact Us:**\n📞 ${contactInfo.phone}\n📧 ${contactInfo.email}\n📍 ${contactInfo.address}\n\n**Office Hours:**\n${contactInfo.officeHours}\n\n**What to Expect in Initial Consultation:**\n• Discussion of your vision and requirements\n• Site analysis (if applicable)\n• Understanding your budget and timeline\n• Overview of our services and process\n• Initial design ideas and concepts\n• Transparent discussion about project scope\n• No-obligation consultation\n\n**What to Bring/Prepare:**\n• Your ideas and inspiration\n• Site details (if you have a property)\n• Budget considerations\n• Timeline expectations\n• Any specific requirements or constraints\n\n**Next Steps:**\n1. Contact us to schedule a meeting\n2. Initial consultation (in-person or virtual)\n3. We'll provide a detailed proposal\n4. Begin the design process\n\nWould you like to schedule a consultation or have questions about getting started?`
  }

  // Testimonials
  if (message.match(/(testimonial|review|client|feedback|satisfaction|experience|happy|satisfied)/)) {
    const testimonialsList = testimonials.map(t => 
      `"${t.content}"\n— ${t.name}, ${t.role}${t.company ? `, ${t.company}` : ''}\n${t.project ? `Project: ${t.project}` : ''}`
    ).join('\n\n')
    return `**Client Testimonials**\n\nHere's what our clients say about working with us:\n\n${testimonialsList}\n\n**Our Commitment:**\n• 100% client satisfaction focus\n• Transparent communication\n• Quality delivery\n• On-time project completion\n• Lasting relationships\n\nWould you like to know more about our client approach or see more examples of our work?`
  }

  // Materials/Sustainability
  if (message.match(/(material|sustainable|eco|green|environment|energy|efficient|sustainability)/)) {
    return `**Materials & Sustainability**\n\n**Our Approach:**\nWe believe in creating sustainable, environmentally conscious designs that don't compromise on aesthetics or functionality.\n\n**Material Selection:**\n• High-quality, durable materials\n• Locally sourced when possible\n• Sustainable and eco-friendly options\n• Materials that age beautifully\n• Balance of cost and quality\n\n**Sustainability Practices:**\n• Energy-efficient design solutions\n• Natural light optimization\n• Ventilation and air quality focus\n• Water conservation strategies\n• Waste reduction in construction\n• Long-term durability considerations\n\n**Design Philosophy:**\nWe select materials that:\n• Enhance the design aesthetic\n• Stand the test of time\n• Require minimal maintenance\n• Reflect contextual appropriateness\n• Align with client preferences and budget\n\nWould you like to know more about our sustainable design practices or material options?`
  }

  // Timeline/Duration
  if (message.match(/(timeline|duration|how long|time|schedule|deadline|when|delivery|complete)/)) {
    return `**Project Timeline & Duration**\n\nProject timelines vary based on several factors:\n\n**Typical Timelines:**\n• **Small Residential Projects:** 2-4 months\n• **Medium Residential/Commercial:** 4-8 months\n• **Large/Complex Projects:** 8-12+ months\n• **Interior Design Projects:** 2-6 months\n• **3D Visualization:** 1-3 weeks per project\n\n**Factors Affecting Timeline:**\n• Project size and complexity\n• Client decision-making speed\n• Approval processes\n• Site conditions\n• Material availability\n• Weather (for construction)\n\n**Our Process Timeline:**\n1. **Discovery & Consultation:** 1-2 weeks\n2. **Concept Development:** 2-4 weeks\n3. **Design Refinement:** 3-6 weeks\n4. **Technical Documentation:** 4-8 weeks\n5. **Construction Support:** Ongoing\n\n**Our Commitment:**\n• Realistic timeline estimates\n• Regular progress updates\n• Proactive communication about delays\n• Efficient workflow management\n• On-time delivery focus\n\nWould you like to discuss a specific project timeline?`
  }

  // Design Style
  if (message.match(/(style|design style|aesthetic|modern|traditional|contemporary|minimalist|look|appearance)/)) {
    return `**Our Design Style**\n\n**Design Philosophy:**\nWe create designs that blend practical thinking with artistic sensibility, emphasizing function, aesthetics, and contextual detailing.\n\n**Our Approach:**\n• **Contextual Design:** Designs that respect local context and culture\n• **Modern Sensibility:** Contemporary solutions with timeless appeal\n• **Functional Beauty:** Aesthetics that serve purpose\n• **Material Honesty:** Using materials authentically\n• **Light & Space:** Emphasis on natural light and spatial quality\n\n**Style Flexibility:**\nWe work across various styles:\n• Modern & Contemporary\n• Traditional with modern touches\n• Minimalist & Clean\n• Eclectic & Personalized\n• Contextual & Regional\n\n**What Makes Our Style Unique:**\n• Thoughtful space planning\n• Attention to detail\n• Balance of form and function\n• Client personality integration\n• Contextual appropriateness\n\n**Our Promise:**\nEvery design is tailored to reflect your vision while incorporating our expertise in creating beautiful, functional spaces.\n\nWould you like to see examples of our design style or discuss your preferences?`
  }

  // Getting Started
  if (message.match(/(get started|start|begin|how to|first step|next step|beginning)/)) {
    return `**Getting Started with Your Project**\n\nHere's a simple guide to begin:\n\n**Step 1: Initial Contact**\nReach out to us:\n📞 ${contactInfo.phone}\n📧 ${contactInfo.email}\n\n**Step 2: Initial Consultation**\n• Schedule a meeting (in-person or virtual)\n• Discuss your vision and requirements\n• Share your ideas and inspiration\n• We'll understand your needs and constraints\n\n**Step 3: Proposal & Agreement**\n• We'll provide a detailed proposal\n• Transparent pricing and timeline\n• Scope of work clearly defined\n• Agreement on terms and conditions\n\n**Step 4: Design Process Begins**\n• Discovery phase\n• Concept development\n• Design refinement\n• Technical documentation\n\n**What You Need:**\n• Your vision and ideas\n• Site information (if applicable)\n• Budget considerations\n• Timeline expectations\n• Any specific requirements\n\n**Our Commitment:**\n• Clear communication throughout\n• Regular updates on progress\n• Collaborative approach\n• Quality delivery\n\nReady to get started? Contact us today!`
  }

  // FAQ responses
  if (message.match(/(faq|frequently asked|common question|help|assistance)/)) {
    return `**Frequently Asked Questions**\n\n**Common Questions:**\n\n**Q: What services do you offer?**\nA: We offer residential & commercial architecture, interior design, 3D visualization, turnkey execution, and institutional architecture.\n\n**Q: How much does a project cost?**\nA: Costs vary based on scope, size, and requirements. Contact us for a personalized quote.\n\n**Q: How long does a project take?**\nA: Typically 2-12 months depending on project size and complexity.\n\n**Q: Do you work outside Ludhiana?**\nA: Yes, we serve clients throughout Punjab and beyond.\n\n**Q: Can I see examples of your work?**\nA: Yes! Visit our 'Projekts' section or ask me about specific project types.\n\n**Q: How do I get started?**\nA: Contact us for an initial consultation. We'll discuss your needs and provide a proposal.\n\nWould you like more details on any of these topics?`
  }

  // Thank you/Goodbye
  if (message.match(/(thank|thanks|bye|goodbye|see you|appreciate|grateful)/)) {
    return `You're very welcome! I'm glad I could help. If you have any more questions about Inscribe Architects, our services, or your project, feel free to ask anytime.\n\nFor personalized assistance, you can reach our team at:\n📞 ${contactInfo.phone}\n📧 ${contactInfo.email}\n\nWe look forward to helping bring your vision to life!`
  }

  // Default response with suggestions
  const defaultResponses = [
    `That's an interesting question! I can help you with information about:\n\n• Our services and expertise\n• Project portfolio and examples\n• Design process and timeline\n• Pricing and consultation\n• Contact information\n• Awards and recognition\n\nCould you rephrase your question, or would you like to know about any of these topics?`,
    `I want to make sure I give you the best answer. I can help with:\n\n• Services we offer\n• Our design process\n• Project examples\n• Getting started\n• Contact information\n\nWhat specific aspect of Inscribe Architects would you like to learn about?`,
    `Thank you for your question! For the most accurate information about your specific needs, I'd recommend:\n\n• Asking about a specific service or topic\n• Contacting our team directly at ${contactInfo.phone}\n• Scheduling a consultation\n\nWhat would you like to know more about?`,
  ]
  return defaultResponses[Math.floor(Math.random() * defaultResponses.length)]
}

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: GREETINGS[Math.floor(Math.random() * GREETINGS.length)],
      sender: 'bot',
      timestamp: new Date(),
    },
  ])
  const [inputValue, setInputValue] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const [context, setContext] = useState<ConversationContext>({ isFirstInteraction: true })
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    if (isOpen) {
      scrollToBottom()
      setTimeout(() => inputRef.current?.focus(), 300)
    }
  }, [isOpen, messages])

  const handleSend = async () => {
    if (!inputValue.trim() || isTyping) return

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue.trim(),
      sender: 'user',
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInputValue('')
    setIsTyping(true)

    // Simulate typing delay
    await new Promise((resolve) => setTimeout(resolve, 500))

    // Update context
    const newContext: ConversationContext = {
      ...context,
      isFirstInteraction: false,
      lastTopic: userMessage.text,
    }

    const botResponse: Message = {
      id: (Date.now() + 1).toString(),
      text: getBotResponse(userMessage.text, newContext),
      sender: 'bot',
      timestamp: new Date(),
    }

    setContext(newContext)
    setMessages((prev) => [...prev, botResponse])
    setIsTyping(false)
  }

  const handleSuggestionClick = async (suggestion: string) => {
    if (isTyping) return
    
    const userMessage: Message = {
      id: Date.now().toString(),
      text: suggestion,
      sender: 'user',
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setIsTyping(true)

    // Simulate typing delay
    await new Promise((resolve) => setTimeout(resolve, 500))

    // Update context
    const newContext: ConversationContext = {
      ...context,
      isFirstInteraction: false,
      lastTopic: suggestion,
    }

    const botResponse: Message = {
      id: (Date.now() + 1).toString(),
      text: getBotResponse(suggestion, newContext),
      sender: 'bot',
      timestamp: new Date(),
    }

    setContext(newContext)
    setMessages((prev) => [...prev, botResponse])
    setIsTyping(false)
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  return (
    <>
      {/* Chat Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-umber text-dutch-white shadow-lg hover:shadow-xl transition-shadow duration-300 flex items-center justify-center group"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label={isOpen ? 'Close chat' : 'Open chat'}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X size={24} />
            </motion.div>
          ) : (
            <motion.div
              key="open"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <MessageCircle size={24} />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-umber/20 backdrop-blur-sm z-40 lg:hidden"
              transition={{ duration: 0.2 }}
            />

            {/* Chat Panel */}
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="fixed bottom-24 right-6 z-50 w-[calc(100vw-3rem)] sm:w-96 h-[calc(100vh-8rem)] max-h-[600px] bg-dutch-white border border-umber/20 shadow-2xl rounded-lg flex flex-col overflow-hidden"
            >
              {/* Header */}
              <div className="px-6 py-4 border-b border-umber/10 bg-umber/5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-umber flex items-center justify-center">
                    <Bot size={20} className="text-dutch-white" />
                  </div>
                  <div>
                    <h3 className="font-display text-sm font-light text-umber flex items-center gap-2">
                      Inscribe Assistant
                      <Sparkles size={12} className="text-umber/60" />
                    </h3>
                    <p className="text-xs text-umber/70 font-light">Online • Always here to help</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 hover:bg-umber/10 rounded-full transition-colors"
                  aria-label="Close chat"
                >
                  <X size={18} className="text-umber/70" />
                </button>
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-6 space-y-4">
                {/* Quick Suggestions - Show only on first message or when appropriate */}
                {messages.length === 1 && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {QUICK_SUGGESTIONS.slice(0, 3).map((suggestion, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleSuggestionClick(suggestion)}
                        className="px-3 py-1.5 text-xs bg-umber/5 hover:bg-umber/10 border border-umber/20 rounded-full text-umber/80 hover:text-umber transition-colors font-light"
                      >
                        {suggestion}
                      </button>
                    ))}
                  </div>
                )}
                
                {messages.map((message) => (
                  <motion.div
                    key={message.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex gap-3 ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    {message.sender === 'bot' && (
                      <div className="w-8 h-8 rounded-full bg-umber/10 flex items-center justify-center flex-shrink-0">
                        <Bot size={16} className="text-umber/70" />
                      </div>
                    )}
                    <div
                      className={`max-w-[80%] rounded-lg px-4 py-3 ${
                        message.sender === 'user'
                          ? 'bg-umber text-dutch-white'
                          : 'bg-umber/5 text-umber border border-umber/10'
                      }`}
                    >
                      <p className="text-sm font-light leading-relaxed whitespace-pre-line">
                        {message.text}
                      </p>
                    </div>
                    {message.sender === 'user' && (
                      <div className="w-8 h-8 rounded-full bg-umber/20 flex items-center justify-center flex-shrink-0">
                        <User size={16} className="text-umber/70" />
                      </div>
                    )}
                  </motion.div>
                ))}

                {isTyping && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex gap-3 justify-start"
                  >
                    <div className="w-8 h-8 rounded-full bg-umber/10 flex items-center justify-center flex-shrink-0">
                      <Bot size={16} className="text-umber/70" />
                    </div>
                    <div className="bg-umber/5 border border-umber/10 rounded-lg px-4 py-3">
                      <div className="flex gap-1.5">
                        <div className="w-2 h-2 rounded-full bg-umber/40 animate-bounce" style={{ animationDelay: '0ms' }} />
                        <div className="w-2 h-2 rounded-full bg-umber/40 animate-bounce" style={{ animationDelay: '150ms' }} />
                        <div className="w-2 h-2 rounded-full bg-umber/40 animate-bounce" style={{ animationDelay: '300ms' }} />
                      </div>
                    </div>
                  </motion.div>
                )}

                <div ref={messagesEndRef} />
              </div>

              {/* Input */}
              <div className="px-6 py-4 border-t border-umber/10 bg-dutch-white">
                <div className="flex gap-3">
                  <input
                    ref={inputRef}
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Type your message..."
                    className="flex-1 px-4 py-2.5 text-sm bg-umber/5 border border-umber/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-umber/30 focus:border-umber/40 text-umber placeholder:text-umber/50 font-light"
                    disabled={isTyping}
                  />
                  <button
                    onClick={handleSend}
                    disabled={!inputValue.trim() || isTyping}
                    className="w-11 h-11 rounded-lg bg-umber text-dutch-white flex items-center justify-center hover:bg-umber-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    aria-label="Send message"
                  >
                    <Send size={18} />
                  </button>
                </div>
                <div className="flex flex-wrap gap-2 mt-2 justify-center">
                  {QUICK_SUGGESTIONS.slice(0, 2).map((suggestion, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleSuggestionClick(suggestion)}
                      className="px-2.5 py-1 text-xs bg-umber/5 hover:bg-umber/10 border border-umber/20 rounded-full text-umber/70 hover:text-umber transition-colors font-light"
                    >
                      {suggestion}
                    </button>
                  ))}
                </div>
                <p className="text-xs text-umber/60 font-light mt-2 text-center">
                  Ask me anything about Inscribe Architects
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

