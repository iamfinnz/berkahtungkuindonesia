import { MapPin, Mail, Facebook, Linkedin, Instagram, PhoneCall } from 'lucide-react'

export default function Footer() {
  const quickLinks = [
    { name: 'Tentang Kami', href: '#about' },
    { name: 'Layanan', href: '#services' },
    { name: 'Proyek', href: '#projects' },
    { name: 'FAQ', href: '#careers' },
    { name: 'Kontak', href: '#contact' }
  ]

  const services = [
    { name: 'Custom Manufacturing', href: '#' },
    { name: 'CNC Machining', href: '#' },
    { name: 'Assembly Services', href: '#' },
    { name: 'Engineering Design', href: '#' },
    { name: 'Supply Chain', href: '#' },
    { name: 'Quality Assurance', href: '#' }
  ]

  const industries = [
    { name: 'Automotive', href: '#' },
    { name: 'Medical Devices', href: '#' },
    { name: 'Aerospace', href: '#' },
    { name: 'Electronics', href: '#' },
    { name: 'Oil & Gas', href: '#' },
    { name: 'Industrial Equipment', href: '#' }
  ]

  const socialLinks = [
    { icon: Facebook, href: '#', name: 'Facebook' },
    { icon: Instagram, href: '#', name: 'Instagram' },
    { icon: Linkedin, href: '#', name: 'LinkedIn' },
  ]

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="container-custom section-padding py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="text-2xl font-bold text-blue-400 mb-6">
              BTI
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Leading manufacturing solutions provider with 25+ years of experience 
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-start">
                <MapPin className="w-5 h-5 text-blue-400 mt-1 mr-3 flex-shrink-0" />
                <div className="text-gray-300">
                  Jl. Umban Sari, Rumbai<br />
                  Pekanbaru-Riau 28265, Indonesia
                </div>
              </div>
              <div className="flex items-center">
                <PhoneCall className="w-5 h-5 text-blue-400 mr-3" />
                <span className="text-gray-300">+62 822 8583 9869</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-blue-400 mr-3" />
                <span className="text-gray-300">info@bti.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Tautan</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Layanan</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a 
                    href={service.href}
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-300"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Industries</h3>
            <ul className="space-y-3 mb-6">
              {industries.map((industry, index) => (
                <li key={index}>
                  <a 
                    href={industry.href}
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-300"
                  >
                    {industry.name}
                  </a>
                </li>
              ))}
            </ul>

            {/* Social Links */}
            <div>
              <h4 className="text-sm font-semibold mb-4 text-gray-400">Ikuti Kami</h4>
              <div className="flex space-x-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="w-8 h-8 bg-gray-800 hover:bg-blue-600 rounded-full flex items-center justify-center transition-colors duration-300"
                    aria-label={social.name}
                  >
                    <social.icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="container-custom section-padding py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 BTI. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}