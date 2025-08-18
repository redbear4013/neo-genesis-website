'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { 
  Building2, 
  ClipboardCheck, 
  FileText, 
  HardHat, 
  Box, 
  Calendar 
} from 'lucide-react';

const Services: React.FC = () => {
  const { t } = useLanguage();
  
  const services = [
    {
      icon: Building2,
      title: t('services.structural'),
      description: t('services.structural.desc'),
      features: [t('services.structural.list1'), t('services.structural.list2'), t('services.structural.list3')]
    },
    {
      icon: ClipboardCheck,
      title: t('services.inspection'),
      description: t('services.inspection.desc'),
      features: [t('services.inspection.list1'), t('services.inspection.list2'), t('services.inspection.list3'), t('services.inspection.list4'), t('services.inspection.list5')]
    },
    {
      icon: HardHat,
      title: t('services.construction'),
      description: t('services.construction.desc'),
      features: [t('services.construction.list1'), t('services.construction.list2'), t('services.construction.list3')]
    },
    {
      icon: FileText,
      title: t('services.permits'),
      description: t('services.permits.desc'),
      features: [t('services.permits.list1'), t('services.permits.list2'), t('services.permits.list3')]
    },
    {
      icon: Box,
      title: t('services.bim'),
      description: t('services.bim.desc'),
      features: [t('services.bim.list1'), t('services.bim.list2'), t('services.bim.list3')]
    },
    {
      icon: Calendar,
      title: t('services.exhibition'),
      description: t('services.exhibition.desc'),
      features: [t('services.exhibition.list1'), t('services.exhibition.list2'), t('services.exhibition.list3')]
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section className="py-16 bg-neo-off-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-neo-dark-gray mb-6">
            {t('services.home.title')}
          </h2>
          <p className="text-xl text-neo-gray max-w-3xl mx-auto">
            {t('services.home.subtitle')}
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-neo-teal/30 group"
            >
              <div className="flex items-center mb-6">
                <div className="bg-neo-teal/10 group-hover:bg-neo-teal group-hover:text-white p-4 rounded-lg transition-all duration-300">
                  <service.icon className="h-8 w-8 text-neo-teal group-hover:text-white" />
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-neo-dark-gray mb-4 group-hover:text-neo-teal transition-colors">
                {service.title}
              </h3>
              
              <p className="text-neo-gray mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-neo-gray">
                    <div className="w-2 h-2 bg-neo-teal rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <div className="mt-6 pt-6 border-t border-gray-100">
                <button className="text-neo-teal font-semibold hover:text-neo-dark-teal transition-colors flex items-center group-hover:translate-x-2 transition-transform">
                  {t('services.home.learnMore')}
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-center mt-12"
        >
          <div className="bg-gradient-to-r from-neo-teal to-neo-dark-teal text-white rounded-xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">{t('services.home.customSolution')}</h3>
            <p className="text-lg opacity-95 mb-6">
              {t('services.home.customDescription')}
            </p>
            <a href="/contact" className="inline-block bg-white text-neo-teal px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
              {t('services.home.discussProject')}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;