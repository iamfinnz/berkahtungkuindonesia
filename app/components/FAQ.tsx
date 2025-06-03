'use client'
import { useState } from 'react'
import { Plus, Minus, MessageCircle} from 'lucide-react'

export default function FAQ() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0)

  const faqs = [
    {
      question: "What manufacturing services do you offer?",
      answer: "We offer comprehensive manufacturing services including custom manufacturing, CNC machining, assembly services, engineering design, supply chain management, and quality assurance. Our capabilities span across automotive, medical, aerospace, industrial, electronics, and oil & gas sectors."
    },
    {
      question: "What quality certifications do you have?",
      answer: "We are ISO 9001:2015 certified for Quality Management Systems and ISO 13485 certified for medical device manufacturing. We also maintain various industry-specific certifications and follow strict quality control protocols throughout our manufacturing processes."
    },
    {
      question: "What is your typical lead time for projects?",
      answer: "Lead times vary depending on project complexity and scope. For standard projects, our typical lead time ranges from 2-4 weeks for prototypes and 4-8 weeks for production runs. We always provide detailed timelines during the quotation process and maintain transparent communication throughout."
    },
    {
      question: "Do you handle both small and large volume orders?",
      answer: "Yes, we accommodate both small batch production and high-volume manufacturing. Our flexible production capabilities allow us to efficiently handle orders ranging from prototype quantities to large-scale production runs of thousands of units."
    },
    {
      question: "What materials can you work with?",
      answer: "We work with a wide range of materials including various metals (aluminum, steel, stainless steel, titanium), engineering plastics, composites, and specialty materials. Our material selection depends on your specific application requirements and industry standards."
    },
    {
      question: "Do you provide design and engineering support?",
      answer: "Absolutely! Our experienced engineering team provides comprehensive design support including CAD design, 3D modeling, simulation, design optimization, and Design for Manufacturing (DFM) consultation to ensure optimal product performance and manufacturability."
    },
    {
      question: "How do you ensure quality control?",
      answer: "We implement rigorous quality control measures at every stage of production, including incoming material inspection, in-process monitoring, final inspection, and testing. We use advanced measuring equipment and maintain detailed documentation for traceability."
    },
    {
      question: "What are your payment terms and pricing structure?",
      answer: "We offer flexible payment terms based on project requirements. Typically, we require 30-50% advance payment with the balance upon delivery. Our pricing is competitive and transparent, with detailed breakdowns provided in all quotations. Volume discounts are available for large orders."
    }
  ]

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index)
  }

  return (
    <section id="faq" className="py-24 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-30">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-200 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-indigo-200 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-purple-200 rounded-full blur-2xl"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-6">
              <MessageCircle className="w-4 h-4 mr-2" />
              Pertanyaan Umum
            </div>
            <h2 className="text-5xl md:text-5xl font-bold text-gray-900 mb-6 bg-gradient-to-r from-gray-900 via-blue-900 to-indigo-900 bg-clip-text text-transparent">
              Ada Pertanyaan?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Find answers to common questions about our manufacturing services, 
              processes, and capabilities. We are here to help you succeed.
            </p>
          </div>

          {/* Two Column Layout */}
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left Column - Image and Contact Info */}
            <div className="space-y-8">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
                <div className="relative bg-white rounded-3xl p-8 shadow-2xl border border-gray-100">
                  <div className="aspect-[4/5] bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-600 rounded-2xl relative overflow-hidden">
                    {/* Professional person illustration */}
                    <div className="absolute inset-0 flex items-end justify-center">
                      <div className="w-full h-4/5 bg-gradient-to-t from-blue-600/20 to-transparent"></div>
                    </div>
                    {/* Simple avatar representation */}
                    <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2">
                      <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                        <div className="w-16 h-16 bg-white/30 rounded-full"></div>
                      </div>
                    </div>
                    {/* Body representation */}
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-40 bg-white/10 rounded-t-full backdrop-blur-sm"></div>
                  </div>
                  
                  <div className="mt-6 text-center">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Expert Support Team</h3>
                    <p className="text-gray-600 mb-6">Our manufacturing specialists are ready to help you with any questions</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - FAQ Items */}
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div 
                  key={index}
                  className="group bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl border border-white/20 transition-all duration-300 hover:border-blue-200"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full text-left p-6 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:ring-offset-2 rounded-2xl transition-all duration-200"
                  >
                    <div className="flex items-start justify-between">
                      <h3 className="text-lg font-semibold text-gray-900 pr-4 group-hover:text-blue-900 transition-colors duration-200">
                        {faq.question}
                      </h3>
                      <div className="flex-shrink-0 mt-1">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                          openFAQ === index 
                            ? 'bg-blue-100 text-blue-600 rotate-180' 
                            : 'bg-gray-100 text-gray-400 group-hover:bg-blue-50 group-hover:text-blue-500'
                        }`}>
                          {openFAQ === index ? (
                            <Minus className="w-5 h-5" />
                          ) : (
                            <Plus className="w-5 h-5" />
                          )}
                        </div>
                      </div>
                    </div>
                  </button>
                  
                  <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openFAQ === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}>
                    <div className="px-6 pb-6">
                      <div className="border-t border-gray-100 pt-4">
                        <p className="text-gray-600 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}