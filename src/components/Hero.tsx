'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Building2, Award, Globe } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Hero: React.FC = () => {
  const { t } = useLanguage();
  
  const stats = [
    { icon: Building2, value: '10+', label: t('hero.yearsExp') },
    { icon: Award, value: '100+', label: t('hero.projectsCompleted') },
    { icon: Globe, value: '3', label: t('hero.countries') },
  ];

  return (
    <section className="relative text-white overflow-hidden min-h-screen">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image 
          src="/images/hero/Bridge1.jpg" 
          alt="Neo Genesis Engineering Bridge Project"
          fill
          className="object-cover object-center"
          style={{ transform: 'translateY(-550px)' }}
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-neo-dark-gray/80 via-neo-dark-gray/70 to-neo-dark-gray/60"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="inline-block"
              >
                <span className="bg-neo-teal text-white px-4 py-2 rounded-full text-sm font-medium">
                  {t('hero.founded')}
                </span>
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="text-4xl lg:text-6xl font-bold leading-tight"
              >
                <span className="text-neo-teal">{t('hero.title')}</span>
                <br />
                <span className="text-3xl lg:text-4xl text-gray-300">
                  {t('hero.subtitle')}
                </span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.6 }}
                className="text-xl text-gray-300 leading-relaxed"
              >
                {t('hero.description')}
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button className="bg-neo-teal hover:bg-neo-dark-teal text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl">
                {t('hero.viewProjects')}
              </button>
              <button className="border-2 border-neo-teal text-neo-teal hover:bg-neo-teal hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300">
                {t('hero.contactUs')}
              </button>
            </motion.div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="space-y-8"
          >
            <div className="grid grid-cols-1 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.1 + index * 0.2, duration: 0.6 }}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-neo-teal/20 hover:border-neo-teal/40 transition-all duration-300"
                >
                  <div className="flex items-center space-x-4">
                    <div className="bg-neo-teal p-3 rounded-lg">
                      <stat.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-neo-teal">{stat.value}</div>
                      <div className="text-gray-300">{stat.label}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.8, duration: 0.6 }}
              className="bg-gradient-to-r from-neo-teal to-neo-dark-teal p-6 rounded-xl text-center"
            >
              <h3 className="text-xl font-bold mb-2">{t('hero.bimLeader')}</h3>
              <p className="text-sm opacity-90">
                {t('hero.bimDescription')}
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg className="w-full h-12 fill-neo-off-white" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,60 C300,100 900,20 1200,60 L1200,120 L0,120 Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;