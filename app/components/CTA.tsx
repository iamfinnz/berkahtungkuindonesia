import { ArrowRight, Phone, Mail } from 'lucide-react'

export default function CTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent transform -skew-y-12 scale-150"></div>
      </div>

      <div className="container-custom section-padding relative">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Start Your Manufacturing Project?
          </h2>
          <p className="text-xl md:text-2xl mb-12 opacity-90 leading-relaxed">
            Lets discuss how our manufacturing expertise can bring your vision to life. 
            Get a free consultation and quote for your next project.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <button className="bg-white text-blue-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-lg transition-all duration-300 flex items-center text-lg">
              Get Free Quote
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 font-bold py-4 px-8 rounded-lg transition-all duration-300 flex items-center text-lg">
              Schedule Consultation
            </button>
          </div>

          {/* Contact Options */}
          <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <div className="flex items-center justify-center md:justify-end">
              <div className="flex items-center bg-white bg-opacity-10 rounded-xl p-4">
                <Phone className="w-6 h-6 mr-3" />
                <div className="text-left">
                  <div className="text-sm opacity-75">Call Us Now</div>
                  <div className="font-semibold">+62 21 1234 5678</div>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center md:justify-start">
              <div className="flex items-center bg-white bg-opacity-10 rounded-xl p-4">
                <Mail className="w-6 h-6 mr-3" />
                <div className="text-left">
                  <div className="text-sm opacity-75">Email Us</div>
                  <div className="font-semibold">info@manufactech.com</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}