import { CheckCircle, Users, Factory, Shield, Construction, DollarSign, CalendarCheck } from 'lucide-react'

export default function About() {
  const stats = [
    { icon: CalendarCheck, number: "2", label: "Tahun Pengalaman", color: "text-blue-600" },
    { icon: CheckCircle, number: "2+", label: "Proyek Selesai", color: "text-orange-600" }
  ]

  const features = [
    // { 
    //   icon: Shield, 
    //   title: "ISO 9001:2015 Quality Management System",
    //   description: "Certified quality standards ensuring excellence"
    // },
    { 
      icon: Construction, 
      title: "Teknologi Konstruksi Canggih",
      description: "Peralatan dan proses produksi terkini yang mutakhir"
    },
    { 
      icon: Users, 
      title: "Tim Kontraktor yang Berpengalaman",
      description: "Profesional dengan pengalaman puluhan tahun"
    },
    // { 
    //   icon: Clock, 
    //   title: "24/7 Customer Support",
    //   description: "Round-the-clock assistance for all your needs"
    // },
    { 
      icon: CheckCircle, 
      title: "Tepat Waktu dalam Penyelesaian",
      description: "Komitmen penuh terhadap setiap tenggat waktu"
    },
    { 
      icon: DollarSign, 
      title: "Harga Kompetitif",
      description: "Solusi konstruksi premium dengan nilai terbaik"
    }
  ]

  return (
    <section id="about" className="relative py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-600 rounded-full -translate-x-48 -translate-y-48"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-600 rounded-full translate-x-48 translate-y-48"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-6">
            <Factory className="w-4 h-4 mr-2" />
            Tentang Kami
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Dedikasi untuk Konstruksi
            <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Berkualitas Tinggi
            </span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 xl:gap-16 items-start">
          {/* Left Content */}
          <div className="lg:col-span-7">
            {/* Main Description */}
            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-xl border border-gray-100 mb-8">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Komitmen Kami pada Kualitas Proyek
              </h3>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Dengan tim profesional dan dukungan teknologi konstruksi terkini, kami terus menghadirkan hasil kerja yang 
                memenuhi standar nasional. Setiap proyek dikerjakan dengan ketelitian tinggi dan komitmen
                 pada mutu yang konsisten.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Kami percaya bahwa kualitas bukan hanya soal hasil akhir, tetapi juga tentang bagaimana prosesnya dijalankan. 
                Keselamatan kerja, efisiensi, serta tanggung jawab sosial terhadap lingkungan dan masyarakat menjadi bagian 
                penting dari setiap langkah kami.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-6 mb-10">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className="group bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl hover:border-blue-200 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                        {feature.title}
                      </h4>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Image & Stats */}
          <div className="lg:col-span-5">
            {/* Main Image */}
            <div className="relative mb-8">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
                <img 
                  src="" 
                  alt="Modern manufacturing facility showcasing advanced technology"
                  className="w-full h-80 md:h-96 object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 via-transparent to-transparent"></div>
                
                {/* Floating Badge */}
                <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-sm rounded-2xl px-4 py-3 shadow-lg">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm font-semibold text-gray-900">Live Production</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <div 
                  key={index} 
                  className="group bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center hover:shadow-xl hover:border-blue-200 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br ${
                    stat.color === 'text-blue-600' ? 'from-blue-500 to-blue-600' :
                    stat.color === 'text-green-600' ? 'from-green-500 to-green-600' :
                    stat.color === 'text-purple-600' ? 'from-purple-500 to-purple-600' :
                    'from-orange-500 to-orange-600'
                  } mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <stat.icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {stat.number}
                  </div>
                  <div className="text-sm font-medium text-gray-600">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Trust Badge */}
            <div className="mt-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-6 text-white text-center">
              <div className="flex items-center justify-center mb-3">
                <Shield className="w-8 h-8 mr-2" />
                <span className="text-xl font-bold">Terpercaya di bidang Industri</span>
              </div>
              <p className="text-blue-100 text-sm">
                Bergabunglah dengan perusahaan yang mempercayai kami untuk memenuhi kebutuhan konstruksi
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}