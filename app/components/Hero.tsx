'use client'
import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      id: 1,
      title: "Leading Manufacturing Excellence",
      subtitle: "Innovative Solutions for Industrial Growth",
      description: "We deliver cutting-edge manufacturing solutions that drive efficiency, quality, and innovation for businesses worldwide.",
      image: "/images/hero-1.jpg",
      cta: "Jelajahi Layanan"
    },
    {
      id: 2,
      title: "Advanced Production Technology",
      subtitle: "Precision Engineering at Its Best",
      description: "Our state-of-the-art facility combines traditional craftsmanship with modern technology to deliver exceptional results.",
      image: "/images/hero-2.jpg",
      cta: "Lihat Portfolio"
    },
    {
      id: 3,
      title: "Quality Assurance Guaranteed",
      subtitle: "ISO Certified Manufacturing",
      description: "With rigorous quality control processes and international certifications, we ensure every product meets the highest standards.",
      image: "/api/placeholder/1920/800",
      cta: "Hubungi Sekarang"
    }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [slides.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <section id="home" className="relative h-screen overflow-hidden">
      {/* Slides */}
      <div className="relative h-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {/* Background Image */}
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            </div>

            {/* Content */}
            <div className="relative h-full flex items-center">
              <div className="container-custom section-padding">
                <div className="max-w-3xl text-white">
                  <h1 className="text-5xl md:text-6xl font-bold mb-4 leading-tight">
                    {slide.title}
                  </h1>
                  <h2 className="text-xl md:text-2xl mb-6 text-blue-200">
                    {slide.subtitle}
                  </h2>
                  <p className="text-lg md:text-xl mb-8 leading-relaxed opacity-90">
                    {slide.description}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <button className="btn-primary rounded-3xl text-lg px-8 py-4">
                      {slide.cta}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-3 rounded-full transition-all duration-300"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-3 rounded-full transition-all duration-300"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-white' : 'bg-white bg-opacity-50'
            }`}
          />
        ))}
      </div>
    </section>
  )
}