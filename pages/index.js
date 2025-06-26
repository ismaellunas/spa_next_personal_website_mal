// pages/index.js
import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'

// Simple SVG icon components to avoid import issues
const MenuIcon = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
  </svg>
)

const XIcon = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
)

const CheckCircleIcon = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
)

const StarIcon = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 20 20">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
)

const MailIcon = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
)

const PhoneIcon = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
)

const MapPinIcon = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
)

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeService, setActiveService] = useState(0)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: ''
  })
  const [formStatus, setFormStatus] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const services = [
    {
      title: "Graphic Design",
      description: "Eye-catching visuals that elevate your brand",
      details: "From logos to social media graphics, I create compelling visual content that captures your brand's essence and engages your audience.",
      icon: "🎨"
    },
    {
      title: "Content Creation",
      description: "Engaging content that converts",
      details: "Blog posts, captions, newsletters, and website copy that tells your story and drives action from your target audience.",
      icon: "✍️"
    },
    {
      title: "Lead Generation",
      description: "Quality prospects for your business",
      details: "Strategic research and outreach to identify and connect with potential customers who are genuinely interested in your services.",
      icon: "🎯"
    },
    {
      title: "Email Marketing",
      description: "Campaigns that build relationships",
      details: "From welcome sequences to promotional campaigns, I create email strategies that nurture leads and drive conversions.",
      icon: "📧"
    },
    {
      title: "Social Media Management",
      description: "Consistent presence across platforms",
      details: "Complete social media strategy including content planning, posting schedules, community management, and performance tracking.",
      icon: "📱"
    },
    {
      title: "Influencer Outreach",
      description: "Strategic partnerships that grow your reach",
      details: "Identify, connect, and collaborate with influencers who align with your brand values and can authentically promote your business.",
      icon: "🤝"
    }
  ]

  const testimonials = [
    {
      name: "Luke",
      image: "https://res.cloudinary.com/dmorlddtq/image/upload/IMG_5391_jegcej.jpg", // Replace with actual client photo
      text: "The email marketing campaigns and lead generation strategies were game-changing for our business. The graphic designs perfectly captured our brand identity. Professional work that delivered real results!",
      rating: 5
    },
    {
      name: "Christine",
      image: "https://res.cloudinary.com/dmorlddtq/image/upload/IMG_5389_vlqpoe.jpg", // Replace with actual client photo
      text: "Exceptional graphic design work and seamless social media management. Our brand presence has never looked better, and engagement rates have significantly improved across all platforms.",
      rating: 5
    },
    {
      name: "Amy",
      image: "https://res.cloudinary.com/dmorlddtq/image/upload/IMG_5390_kmkl3p.jpg", // Replace with actual client photo
      text: "A complete marketing transformation! From stunning graphics to engaging content and effective email campaigns, every aspect exceeded expectations. Truly a one-stop solution for all our needs.",
      rating: 5
    },
    {
      name: "Caroline",
      image: "https://res.cloudinary.com/dmorlddtq/image/upload/IMG_5388_hxx7fx.jpg", // Replace with actual client photo
      text: "Outstanding work across multiple areas! The graphics are beautiful, content is engaging, and the influencer outreach brought amazing partnerships. Lead generation results speak for themselves.",
      rating: 5
    }
  ]

  const portfolioItems = [
    {
      category: "Graphic Design",
      title: "Brand Identity Package",
      description: "Complete rebrand for tech startup"
    },
    {
      category: "Content Creation",
      title: "Blog Content Series",
      description: "12-part educational content series"
    },
    {
      category: "Social Media",
      title: "Instagram Growth Campaign",
      description: "300% follower increase in 90 days"
    },
    {
      category: "Email Marketing",
      title: "Welcome Email Sequence",
      description: "5-part onboarding series with 45% open rate"
    }
  ]

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
    setIsMenuOpen(false)
  }

  const handleInputChange = (e) => {
  const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setFormStatus('')

    // Create mailto link with form data
    const subject = encodeURIComponent(`New Inquiry from ${formData.name} - ${formData.service}`)
    const body = encodeURIComponent(
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Service Needed: ${formData.service}\n` +
      `Message:\n${formData.message}`
    )
    
    // Open email client with pre-filled data
    window.location.href = `mailto:inquire@workwithmaryhel.me?subject=${subject}&body=${body}`
    
    // Reset form after a short delay
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        service: '',
        message: ''
      })
      setFormStatus('Your email client has been opened. Please send the email to complete your inquiry.')
      setIsSubmitting(false)
    }, 1000)
  }

  return (
    <>
      <Head>
        <title>Professional Virtual Assistant Services | Graphic Design, Marketing & More</title>
        <meta name="description" content="Expert virtual assistant specializing in graphic design, content creation, lead generation, email marketing, social media management, and influencer outreach." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"></link>
        <link rel="icon" href="/favicon.ico"></link>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"></link>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"></link>
        <link rel="manifest" href="/site.webmanifest"></link>
      </Head>

      {/* Navigation */}
      <nav className="fixed w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-primary-600">Work With Maryhel</h1>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-indigo-600 px-3 py-2 text-sm font-medium transition-colors">Home</button>
                <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-indigo-600 px-3 py-2 text-sm font-medium transition-colors">About</button>
                <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-indigo-600 px-3 py-2 text-sm font-medium transition-colors">Services</button>
                <button onClick={() => scrollToSection('portfolio')} className="text-gray-700 hover:text-indigo-600 px-3 py-2 text-sm font-medium transition-colors">Portfolio</button>
                <button onClick={() => scrollToSection('testimonials')} className="text-gray-700 hover:text-indigo-600 px-3 py-2 text-sm font-medium transition-colors">Testimonials</button>
                <button onClick={() => scrollToSection('contact')} className="bg-indigo-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-indigo-700 transition-colors">Contact</button>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-indigo-600 p-2"
              >
                {isMenuOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
                <button onClick={() => scrollToSection('home')} className="block text-gray-700 hover:text-indigo-600 px-3 py-2 text-base font-medium w-full text-left">Home</button>
                <button onClick={() => scrollToSection('about')} className="block text-gray-700 hover:text-indigo-600 px-3 py-2 text-base font-medium w-full text-left">About</button>
                <button onClick={() => scrollToSection('services')} className="block text-gray-700 hover:text-indigo-600 px-3 py-2 text-base font-medium w-full text-left">Services</button>
                <button onClick={() => scrollToSection('portfolio')} className="block text-gray-700 hover:text-indigo-600 px-3 py-2 text-base font-medium w-full text-left">Portfolio</button>
                <button onClick={() => scrollToSection('testimonials')} className="block text-gray-700 hover:text-indigo-600 px-3 py-2 text-base font-medium w-full text-left">Testimonials</button>
                <button onClick={() => scrollToSection('contact')} className="block bg-indigo-600 text-white px-3 py-2 rounded-md text-base font-medium w-full text-left hover:bg-indigo-700">Contact</button>
              </div>
            </div>
          )}
        </div>
      </nav>

      <main className="pt-16">
        {/* Hero Section */}
        <section id="home" className="bg-gradient-to-br from-indigo-50 via-white to-purple-50 bg-pattern-waves py-20 relative overflow-hidden">
          {/* Floating elements */}
          <div className="floating-element w-20 h-20 bg-indigo-200 opacity-20 top-20 left-10"></div>
          <div className="floating-element w-16 h-16 bg-purple-200 opacity-30 top-40 right-20"></div>
          <div className="floating-element w-12 h-12 bg-pink-200 opacity-25 bottom-32 left-1/4"></div>
          
          {/* Hero Photo in Right Corner */}
          <div className="absolute top-8 right-8 hidden lg:block z-20">
            <div className="relative">
              {/* Photo Container with Gradient Overlay */}
              <div className="w-48 h-48 rounded-full overflow-hidden shadow-2xl border-4 border-white relative">
                <Image
                  src="/images/me3.jpg"
                  alt="Maryhel - Professional Virtual Assistant"
                  fill
                  className="object-cover"
                  sizes="192px"
                  priority
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/20 via-purple-500/10 to-transparent rounded-full"></div>
              </div>
              
              {/* Decorative Elements Around Photo */}
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-full shadow-lg animate-pulse"></div>
              <div className="absolute -bottom-3 -left-3 w-6 h-6 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full shadow-lg"></div>
              <div className="absolute top-1/2 -left-4 w-4 h-4 bg-gradient-to-br from-indigo-300 to-blue-400 rounded-full shadow-lg"></div>
              
              {/* Floating Badge */}
              <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-white rounded-full px-4 py-2 shadow-lg border border-indigo-100">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-gray-700">Available</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center lg:text-left lg:max-w-3xl">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Your Success,
                <span className="text-indigo-600"> Simplified</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl">
                Professional virtual assistant services that help your business grow. From stunning graphics to strategic marketing campaigns, I handle the details so you can focus on what matters most.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button 
                  onClick={() => scrollToSection('services')}
                  className="bg-indigo-600 text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-indigo-700 transition-colors shadow-lg"
                >
                  View Services
                </button>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="border-2 border-indigo-600 text-indigo-600 px-8 py-3 rounded-lg text-lg font-medium hover:bg-indigo-50 transition-colors"
                >
                  Get Started
                </button>
              </div>
            </div>
          </div>
          
          {/* Mobile Photo Version */}
          <div className="lg:hidden mt-12 flex justify-center relative z-10">
            <div className="relative">
              <div className="w-32 h-32 rounded-full overflow-hidden shadow-xl border-3 border-white relative">
                <Image
                  src="https://res.cloudinary.com/dmorlddtq/image/upload/me_qixpao.jpg"
                  alt="Maryhel - Professional Virtual Assistant"
                  fill
                  className="object-cover"
                  sizes="128px"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/20 via-purple-500/10 to-transparent rounded-full"></div>
              </div>
              <div className="absolute -top-1 -right-1 w-6 h-6 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-full shadow-lg"></div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-white relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Hi, I'm Your Dedicated Virtual Assistant
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  With over 5 years of experience helping businesses thrive online, I specialize in creating comprehensive digital solutions that drive real results. My mission is to take the marketing burden off your shoulders so you can focus on growing your business.
                </p>
                <p className="text-lg text-gray-600 mb-8">
                  From eye-catching graphics to strategic email campaigns, I bring a blend of creativity and analytical thinking to every project. I believe in building long-term partnerships with my clients, understanding their unique needs, and delivering work that exceeds expectations.
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2" />
                    5+ Years Experience
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2" />
                    50+ Happy Clients
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2" />
                    24-48hr Response Time
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl p-8 text-white">
                  <h3 className="text-2xl font-bold mb-4">Why Choose Me?</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircleIcon className="h-6 w-6 mr-3 mt-0.5 text-indigo-200" />
                      <span>Comprehensive skill set across multiple disciplines</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircleIcon className="h-6 w-6 mr-3 mt-0.5 text-indigo-200" />
                      <span>Data-driven approach to all marketing strategies</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircleIcon className="h-6 w-6 mr-3 mt-0.5 text-indigo-200" />
                      <span>Clear communication and regular progress updates</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircleIcon className="h-6 w-6 mr-3 mt-0.5 text-indigo-200" />
                      <span>Flexible packages to fit your budget and needs</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* More About Me Section */}
        <section className="py-20 bg-gradient-to-br from-indigo-50 via-white to-purple-50 bg-pattern-waves relative overflow-hidden">
          {/* Floating elements */}
          <div className="floating-element w-24 h-24 bg-indigo-200 opacity-15 top-16 right-16"></div>
          <div className="floating-element w-18 h-18 bg-purple-200 opacity-25 bottom-20 left-20"></div>
          <div className="floating-element w-14 h-14 bg-pink-200 opacity-20 top-1/2 right-1/4"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                  The Journey Behind the Vision
                </h2>
                <div className="prose prose-lg text-gray-600 space-y-6">
                  <p>
                    I'm a dreamer who believes in the power of possibility. My journey hasn't been easy—I started from zero, with no clients and countless uncertainties. But every challenge became a stepping stone, every setback a lesson in resilience.
                  </p>
                  <p>
                    What drives me? An unshakeable optimism and an insatiable hunger to learn. I don't just adapt to change—I embrace it, knowing that growth lives in the uncomfortable spaces between where we are and where we're going.
                  </p>
                  <p>
                    From landing my very first client to now helping dozens of businesses transform their visions into reality, I've learned that success isn't about where you start—it's about refusing to stay there. Each project I take on isn't just work; it's proof that with passion, persistence, and a willingness to evolve, extraordinary things happen.
                  </p>
                  <p>
                    I'm not just building websites or solutions—I'm building bridges between dreams and achievement, one pixel, one line of code, one satisfied client at a time.
                  </p>
                  <p className="text-indigo-600 font-semibold text-xl">
                    Ready to turn your vision into something extraordinary? Let's create magic together.
                  </p>
                </div>
                <div className="flex flex-wrap gap-6 pt-4">
                  <div className="flex items-center text-sm font-medium text-gray-700">
                    <div className="w-3 h-3 bg-indigo-500 rounded-full mr-3"></div>
                    Passionate Problem Solver
                  </div>
                  <div className="flex items-center text-sm font-medium text-gray-700">
                    <div className="w-3 h-3 bg-purple-500 rounded-full mr-3"></div>
                    Continuous Learner
                  </div>
                  <div className="flex items-center text-sm font-medium text-gray-700">
                    <div className="w-3 h-3 bg-pink-500 rounded-full mr-3"></div>
                    Vision Transformer
                  </div>
                </div>
              </div>
              
              {/* Photo Section */}
              <div className="relative">
                <div className="relative bg-gradient-to-br from-indigo-400 to-purple-600 rounded-2xl overflow-hidden shadow-2xl">
                  {/* Your Photo from Cloudinary */}
                  <div className="aspect-[4/5] relative overflow-hidden">
                    <Image
                      src="/images/me.jpg"
                      alt="Professional Virtual Assistant"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      priority
                    />
                  </div>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-yellow-400 rounded-full opacity-20"></div>
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-indigo-300 rounded-full opacity-20"></div>
                <div className="absolute top-1/2 -right-8 w-16 h-16 bg-purple-400 rounded-full opacity-30"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 bg-gray-50 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Services That Drive Results
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive virtual assistant services designed to elevate your business and streamline your operations
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow cursor-pointer border-2 border-transparent hover:border-indigo-200"
                  onClick={() => setActiveService(index)}
                >
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <p className="text-sm text-gray-500">{service.details}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section id="portfolio" className="py-20 bg-white bg-pattern-waves relative overflow-hidden">
          {/* Floating elements */}
          <div className="floating-element w-22 h-22 bg-indigo-200 opacity-20 top-24 left-12"></div>
          <div className="floating-element w-16 h-16 bg-purple-200 opacity-25 bottom-16 right-16"></div>
          <div className="floating-element w-12 h-12 bg-pink-200 opacity-30 top-1/3 left-1/3"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Recent Work & Results
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                A showcase of successful projects and the measurable impact delivered for clients
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {portfolioItems.map((item, index) => (
                <div key={index} className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6 hover:shadow-lg transition-shadow">
                  <div className="text-sm text-indigo-600 font-medium mb-2">{item.category}</div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <a 
                href="/portfolio.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-indigo-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-indigo-700 transition-colors"
              >
                View Full Portfolio
              </a>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-20 bg-gray-50 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                What Clients Say
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Real feedback from businesses that have transformed their operations with professional virtual assistant services
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg relative">
                  {/* Client Photo */}
                  <div className="flex items-start mb-4">
                    <div className="flex-shrink-0 mr-4">
                      <div className="w-14 h-14 rounded-full overflow-hidden shadow-lg border-2 border-indigo-200 relative">
                        <Image
                          src={testimonial.image}
                          alt={`${testimonial.name} - Client`}
                          width={56}
                          height={56}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            // Fallback to initial bubble if image fails
                            e.target.style.display = 'none';
                            const fallback = e.target.parentElement.querySelector('.fallback-initial');
                            if (fallback) fallback.style.display = 'flex';
                          }}
                        />
                        {/* Fallback initial bubble (hidden by default) */}
                        <div className="fallback-initial absolute inset-0 bg-gradient-to-br from-indigo-400 to-purple-500 flex items-center justify-center text-white font-bold text-lg" style={{display: 'none'}}>
                          {testimonial.name.charAt(0)}
                        </div>
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex mb-2">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <StarIcon key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                        ))}
                      </div>
                      <div className="font-bold text-gray-900">{testimonial.name}</div>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 italic leading-relaxed">"{testimonial.text}"</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-white bg-pattern-waves relative overflow-hidden">
          {/* Floating elements */}
          <div className="floating-element w-20 h-20 bg-indigo-200 opacity-15 top-20 right-24"></div>
          <div className="floating-element w-14 h-14 bg-purple-200 opacity-20 bottom-24 left-16"></div>
          <div className="floating-element w-18 h-18 bg-pink-200 opacity-25 top-2/3 right-1/3"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                How We Work Together
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                A streamlined process designed for maximum efficiency and results
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              {[
                { step: "01", title: "Discovery Call", description: "We discuss your goals, challenges, and vision for your business" },
                { step: "02", title: "Strategy & Planning", description: "I create a customized plan tailored to your specific needs" },
                { step: "03", title: "Implementation", description: "I execute the plan with regular updates and feedback loops" },
                { step: "04", title: "Optimization", description: "We analyze results and continuously improve performance" }
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="bg-indigo-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-xl font-bold mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-gray-50 relative">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-600">
                Everything you need to know about working with a virtual assistant
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  question: "What's your typical turnaround time?",
                  answer: "Most projects are completed within 3-7 business days, depending on scope. Rush orders can be accommodated with prior arrangement."
                },
                {
                  question: "Do you offer revisions?",
                  answer: "Yes! All packages include 2-3 rounds of revisions to ensure you're completely satisfied with the final result."
                },
                {
                  question: "How do we communicate during projects?",
                  answer: "I use Slack, email, or your preferred communication method. You'll receive regular updates and can reach me during business hours."
                },
                {
                  question: "Can you work with my existing tools?",
                  answer: "Absolutely! I'm experienced with most popular business tools including Canva, Mailchimp, Hootsuite, WordPress, and many others."
                },
                {
                  question: "What if I need ongoing support?",
                  answer: "I offer monthly retainer packages for businesses that need continuous support. This ensures priority scheduling and consistent service."
                }
              ].map((faq, index) => (
                <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-white bg-pattern-waves relative overflow-hidden">
          {/* Floating elements */}
          <div className="floating-element w-16 h-16 bg-indigo-200 opacity-20 top-16 left-16"></div>
          <div className="floating-element w-20 h-20 bg-purple-200 opacity-15 bottom-20 right-20"></div>
          <div className="floating-element w-12 h-12 bg-pink-200 opacity-25 top-1/2 left-1/4"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Let's Start Your Project
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Ready to take your business to the next level? Let's discuss how I can help you achieve your goals.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Get In Touch</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <MailIcon className="h-6 w-6 text-indigo-600 mr-4" />
                    <div>
                      <div className="font-medium text-gray-900">Email</div>
                      <div className="text-gray-600">inquire@workwithmaryhel.me</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <PhoneIcon className="h-6 w-6 text-indigo-600 mr-4" />
                    <div>
                      <div className="font-medium text-gray-900">Phone</div>
                      <div className="text-gray-600">+63 (967) 367-7545</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <MapPinIcon className="h-6 w-6 text-indigo-600 mr-4" />
                    <div>
                      <div className="font-medium text-gray-900">Location</div>
                      <div className="text-gray-600">Available Worldwide (Remote)</div>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <h4 className="text-lg font-bold text-gray-900 mb-4">Response Time</h4>
                  <p className="text-gray-600">I typically respond to all inquiries within 24-48 hours. For urgent requests, please mention it in your message.</p>
                </div>
              </div>

              <div className="bg-gray-50 rounded-xl p-8">
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                    <input 
                      type="text" 
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <input 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Services Needed</label>
                    <select 
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    >
                      <option value="">Select a service</option>
                      <option value="Graphic Design">Graphic Design</option>
                      <option value="Content Creation">Content Creation</option>
                      <option value="Lead Generation">Lead Generation</option>
                      <option value="Email Marketing">Email Marketing</option>
                      <option value="Social Media Management">Social Media Management</option>
                      <option value="Influencer Outreach">Influencer Outreach</option>
                      <option value="Multiple Services">Multiple Services</option>
                    </select>
                  </div>
                  <div>
                    <label className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500">Project Details</label>
                    <textarea 
                      rows={4}
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                      placeholder="Tell me about your project, timeline, and any specific requirements..."
                    ></textarea>
                  </div>
                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-indigo-600 text-white py-3 rounded-lg font-medium hover:bg-indigo-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Opening Email Client...' : 'Send Message'}
                  </button>
                  {formStatus && (
                    <div className="mt-4 p-4 bg-blue-50 text-blue-700 rounded-lg text-sm">
                      {formStatus}
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold mb-4">Work With Maryhel</h3>
              <p className="text-gray-400 mb-4">
                Professional virtual assistant services that help your business grow. From creative design to strategic marketing, I'm here to support your success.
              </p>
              <div className="text-sm text-gray-400">
                © 2025 Work With Maryhel. All rights reserved.
              </div>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Graphic Design</li>
                <li>Content Creation</li>
                <li>Lead Generation</li>
                <li>Email Marketing</li>
                <li>Social Media</li>
                <li>Influencer Outreach</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><button onClick={() => scrollToSection('about')} className="hover:text-white transition-colors">About</button></li>
                <li><button onClick={() => scrollToSection('portfolio')} className="hover:text-white transition-colors">Portfolio</button></li>
                <li><button onClick={() => scrollToSection('testimonials')} className="hover:text-white transition-colors">Testimonials</button></li>
                <li><button onClick={() => scrollToSection('contact')} className="hover:text-white transition-colors">Contact</button></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}