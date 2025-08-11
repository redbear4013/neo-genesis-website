'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Building2, Award, Globe } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Hero: React.FC = () => {
  const { t } = useLanguage();
  
  const stats = [
    { icon: Building2, value: '15+', label: t('hero.yearsExp') },
    { icon: Award, value: '100+', label: t('hero.projectsCompleted') },
    { icon: Globe, value: '3', label: t('hero.countries') },
  ];

  return (
    <section className="relative text-white overflow-hidden" style={{ height: '800px' }}>
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image 
          src="/images/hero/Bridge1.jpg" 
          alt="Neo Genesis Engineering Bridge Project"
          fill
          className="object-cover object-bottom"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[rgba(30,41,59,0.8)] via-[rgba(30,41,59,0.7)] to-[rgba(30,41,59,0.6)]"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-8 py-12" style={{ paddingTop: '200px' }}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-6xl font-bold leading-[75px]"
              >
                <div className="text-[#2DD4BF] mb-2">{t('hero.title')}</div>
                <div className="text-[#D1D5DC] text-4xl leading-10">{t('hero.subtitle')}</div>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="text-xl text-[#D1D5DC] leading-[32.5px] font-normal"
              >
                {t('hero.description')}
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="flex gap-4"
            >
              <button className="bg-[#2DD4BF] hover:bg-[#25B8A7] text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300">
                {t('hero.viewProjects')}
              </button>
              <button className="border-2 border-[#2DD4BF] text-[#2DD4BF] hover:bg-[#2DD4BF] hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300">
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
            <div className="space-y-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 + index * 0.2, duration: 0.6 }}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-[#2DD4BF]/20"
                >
                  <div className="flex items-center space-x-4">
                    <div className="bg-[#2DD4BF] p-3 rounded-lg">
                      <stat.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-[#2DD4BF] leading-9">{stat.value}</div>
                      <div className="text-[#D1D5DC] leading-6">{stat.label}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.5, duration: 0.6 }}
              className="p-6 rounded-xl text-center"
            >
              <h3 className="text-xl font-bold text-white leading-7 mb-2">{t('hero.bimLeader')}</h3>
              <p className="text-sm text-white/90 leading-5">
                {t('hero.bimDescription')}
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg className="w-full h-12 fill-[#F8FAFC]" viewBox="0 0 1920 48" preserveAspectRatio="none">
          <path d="M0,19.38 L1920,19.38 L1920,48 L0,48 Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;