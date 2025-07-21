'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Clock } from 'lucide-react';

const GlobalOffices: React.FC = () => {
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
      coordinates: { x: '85%', y: '45%' },
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
      coordinates: { x: '82%', y: '42%' },
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
      coordinates: { x: '88%', y: '25%' },
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-neo-charcoal mb-6">
            Global <span className="text-neo-teal">Presence</span>
          </h2>
          <p className="text-xl text-neo-slate max-w-3xl mx-auto">
            With offices across Asia-Pacific and the United States, we provide localized expertise 
            and international standards to clients worldwide.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* World Map Visual */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-neo-teal/10 to-neo-teal-light/10 rounded-2xl p-8 relative overflow-hidden">
              {/* Simplified World Map Background */}
              <div className="relative h-80 bg-neo-off-white rounded-xl overflow-hidden">
                <svg 
                  className="w-full h-full opacity-20" 
                  viewBox="0 0 1000 500" 
                  fill="none"
                >
                  {/* Simplified Asia-Pacific region outline */}
                  <path 
                    d="M600,200 L700,180 L750,220 L780,250 L800,280 L750,320 L680,340 L620,300 L580,260 Z" 
                    fill="#4A9B9B" 
                    opacity="0.3"
                  />
                  <path 
                    d="M100,150 L200,140 L250,180 L280,220 L250,260 L180,280 L120,240 L90,200 Z" 
                    fill="#4A9B9B" 
                    opacity="0.3"
                  />
                </svg>

                {/* Office Location Pins */}
                {offices.map((office, index) => (
                  <motion.div
                    key={index}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1 + index * 0.2, duration: 0.5 }}
                    className="absolute"
                    style={{ 
                      left: office.coordinates.x, 
                      top: office.coordinates.y,
                      transform: 'translate(-50%, -50%)'
                    }}
                  >
                    <div className={`relative ${office.isHeadquarters ? 'scale-125' : ''}`}>
                      <div className="w-4 h-4 bg-neo-teal rounded-full animate-pulse shadow-lg"></div>
                      <div className="absolute -top-1 -left-1 w-6 h-6 bg-neo-teal/30 rounded-full animate-ping"></div>
                      <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-neo-charcoal text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                        {office.location} {office.flag}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="text-center mt-6">
                <div className="inline-flex items-center space-x-2 bg-neo-teal text-white px-4 py-2 rounded-full text-sm">
                  <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                  <span>3 Strategic Locations</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Office Cards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            {offices.map((office, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`bg-white rounded-xl p-6 shadow-lg border-l-4 hover:shadow-xl transition-all duration-300 ${
                  office.isHeadquarters 
                    ? 'border-neo-teal bg-gradient-to-r from-neo-teal/5 to-transparent' 
                    : 'border-neo-teal-light'
                }`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">{office.flag}</span>
                    <div>
                      <h3 className="text-xl font-bold text-neo-charcoal flex items-center space-x-2">
                        <span>{office.location}</span>
                        {office.isHeadquarters && (
                          <span className="bg-neo-teal text-white text-xs px-2 py-1 rounded-full">
                            HQ
                          </span>
                        )}
                      </h3>
                      <p className="text-sm text-neo-teal font-medium">{office.country}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-1 text-neo-slate text-sm">
                    <Clock className="h-4 w-4" />
                    <span>{office.timezone}</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <MapPin className="h-5 w-5 text-neo-teal mt-0.5 flex-shrink-0" />
                    <div className="text-neo-slate">
                      <p>{office.address}</p>
                      <p className="text-sm opacity-75">{office.detail}</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-neo-teal" />
                    <a 
                      href={`tel:${office.phone}`}
                      className="text-neo-slate hover:text-neo-teal transition-colors font-medium"
                    >
                      {office.phone}
                    </a>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-gray-100">
                  <button className="text-neo-teal hover:text-neo-teal-dark font-medium text-sm transition-colors">
                    View Location Details →
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-neo-charcoal text-white rounded-xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Ready to Start Your Project?</h3>
            <p className="text-lg opacity-90 mb-6">
              Contact any of our offices to discuss your construction and engineering needs. 
              Our local teams are ready to provide expert consultation and support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-neo-teal hover:bg-neo-teal-dark px-6 py-3 rounded-lg font-semibold transition-colors">
                Contact Macau Office
              </button>
              <button className="border border-neo-teal text-neo-teal hover:bg-neo-teal hover:text-white px-6 py-3 rounded-lg font-semibold transition-all">
                Contact China Office
              </button>
              <button className="border border-neo-teal text-neo-teal hover:bg-neo-teal hover:text-white px-6 py-3 rounded-lg font-semibold transition-all">
                Contact USA Office
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GlobalOffices;