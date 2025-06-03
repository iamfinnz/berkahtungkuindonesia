'use client'
import { Wrench, Cpu, Package, Settings, Truck, Shield, ArrowRight, CheckCircle, Zap, ChevronLeft, ChevronRight, type LucideIcon } from 'lucide-react'
import { useState, useEffect, useRef } from 'react'

export default function Services() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null)

  const services = [
    {
      icon: Wrench,
      title: "Custom Manufacturing",
      description: "Tailored manufacturing solutions designed to meet your specific requirements and industry standards with precision engineering.",
      features: ["Custom Design", "Prototype Development", "Mass Production", "Quality Control"]
    },
    {
      icon: Cpu,
      title: "CNC Machining",
      description: "Precision CNC machining services for complex components with tight tolerances and superior finish quality.",
      features: ["3-5 Axis Machining", "Metal & Plastic", "Rapid Prototyping", "High Precision"]
    },
    {
      icon: Package,
      title: "Assembly Services",
      description: "Complete assembly solutions from sub-assemblies to finished products with comprehensive testing and quality assurance.",
      features: ["Product Assembly", "Testing & QC", "Packaging", "Logistics Support"]
    },
    {
      icon: Settings,
      title: "Engineering Design",
      description: "Professional engineering design services from concept to production-ready designs with advanced CAD solutions.",
      features: ["CAD Design", "3D Modeling", "Simulation", "Design Optimization"]
    },
    {
      icon: Truck,
      title: "Supply Chain",
      description: "End-to-end supply chain management ensuring efficient procurement, inventory control, and timely delivery.",
      features: ["Sourcing", "Inventory Management", "Logistics", "Vendor Management"]
    },
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "Comprehensive quality assurance programs ensuring products meet the highest industry standards and certifications.",
      features: ["ISO Certification", "Testing Labs", "Documentation", "Continuous Improvement"]
    }
  ]

  const maxSlides = services.length - 1

  // Auto-play functionality - works for all screen sizes
  useEffect(() => {
    if (isAutoPlaying) {
      autoPlayRef.current = setInterval(() => {
        setCurrentSlide((prev) => (prev >= maxSlides ? 0 : prev + 1))
      }, 3000) // Auto slide every 3 seconds
    }

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current)
      }
    }
  }, [isAutoPlaying, maxSlides])

  // Scroll to specific slide for mobile with smooth transition
  useEffect(() => {
    if (typeof window !== 'undefined' && window.innerWidth < 768 && scrollContainerRef.current) {
      const container = scrollContainerRef.current
      const cardElement = container.children[0]?.children[currentSlide] as HTMLElement
      const cardWidth = cardElement?.offsetWidth || 0
      const gap = 24
      const scrollPosition = currentSlide * (cardWidth + gap)
      
      // Use requestAnimationFrame for smoother scrolling
      const smoothScroll = (start: number, end: number, duration: number) => {
        const startTime = performance.now()
        
        const animate = (currentTime: number) => {
          const elapsed = currentTime - startTime
          const progress = Math.min(elapsed / duration, 1)
          
          // Easing function for smooth transition
          const easeInOutCubic = progress < 0.5 
            ? 4 * progress * progress * progress 
            : (progress - 1) * (2 * progress - 2) * (2 * progress - 2) + 1
          
          const currentScroll = start + (end - start) * easeInOutCubic
          container.scrollLeft = currentScroll
          
          if (progress < 1) {
            requestAnimationFrame(animate)
          }
        }
        
        requestAnimationFrame(animate)
      }
      
      smoothScroll(container.scrollLeft, scrollPosition, 800) // 800ms smooth transition
    }
  }, [currentSlide])

  // Navigation handlers
  const goToPrevious = () => {
    const newSlide = currentSlide > 0 ? currentSlide - 1 : maxSlides
    setCurrentSlide(newSlide)
  }

  const goToNext = () => {
    const newSlide = currentSlide < maxSlides ? currentSlide + 1 : 0
    setCurrentSlide(newSlide)
  }

  // Handle manual scroll on mobile
  const handleScroll = () => {
    if (scrollContainerRef.current && typeof window !== 'undefined' && window.innerWidth < 768) {
      const scrollLeft = scrollContainerRef.current.scrollLeft
      const cardElement = scrollContainerRef.current.children[0]?.children[0] as HTMLElement
      const cardWidth = cardElement?.offsetWidth || 0
      const gap = 24
      const newSlide = Math.round(scrollLeft / (cardWidth + gap))
      setCurrentSlide(Math.max(0, Math.min(newSlide, maxSlides)))
    }
  }

  // Pause auto-play on user interaction
  const handleUserInteraction = () => {
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 8000) // Resume after 8 seconds
  }

  return (
    <section id="services" className="py-24 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-indigo-200 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-purple-200 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-6">
            <Zap className="w-4 h-4 mr-2" />
            Professional Services
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 bg-gradient-to-r from-gray-900 via-blue-900 to-indigo-900 bg-clip-text text-transparent">
            Our Expertise
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive manufacturing and contracting services designed to meet diverse industry needs 
            with precision, quality, and exceptional efficiency that exceeds expectations.
          </p>
        </div>

        {/* Mobile Controls */}
        <div className="flex md:hidden justify-between items-center mb-6">
          <button
            onClick={() => { goToPrevious(); handleUserInteraction(); }}
            className="p-3 bg-white/80 backdrop-blur-sm rounded-full shadow-lg border border-white/20 hover:bg-white transition-all duration-300"
          >
            <ChevronLeft className="w-5 h-5 text-gray-700" />
          </button>
          
          <div className="flex space-x-2">
            {services.map((_, index) => (
              <button
                key={index}
                onClick={() => { setCurrentSlide(index); handleUserInteraction(); }}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-blue-600 w-6' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>

          <button
            onClick={() => { goToNext(); handleUserInteraction(); }}
            className="p-3 bg-white/80 backdrop-blur-sm rounded-full shadow-lg border border-white/20 hover:bg-white transition-all duration-300"
          >
            <ChevronRight className="w-5 h-5 text-gray-700" />
          </button>
        </div>

        {/* Services Grid/Slider Container with proper padding for hover effects */}
        <div className="relative py-12 md:py-8">
          {/* Mobile Slider */}
          <div 
            ref={scrollContainerRef}
            onScroll={handleScroll}
            onTouchStart={handleUserInteraction}
            className="md:hidden overflow-x-auto scrollbar-hide px-6"
            style={{ 
              scrollSnapType: 'x mandatory',
              scrollBehavior: 'smooth'
            }}
          >
            <div className="flex space-x-6 pb-8 pt-4">
              {services.map((service, index) => (
                <div 
                  key={index}
                  className="flex-none w-72 sm:w-80"
                  style={{ scrollSnapAlign: 'center' }}
                >
                  <ServiceCard service={service} index={index} isMobile={true} />
                </div>
              ))}
              {/* Add spacer for better centering */}
              <div className="flex-none w-6"></div>
            </div>
          </div>

          {/* Desktop Grid */}
          <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} service={service} index={index} isMobile={false} />
            ))}
          </div>
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-20 text-center">
          <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-6 sm:p-10 shadow-2xl border border-white/20 max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="text-left">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  Ready to Start Your Project?
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Our expert team is ready to discuss your manufacturing and contracting needs. 
                  Get a personalized consultation and detailed project proposal.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="px-6 sm:px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-2xl hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105 text-sm sm:text-base">
                    Get Free Quote
                  </button>
                  <button className="px-6 sm:px-8 py-4 bg-white text-gray-700 font-semibold rounded-2xl border border-gray-200 hover:bg-gray-50 hover:shadow-md transition-all duration-300 text-sm sm:text-base">
                    Schedule Consultation
                  </button>
                </div>
              </div>
              <div className="hidden md:block">
                <div className="relative">
                  <div className="w-64 h-64 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full opacity-20 blur-3xl"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-32 h-32 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl flex items-center justify-center shadow-2xl">
                      <Wrench className="w-16 h-16 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS for hiding scrollbar */}
      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  )
}

// Service Card Component
interface ServiceCardProps {
  service: {
    icon: LucideIcon;
    title: string;
    description: string;
    features: string[];
  };
  index: number;
  isMobile?: boolean;
}

function ServiceCard({ service, index, isMobile = false }: ServiceCardProps) {
  const hoverScale = isMobile ? 'hover:scale-[1.02]' : 'hover:scale-105'
  
  return (
    <div 
      className={`group relative bg-gradient-to-br from-blue-100 to-blue-200 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:transform ${hoverScale} overflow-hidden border border-blue-200/50 h-full`}
      style={{
        animationDelay: `${index * 150}ms`
      }}
    >
      <div className="p-6 sm:p-8 lg:p-10 h-full flex flex-col">
        {/* Icon Section */}
        <div className="relative mb-6 sm:mb-8">
          <div className={`w-16 sm:w-20 h-16 sm:h-20 bg-blue-500 rounded-3xl flex items-center justify-center transition-all duration-500 transform ${isMobile ? 'group-hover:scale-105' : 'group-hover:scale-110'} group-hover:rotate-6 shadow-lg`}>
            <service.icon className="w-8 sm:w-10 h-8 sm:h-10 text-white transition-all duration-300" />
          </div>
        </div>
        
        {/* Content */}
        <div className="space-y-4 sm:space-y-6 flex-1 flex flex-col">
          <h3 className="text-xl sm:text-2xl font-bold text-blue-900 transition-all duration-300 group-hover:text-blue-700">
            {service.title}
          </h3>
          
          <p className="text-blue-800/80 leading-relaxed text-sm sm:text-base flex-1">
            {service.description}
          </p>

          {/* Features List */}
          <div className="space-y-2 sm:space-y-3">
            {service.features.map((feature, idx) => (
              <div key={idx} className="flex items-center text-sm text-blue-800 transition-colors duration-300">
                <CheckCircle className="w-4 sm:w-5 h-4 sm:h-5 mr-3 flex-shrink-0 text-blue-600 transition-colors duration-300" />
                <span className="font-medium">{feature}</span>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="pt-4 sm:pt-6 border-t border-blue-300/50 mt-auto">
            <button className="group/btn flex items-center justify-between w-full px-4 sm:px-6 py-3 sm:py-4 bg-blue-500 text-white font-semibold rounded-2xl hover:bg-blue-600 hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02] text-sm sm:text-base">
              <span>Learn More</span>
              <ArrowRight className="w-4 sm:w-5 h-4 sm:h-5 group-hover/btn:translate-x-2 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}