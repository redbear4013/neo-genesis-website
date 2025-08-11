import Image from 'next/image';
import ClientLogos from '@/components/ClientLogos';
import { MapPin, Phone, Clock } from 'lucide-react';

export default function About() {
  const offices = [
    {
      location: 'Macau',
      country: 'MACAU',
      flag: '🇲🇴',
      address: 'Alameda Dr. Carlos D\'Assumpção, No. 258',
      detail: 'PRACA KIN HENG LONG, 14 andar R',
      phone: '+853 2875 7686',
      timezone: 'GMT+8',
      isHeadquarters: true,
    },
    {
      location: 'Zhuhai',
      country: 'CHINA',
      flag: '🇨🇳',
      address: 'Hengqin MCC Headquarters Complex Hr. 27 Room 04',
      detail: 'Hengqin Zhuhai, China',
      phone: '+86 18516377303',
      timezone: 'GMT+8',
      isHeadquarters: false,
    },
    {
      location: 'Saipan',
      country: 'NORTHERN MARIANA ISLANDS (USA)',
      flag: '🇺🇸',
      address: 'Beach Rd. Garapan Floor of the Yuyu Bldg.',
      detail: '3rd Floor Room 103, Saipan',
      phone: '+1 670 322 9568',
      timezone: 'GMT+10',
      isHeadquarters: false,
    },
  ];
  return (
    <div className="min-h-screen bg-neo-off-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-neo-dark-gray mb-6 animate-fade-in-up">
            About NEO GENESIS
          </h1>
          <p className="text-xl text-neo-gray max-w-3xl mx-auto animate-fade-in-up">
            Construction & Engineering Co., Ltd
          </p>
        </div>

        {/* Company Overview */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className="animate-slide-in-left">
            <h2 className="text-3xl font-bold text-neo-dark-gray mb-6">Our Story</h2>
            <p className="text-neo-gray mb-4">
              Founded in 2015, NEO GENESIS Construction & Engineering Co., Ltd has established itself as a leading 
              provider of innovative engineering solutions across China, Macau, USA, and Hong Kong.
            </p>
            <p className="text-neo-gray mb-4">
              Our company was born from a vision to revolutionize the construction industry through cutting-edge 
              technology, sustainable practices, and uncompromising quality standards.
            </p>
            <p className="text-neo-gray">
              With a diverse portfolio spanning structural engineering, BIM technology implementation, and comprehensive 
              project management, we have successfully delivered over 200 projects worldwide.
            </p>
          </div>
          <div className="animate-fade-in-up">
            <h2 className="text-3xl font-bold text-neo-dark-gray mb-6">Our Mission</h2>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <p className="text-neo-gray mb-4">
                To deliver exceptional engineering solutions that shape the future of construction while maintaining 
                the highest standards of safety, sustainability, and innovation.
              </p>
              <p className="text-neo-gray">
                We strive to build lasting partnerships with our clients by consistently exceeding expectations 
                and delivering projects that stand the test of time.
              </p>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-neo-dark-gray text-center mb-12">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="group relative bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl shadow-2xl hover:shadow-3xl transform hover:-translate-y-2 transition-all duration-500 border-t-4 border-blue-500 animate-fade-in-up">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                    <div className="w-4 h-4 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full"></div>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-neo-dark-gray mb-4 group-hover:text-blue-500 transition-colors duration-300">Innovation</h3>
                <p className="text-neo-gray leading-relaxed">
                  Embracing cutting-edge technology and methodologies to deliver superior results.
                </p>
              </div>
            </div>
            <div className="group relative bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl shadow-2xl hover:shadow-3xl transform hover:-translate-y-2 transition-all duration-500 border-t-4 border-emerald-500 animate-fade-in-up">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                    <div className="w-4 h-4 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full"></div>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-neo-dark-gray mb-4 group-hover:text-emerald-500 transition-colors duration-300">Integrity</h3>
                <p className="text-neo-gray leading-relaxed">
                  Building trust through transparency, honesty, and ethical business practices.
                </p>
              </div>
            </div>
            <div className="group relative bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl shadow-2xl hover:shadow-3xl transform hover:-translate-y-2 transition-all duration-500 border-t-4 border-amber-500 animate-fade-in-up">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                    <div className="w-4 h-4 bg-gradient-to-br from-amber-500 to-amber-600 rounded-full"></div>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-neo-dark-gray mb-4 group-hover:text-amber-500 transition-colors duration-300">Excellence</h3>
                <p className="text-neo-gray leading-relaxed">
                  Pursuing perfection in every project through meticulous attention to detail.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Global Presence */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-neo-dark-gray text-center mb-12">Global Presence</h2>
          
          {/* World Map Visual */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="bg-gradient-to-br from-neo-teal/10 to-neo-teal-light/10 rounded-2xl p-8 relative overflow-hidden">
              {/* World Map Background */}
              <div className="relative h-96 rounded-xl overflow-hidden">
                <Image 
                  src="/images/globeofficemap.PNG" 
                  alt="Global Office Map"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-neo-teal/5 rounded-xl"></div>
              </div>
            </div>
          </div>

          {/* Office Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {offices.map((office, index) => (
              <div
                key={index}
                className={`bg-white rounded-xl p-6 shadow-lg border-t-4 hover:shadow-xl transition-all duration-300 ${
                  office.isHeadquarters 
                    ? 'border-neo-teal bg-gradient-to-b from-neo-teal/5 to-transparent' 
                    : 'border-neo-teal-light'
                }`}
              >
                <div className="text-center mb-4">
                  <div className="flex items-center justify-center space-x-3 mb-2">
                    <div className="flex items-center space-x-1 text-neo-slate text-sm">
                      <Clock className="h-4 w-4" />
                      <span>{office.timezone}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-neo-charcoal flex items-center justify-center space-x-2">
                    <span>{office.location}</span>
                    {office.isHeadquarters && (
                      <span className="bg-neo-teal text-white text-xs px-2 py-1 rounded-full">
                        HQ
                      </span>
                    )}
                  </h3>
                  <p className="text-sm text-neo-teal font-medium">{office.country}</p>
                </div>

                <div className="space-y-3 text-center">
                  <div className="flex items-start justify-center space-x-2">
                    <MapPin className="h-4 w-4 text-neo-teal mt-0.5 flex-shrink-0" />
                    <div className="text-neo-slate text-sm">
                      <p>{office.address}</p>
                      <p className="opacity-75">{office.detail}</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-center space-x-2">
                    <Phone className="h-4 w-4 text-neo-teal" />
                    <a 
                      href={`tel:${office.phone}`}
                      className="text-neo-slate hover:text-neo-teal transition-colors font-medium text-sm"
                    >
                      {office.phone}
                    </a>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-gray-100 text-center">
                  <button className="text-neo-teal hover:text-neo-teal-dark font-medium text-sm transition-colors">
                    View Details →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Client Logos */}
      <ClientLogos />
    </div>
  );
}