'use client'
import { useState, useEffect } from 'react'
import { ExternalLink, Calendar, MapPin, Building2, Award, ChevronRight, Filter } from 'lucide-react'

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all')
  const [showFilters, setShowFilters] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Trigger animation when component mounts
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 100)

    return () => clearTimeout(timer)
  }, [])

  const projects = [
    {
      id: 1,
      title: "Renovasi Tungku Bank Indonesia Pekanbaru",
      category: "migas",
      image: "/images/hero-1.jpg",
      description: "Ini deskripsi renovasi tungku bank indonesia pekanbaru dan seterusnya sampai panjang sekali ya.",
      client: "Bank Indonesia Pekanbaru",
      year: "Feb - Apr 2025",
      location: "Pekanbaru, Indonesia",
      status: "Selesai",
      // value: "Rp2.5M",
      tags: ["Renovasi", "Pasang Keramik"]
    },
    // {
    //   id: 2,
    //   title: "Medical Device Production",
    //   category: "hunian",
    //   image: "/api/placeholder/600/400",
    //   description: "ISO 13485 certified medical device manufacturing for healthcare sector with stringent regulatory compliance.",
    //   client: "MedHealth Corp",
    //   year: "2023",
    //   location: "Surabaya, Indonesia",
    //   status: "Completed",
    //   value: "$1.8M",
    //   tags: ["ISO 13485", "Medical Grade", "Sterile Manufacturing"]
    // },
    // {
    //   id: 3,
    //   title: "Aerospace Components",
    //   category: "perkantoran",
    //   image: "/api/placeholder/600/400",
    //   description: "Critical aerospace parts with stringent quality requirements and advanced material specifications.",
    //   client: "AeroSpace Solutions",
    //   year: "2024",
    //   location: "Bandung, Indonesia",
    //   status: "In Progress",
    //   value: "$3.2M",
    //   tags: ["Aerospace Grade", "Titanium", "Precision Engineering"]
    // },
  ]

  const categories = [
    { id: 'all', name: 'Semua', count: projects.length },
    { id: 'migas', name: 'Migas', count: projects.filter(p => p.category === 'migas').length },
    { id: 'hunian', name: 'Hunian', count: projects.filter(p => p.category === 'hunian').length },
    { id: 'perkantoran', name: 'Perkantoran', count: projects.filter(p => p.category === 'perkantoran').length },
    { id: 'jalan', name: 'Jalan', count: projects.filter(p => p.category === 'jalan').length },
    { id: 'taman', name: 'Taman', count: projects.filter(p => p.category === 'taman').length }
  ]

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter)

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Selesai': return 'bg-green-300 text-green-800 border-green-200'
      case 'Proses': return 'bg-yellow-300 text-yellow-800 border-yellow-200'
      default: return 'bg-gray-100 text-gray-800 border-gray-200'
    }
  }

  return (
    <section id="projects" className="py-24 bg-gradient-to-br from-slate-50 via-gray-50 to-blue-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-20 right-20 w-96 h-96 bg-blue-200 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-indigo-200 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header Section with Fade Up Animation */}
          <div className={`text-center mb-16 transform transition-all duration-1000 ${
            isVisible 
              ? 'translate-y-0 opacity-100' 
              : 'translate-y-10 opacity-0'
          }`}>
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-6">
              <Building2 className="w-4 h-4 mr-2" />
              Portfolio Terbaru
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 bg-gradient-to-r from-gray-900 via-blue-900 to-indigo-900 bg-clip-text text-transparent">
              Portfolio Terbaru Kami
            </h2>
          </div>

          {/* Filter Section with Fade Up Animation */}
          <div className={`mb-12 transform transition-all duration-1000 delay-200 ${
            isVisible 
              ? 'translate-y-0 opacity-100' 
              : 'translate-y-10 opacity-0'
          }`}>
            {/* Mobile Filter Toggle */}
            <div className="md:hidden mb-4">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="w-full flex items-center justify-between px-4 py-3 bg-white rounded-xl shadow-md border border-gray-200"
              >
                <div className="flex items-center">
                  <Filter className="w-5 h-5 text-gray-600 mr-2" />
                  <span className="font-medium text-gray-900">Filter Projects</span>
                </div>
                <ChevronRight className={`w-5 h-5 text-gray-400 transform transition-transform ${showFilters ? 'rotate-90' : ''}`} />
              </button>
            </div>

            {/* Filter Buttons */}
            <div className={`${showFilters ? 'block' : 'hidden'} md:block`}>
              <div className="flex flex-wrap justify-center gap-3">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => {
                      setActiveFilter(category.id)
                      setShowFilters(false)
                    }}
                    className={`group relative px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${
                      activeFilter === category.id
                        ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/25'
                        : 'bg-white/70 backdrop-blur-sm text-gray-700 hover:bg-white hover:shadow-md border border-gray-200'
                    }`}
                  >
                    <span className="flex items-center">
                      {category.name}
                      <span className={`ml-2 px-2 py-1 text-xs rounded-full ${
                        activeFilter === category.id 
                          ? 'bg-white/20 text-white' 
                          : 'bg-gray-100 text-gray-600'
                      }`}>
                        {category.count}
                      </span>
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Projects Grid - Centered for single item */}
          <div className={`transform transition-all duration-1000 delay-400 ${
            isVisible 
              ? 'translate-y-0 opacity-100' 
              : 'translate-y-10 opacity-0'
          }`}>
            {filteredProjects.length === 1 ? (
              // Single project - centered
              <div className="flex justify-center">
                <div className="w-full max-w-md">
                  {filteredProjects.map((project, index) => (
                    <div 
                      key={project.id}
                      className="group bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl hover:shadow-2xl border border-white/20 transition-all duration-500 hover:transform hover:scale-[1.02] overflow-hidden"
                    >
                      {/* Image Section */}
                      <div className="relative overflow-hidden h-48 sm:h-56">
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-indigo-600/20"></div>
                        <img 
                          src={project.image} 
                          alt={project.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        
                        {/* Status Badge */}
                        <div className="absolute top-4 left-4">
                          <span className={`px-3 py-1 text-xs font-medium rounded-full border ${getStatusColor(project.status)}`}>
                            {project.status}
                          </span>
                        </div>

                        {/* Action Button */}
                        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                          <button className="bg-white/90 backdrop-blur-sm text-gray-800 p-3 rounded-full hover:bg-white shadow-lg hover:shadow-xl transition-all duration-300">
                            <ExternalLink className="w-5 h-5" />
                          </button>
                        </div>
                      </div>

                      {/* Content Section */}
                      <div className="p-6 sm:p-8">
                        <div className="flex items-start justify-between mb-4">
                          <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300 line-clamp-2">
                            {project.title}
                          </h3>
                          <Award className="w-5 h-5 text-yellow-500 flex-shrink-0 ml-2" />
                        </div>
                        
                        <p className="text-gray-600 mb-6 leading-relaxed line-clamp-3">
                          {project.description}
                        </p>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2 mb-6">
                          {project.tags.slice(0, 2).map((tag, tagIndex) => (
                            <span 
                              key={tagIndex}
                              className="px-2 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded-lg"
                            >
                              {tag}
                            </span>
                          ))}
                          {project.tags.length > 2 && (
                            <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-lg">
                              +{project.tags.length - 2} more
                            </span>
                          )}
                        </div>

                        {/* Project Details */}
                        <div className="space-y-3 text-sm text-gray-500">
                          <div className="flex items-center">
                            <Calendar className="w-4 h-4 mr-3 text-blue-500" />
                            <span className="font-medium text-gray-700">{project.year}</span>
                            <span className="mx-2">•</span>
                            <span>{project.client}</span>
                          </div>
                          <div className="flex items-center">
                            <MapPin className="w-4 h-4 mr-3 text-green-500" />
                            <span>{project.location}</span>
                          </div>
                        </div>

                        {/* Learn More Button */}
                        <div className="mt-6 pt-6 border-t border-gray-100">
                          <button className="w-full flex items-center justify-center px-4 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium rounded-xl hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-[1.02]">
                            <span>Lihat Selengkapnya</span>
                            <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              // Multiple projects - grid layout
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 justify-items-center">
                {filteredProjects.map((project, index) => (
                  <div 
                    key={project.id}
                    className="group bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl hover:shadow-2xl border border-white/20 transition-all duration-500 hover:transform hover:scale-[1.02] overflow-hidden w-full max-w-md"
                    style={{
                      animationDelay: `${index * 100}ms`
                    }}
                  >
                    {/* Image Section */}
                    <div className="relative overflow-hidden h-48 sm:h-56">
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-indigo-600/20"></div>
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      
                      {/* Status Badge */}
                      <div className="absolute top-4 left-4">
                        <span className={`px-3 py-1 text-xs font-medium rounded-full border ${getStatusColor(project.status)}`}>
                          {project.status}
                        </span>
                      </div>

                      {/* Action Button */}
                      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                        <button className="bg-white/90 backdrop-blur-sm text-gray-800 p-3 rounded-full hover:bg-white shadow-lg hover:shadow-xl transition-all duration-300">
                          <ExternalLink className="w-5 h-5" />
                        </button>
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="p-6 sm:p-8">
                      <div className="flex items-start justify-between mb-4">
                        <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300 line-clamp-2">
                          {project.title}
                        </h3>
                        <Award className="w-5 h-5 text-yellow-500 flex-shrink-0 ml-2" />
                      </div>
                      
                      <p className="text-gray-600 mb-6 leading-relaxed line-clamp-3">
                        {project.description}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tags.slice(0, 2).map((tag, tagIndex) => (
                          <span 
                            key={tagIndex}
                            className="px-2 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded-lg"
                          >
                            {tag}
                          </span>
                        ))}
                        {project.tags.length > 2 && (
                          <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-lg">
                            +{project.tags.length - 2} more
                          </span>
                        )}
                      </div>

                      {/* Project Details */}
                      <div className="space-y-3 text-sm text-gray-500">
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-3 text-blue-500" />
                          <span className="font-medium text-gray-700">{project.year}</span>
                          <span className="mx-2">•</span>
                          <span>{project.client}</span>
                        </div>
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 mr-3 text-green-500" />
                          <span>{project.location}</span>
                        </div>
                      </div>

                      {/* Learn More Button */}
                      <div className="mt-6 pt-6 border-t border-gray-100">
                        <button className="w-full flex items-center justify-center px-4 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium rounded-xl hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-[1.02]">
                          <span>Lihat Selengkapnya</span>
                          <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}