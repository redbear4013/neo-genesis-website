'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { MapPin, Phone, Clock } from 'lucide-react';

const GlobalOffices: React.FC = () => {
  const { t } = useLanguage();
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
      coordinates: { x: '70%', y: '42%' },
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
      coordinates: { x: '68%', y: '38%' },
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
      coordinates: { x: '85%', y: '28%' },
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
            {t('global.title')}
          </h2>
          <p className="text-xl text-neo-slate max-w-3xl mx-auto">
            {t('global.subtitle')}
          </p>
        </motion.div>

        {/* World Map Visual - Centered */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto mb-16"
        >
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
        </motion.div>

        {/* Office Cards - Horizontal Layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {offices.map((office, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`bg-white rounded-xl p-6 shadow-lg border-t-4 hover:shadow-xl transition-all duration-300 ${
                office.isHeadquarters 
                  ? 'border-neo-teal bg-gradient-to-b from-neo-teal/5 to-transparent' 
                  : 'border-neo-teal-light'
              }`}
            >
              <div className="text-center mb-4">
                <div className="flex items-center justify-center space-x-3 mb-2">
                  <span className="text-3xl">{office.flag}</span>
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
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-center mt-8"
        >
          <div className="bg-neo-charcoal text-white rounded-xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Ready to Start Your Project?</h3>
            <p className="text-lg opacity-90 mb-6">
              Contact any of our offices to discuss your construction and engineering needs. 
              Our local teams are ready to provide expert consultation and support.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GlobalOffices;