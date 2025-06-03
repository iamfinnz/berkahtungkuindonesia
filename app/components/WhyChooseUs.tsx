'use client';
import React, { useState, useEffect, useRef } from 'react';
import { CheckCircle, Factory, Award, Settings } from 'lucide-react';

const WhyChooseUs = () => {
  const [visiblePoints, setVisiblePoints] = useState({
    point1: false,
    point2: false,
    point3: false
  });

  const point1Ref = useRef(null);
  const point2Ref = useRef(null);
  const point3Ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('data-point');
            if (id) {
              setVisiblePoints(prev => ({
                ...prev,
                [id]: true
              }));
            }
          }
        });
      },
      {
        threshold: 0.1, // Reduced threshold for better detection
        rootMargin: '50px 0px -50px 0px' // More lenient margin
      }
    );

    // Add delay to ensure DOM is ready
    const timeoutId = setTimeout(() => {
      if (point1Ref.current) observer.observe(point1Ref.current);
      if (point2Ref.current) observer.observe(point2Ref.current);
      if (point3Ref.current) observer.observe(point3Ref.current);
    }, 100);

    return () => {
      clearTimeout(timeoutId);
      observer.disconnect();
    };
  }, []);

  // Fallback: Show content after 2 seconds if intersection observer doesn't work
  useEffect(() => {
    const fallbackTimer = setTimeout(() => {
      setVisiblePoints({
        point1: true,
        point2: true,
        point3: true
      });
    }, 2000);

    return () => clearTimeout(fallbackTimer);
  }, []);

  // Mock images - replace with your actual images
  const ProductionImage = () => (
    <div className="w-full h-48 md:h-80 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl flex items-center justify-center shadow-lg">
      <div className="text-center">
        <Factory className="w-12 h-12 md:w-20 md:h-20 text-blue-600 mx-auto mb-2 md:mb-4" />
        <p className="text-gray-700 font-medium text-sm md:text-base">Smart Manufacturing Facility</p>
      </div>
    </div>
  );

  const TechnologyImage = () => (
    <div className="w-full h-48 md:h-80 bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl flex items-center justify-center shadow-lg">
      <div className="text-center">
        <Settings className="w-12 h-12 md:w-20 md:h-20 text-purple-600 mx-auto mb-2 md:mb-4" />
        <p className="text-gray-700 font-medium text-sm md:text-base">Advanced Technology Systems</p>
      </div>
    </div>
  );

  const QualityImage = () => (
    <div className="w-full h-48 md:h-80 bg-gradient-to-br from-green-50 to-emerald-100 rounded-2xl flex items-center justify-center shadow-lg">
      <div className="text-center">
        <Award className="w-12 h-12 md:w-20 md:h-20 text-green-600 mx-auto mb-2 md:mb-4" />
        <p className="text-gray-700 font-medium text-sm md:text-base">Quality Assurance Process</p>
      </div>
    </div>
  );

  return (
    <div className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        {/* Main Title */}
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-black mb-4 md:mb-6">
            Kenapa 
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              BTI?
            </span>
          </h2>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:block">
          <div className="space-y-24 px-8 lg:px-16 relative">
            {/* Continuous Timeline Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gray-300 transform -translate-x-1/2"></div>
            
            {/* Section 1: Image Left, Content Right */}
            <div className="grid lg:grid-cols-2 gap-20 items-center relative">
              {/* Left Column - Image */}
              <div 
                className={`order-2 lg:order-1 transform transition-all duration-1000 ease-out ${
                  visiblePoints.point1 
                    ? 'translate-y-0 opacity-100' 
                    : 'translate-y-8 opacity-0'
                }`}
              >
                <ProductionImage />
              </div>

              {/* Center Point */}
              <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                <div 
                  ref={point1Ref}
                  data-point="point1"
                  className={`w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-xl border-4 border-white transform transition-all duration-1000 ease-out ${
                    visiblePoints.point1 
                      ? 'scale-100 rotate-0 opacity-100' 
                      : 'scale-0 rotate-180 opacity-0'
                  }`}
                >
                  01
                </div>
              </div>

              {/* Right Column - Content */}
              <div 
                className={`order-1 lg:order-2 transform transition-all duration-1000 ease-out delay-200 ${
                  visiblePoints.point1 
                    ? 'translate-y-0 opacity-100' 
                    : 'translate-y-8 opacity-0'
                }`}
              >
                <div className="lg:pl-8">
                  <div className="flex items-center space-x-3 mb-6">
                    <CheckCircle className="w-8 h-8 text-green-500" />
                    <h3 className="text-3xl font-bold text-black">Pengalaman 25+ Tahun</h3>
                  </div>
                  <p className="text-lg text-black leading-relaxed mb-6">
                    Kami telah melayani industri selama lebih dari dua dekade dengan 
                    <span className="font-semibold text-blue-600"> rekam jejak sempurna</span> dalam 
                    menghadirkan solusi manufaktur berkualitas tinggi yang dipercaya oleh 
                    <span className="font-semibold text-purple-600"> 500+ perusahaan multinasional</span>.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <div className="text-2xl font-bold text-blue-600">500+</div>
                      <div className="text-sm text-black">Klien Global</div>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <div className="text-2xl font-bold text-purple-600">99.8%</div>
                      <div className="text-sm text-black">Kepuasan Klien</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 2: Content Left, Image Right */}
            <div className="grid lg:grid-cols-2 gap-20 items-center relative">
              {/* Left Column - Content */}
              <div 
                className={`transform transition-all duration-1000 ease-out ${
                  visiblePoints.point2 
                    ? 'translate-y-0 opacity-100' 
                    : 'translate-y-8 opacity-0'
                }`}
              >
                <div className="lg:pr-8">
                  <div className="flex items-center space-x-3 mb-6">
                    <CheckCircle className="w-8 h-8 text-green-500" />
                    <h3 className="text-3xl font-bold text-black">Teknologi Terdepan</h3>
                  </div>
                  <p className="text-lg text-black leading-relaxed mb-6">
                    Menggunakan sistem <span className="font-semibold text-blue-600">Industry 4.0</span> dengan 
                    AI-powered machinery, IoT monitoring, dan automated quality control yang 
                    memberikan <span className="font-semibold text-purple-600">efisiensi 40% lebih tinggi</span> 
                    dibanding metode konvensional.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      <span className="text-black">AI-Powered Quality Control</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                      <span className="text-black">IoT Real-time Monitoring</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                      <span className="text-black">Automated Production Line</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Center Point */}
              <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                <div 
                  ref={point2Ref}
                  data-point="point2"
                  className={`w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-xl border-4 border-white transform transition-all duration-1000 ease-out ${
                    visiblePoints.point2 
                      ? 'scale-100 rotate-0 opacity-100' 
                      : 'scale-0 rotate-180 opacity-0'
                  }`}
                >
                  02
                </div>
              </div>

              {/* Right Column - Image */}
              <div 
                className={`transform transition-all duration-1000 ease-out delay-200 ${
                  visiblePoints.point2 
                    ? 'translate-y-0 opacity-100' 
                    : 'translate-y-8 opacity-0'
                }`}
              >
                <TechnologyImage />
              </div>
            </div>

            {/* Section 3: Image Left, Content Right */}
            <div className="grid lg:grid-cols-2 gap-20 items-center relative">
              {/* Left Column - Image */}
              <div 
                className={`order-2 lg:order-1 transform transition-all duration-1000 ease-out ${
                  visiblePoints.point3 
                    ? 'translate-y-0 opacity-100' 
                    : 'translate-y-8 opacity-0'
                }`}
              >
                <QualityImage />
              </div>

              {/* Center Point */}
              <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                <div 
                  ref={point3Ref}
                  data-point="point3"
                  className={`w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-xl border-4 border-white transform transition-all duration-1000 ease-out ${
                    visiblePoints.point3 
                      ? 'scale-100 rotate-0 opacity-100' 
                      : 'scale-0 rotate-180 opacity-0'
                  }`}
                >
                  03
                </div>
              </div>

              {/* Right Column - Content */}
              <div 
                className={`order-1 lg:order-2 transform transition-all duration-1000 ease-out delay-200 ${
                  visiblePoints.point3 
                    ? 'translate-y-0 opacity-100' 
                    : 'translate-y-8 opacity-0'
                }`}
              >
                <div className="lg:pl-8">
                  <div className="flex items-center space-x-3 mb-6">
                    <CheckCircle className="w-8 h-8 text-green-500" />
                    <h3 className="text-3xl font-bold text-black">Standar Kualitas Global</h3>
                  </div>
                  <p className="text-lg text-black leading-relaxed mb-6">
                    Bersertifikat <span className="font-semibold text-blue-600">ISO 9001, ISO 14001</span>, dan 
                    <span className="font-semibold text-purple-600"> OHSAS 18001</span> dengan tingkat 
                    defect rate di bawah 0.1% dan customer satisfaction rate 
                    <span className="font-semibold text-green-600"> 99.8%</span>.
                  </p>
                  <div className="grid grid-cols-3 gap-3">
                    <div className="bg-blue-50 p-3 rounded-lg text-center">
                      <div className="text-lg font-bold text-blue-600">ISO 9001</div>
                      <div className="text-xs text-black">Quality Management</div>
                    </div>
                    <div className="bg-purple-50 p-3 rounded-lg text-center">
                      <div className="text-lg font-bold text-purple-600">ISO 14001</div>
                      <div className="text-xs text-black">Environmental</div>
                    </div>
                    <div className="bg-green-50 p-3 rounded-lg text-center">
                      <div className="text-lg font-bold text-green-600">OHSAS 18001</div>
                      <div className="text-xs text-black">Safety Standards</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="lg:hidden relative">
          {/* Vertical Timeline Line - Left Side */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gray-300"></div>
          
          <div className="space-y-16">
            {/* Mobile Section 1 */}
            <div className="relative pl-20">
              {/* Timeline Point */}
              <div className="absolute left-2 top-8">
                <div 
                  className={`w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg border-4 border-white transform transition-all duration-1000 ease-out ${
                    visiblePoints.point1 
                      ? 'scale-100 opacity-100' 
                      : 'scale-0 opacity-0'
                  }`}
                >
                  01
                </div>
              </div>

              {/* Content */}
              <div 
                className={`transform transition-all duration-1000 ease-out ${
                  visiblePoints.point1 
                    ? 'translate-y-0 opacity-100' 
                    : 'translate-y-8 opacity-0'
                }`}
              >
                {/* Image */}
                <div className="mb-6">
                  <ProductionImage />
                </div>

                {/* Text Content */}
                <div className="flex items-center space-x-2 mb-4">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <h3 className="text-xl md:text-2xl font-bold text-black">Pengalaman 25+ Tahun</h3>
                </div>
                <p className="text-sm md:text-base text-black leading-relaxed mb-4">
                  Kami telah melayani industri selama lebih dari dua dekade dengan 
                  <span className="font-semibold text-blue-600"> rekam jejak sempurna</span> dalam 
                  menghadirkan solusi manufaktur berkualitas tinggi yang dipercaya oleh 
                  <span className="font-semibold text-purple-600"> 500+ perusahaan multinasional</span>.
                </p>
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-blue-50 p-3 rounded-lg">
                    <div className="text-xl font-bold text-blue-600">500+</div>
                    <div className="text-xs text-black">Klien Global</div>
                  </div>
                  <div className="bg-purple-50 p-3 rounded-lg">
                    <div className="text-xl font-bold text-purple-600">99.8%</div>
                    <div className="text-xs text-black">Kepuasan Klien</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile Section 2 */}
            <div className="relative pl-20">
              {/* Timeline Point */}
              <div className="absolute left-2 top-8">
                <div 
                  className={`w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg border-4 border-white transform transition-all duration-1000 ease-out ${
                    visiblePoints.point2 
                      ? 'scale-100 opacity-100' 
                      : 'scale-0 opacity-0'
                  }`}
                >
                  02
                </div>
              </div>

              {/* Content */}
              <div 
                className={`transform transition-all duration-1000 ease-out ${
                  visiblePoints.point2 
                    ? 'translate-y-0 opacity-100' 
                    : 'translate-y-8 opacity-0'
                }`}
              >
                {/* Image */}
                <div className="mb-6">
                  <TechnologyImage />
                </div>

                {/* Text Content */}
                <div className="flex items-center space-x-2 mb-4">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <h3 className="text-xl md:text-2xl font-bold text-black">Teknologi Terdepan</h3>
                </div>
                <p className="text-sm md:text-base text-black leading-relaxed mb-4">
                  Menggunakan sistem <span className="font-semibold text-blue-600">Industry 4.0</span> dengan 
                  AI-powered machinery, IoT monitoring, dan automated quality control yang 
                  memberikan <span className="font-semibold text-purple-600">efisiensi 40% lebih tinggi</span> 
                  dibanding metode konvensional.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-sm text-black">AI-Powered Quality Control</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                    <span className="text-sm text-black">IoT Real-time Monitoring</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                    <span className="text-sm text-black">Automated Production Line</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile Section 3 */}
            <div className="relative pl-20">
              {/* Timeline Point */}
              <div className="absolute left-2 top-8">
                <div 
                  className={`w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg border-4 border-white transform transition-all duration-1000 ease-out ${
                    visiblePoints.point3 
                      ? 'scale-100 opacity-100' 
                      : 'scale-0 opacity-0'
                  }`}
                >
                  03
                </div>
              </div>

              {/* Content */}
              <div 
                className={`transform transition-all duration-1000 ease-out ${
                  visiblePoints.point3 
                    ? 'translate-y-0 opacity-100' 
                    : 'translate-y-8 opacity-0'
                }`}
              >
                {/* Image */}
                <div className="mb-6">
                  <QualityImage />
                </div>

                {/* Text Content */}
                <div className="flex items-center space-x-2 mb-4">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <h3 className="text-xl md:text-2xl font-bold text-black">Standar Kualitas Global</h3>
                </div>
                <p className="text-sm md:text-base text-black leading-relaxed mb-4">
                  Bersertifikat <span className="font-semibold text-blue-600">ISO 9001, ISO 14001</span>, dan 
                  <span className="font-semibold text-purple-600"> OHSAS 18001</span> dengan tingkat 
                  defect rate di bawah 0.1% dan customer satisfaction rate 
                  <span className="font-semibold text-green-600"> 99.8%</span>.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-3">
                  <div className="bg-blue-50 p-2 md:p-3 rounded-lg text-center">
                    <div className="text-base md:text-lg font-bold text-blue-600">ISO 9001</div>
                    <div className="text-xs text-black">Quality Management</div>
                  </div>
                  <div className="bg-purple-50 p-2 md:p-3 rounded-lg text-center">
                    <div className="text-base md:text-lg font-bold text-purple-600">ISO 14001</div>
                    <div className="text-xs text-black">Environmental</div>
                  </div>
                  <div className="bg-green-50 p-2 md:p-3 rounded-lg text-center">
                    <div className="text-base md:text-lg font-bold text-green-600">OHSAS 18001</div>
                    <div className="text-xs text-black">Safety Standards</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;