'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
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
    <section className="relative text-white overflow-hidden min-h-screen md:min-h-[80vh] lg:min-h-[90vh] flex items-center w-full">
      {/* Background Image - Desktop */}
      <div className="absolute inset-0 hidden md:block">
        <Image 
          src="/images/hero/Bridge1.jpg"
          alt="Neo Genesis Engineering Bridge Project"
          fill
          className="object-cover object-bottom"
          priority
        />
      </div>
      
      {/* Background Image - Mobile */}
      <div className="absolute inset-0 md:hidden">
        <Image 
          src="/images/hero/IFC HK.jpg"
          alt="Neo Genesis Engineering IFC Hong Kong Project"
          fill
          className="object-cover object-center"
          priority
        />
      </div>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[rgba(30,41,59,0.7)] via-[rgba(30,41,59,0.8)] to-[rgba(30,41,59,0.7)] md:bg-gradient-to-r md:from-[rgba(30,41,59,0.8)] md:via-[rgba(30,41,59,0.7)] md:to-[rgba(30,41,59,0.6)]"></div>

      <div className="relative w-full max-w-7xl mx-auto safe-area-padding px-4 sm:px-6 md:px-8 py-8 md:py-16">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-16 items-center w-full">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8 text-center lg:text-left px-2 sm:px-0 w-full lg:order-first"
          >
            <div className="space-y-6">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight"
              >
                <div className="text-[#2DD4BF] mb-2">{t('hero.title')}</div>
                <div className="text-[#D1D5DC] text-3xl sm:text-4xl lg:text-4xl leading-tight">{t('hero.subtitle')}</div>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="text-lg lg:text-xl text-[#D1D5DC] leading-relaxed font-normal max-w-2xl mx-auto lg:mx-0"
              >
                {t('hero.description')}
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start max-w-md mx-auto lg:max-w-none"
            >
              <Link href="/projects" className="w-full sm:w-auto">
                <button className="w-full bg-[#2DD4BF] hover:bg-[#25B8A7] text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 text-center">
                  {t('hero.viewProjects')}
                </button>
              </Link>
              <Link href="/contact" className="w-full sm:w-auto">
                <button className="w-full border-2 border-[#2DD4BF] text-[#2DD4BF] hover:bg-[#2DD4BF] hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 text-center">
                  {t('hero.contactUs')}
                </button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="space-y-6 w-full lg:order-last"
          >
            {/* Mobile layout - 3 cards in a row */}
            <div className="grid grid-cols-3 gap-2 lg:hidden">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 + index * 0.2, duration: 0.6 }}
                  className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-[#2DD4BF]/20"
                >
                  <div className="flex flex-col items-center space-y-2 text-center">
                    <div className="bg-[#2DD4BF] p-2 rounded-lg">
                      <stat.icon className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <div className="text-lg font-bold text-[#2DD4BF] leading-tight">{stat.value}</div>
                      <div className="text-xs text-[#D1D5DC] leading-tight">{stat.label}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Desktop layout - vertical stack */}
            <div className="hidden lg:block space-y-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 + index * 0.2, duration: 0.6 }}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-[#2DD4BF]/20 w-full"
                >
                  <div className="flex items-center space-x-4">
                    <div className="bg-[#2DD4BF] p-3 rounded-lg flex-shrink-0">
                      <stat.icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="text-3xl font-bold text-[#2DD4BF] leading-tight">{stat.value}</div>
                      <div className="text-base text-[#D1D5DC] leading-tight">{stat.label}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.5, duration: 0.6 }}
              className="p-4 md:p-6 rounded-xl text-center bg-white/5 backdrop-blur-sm border border-[#2DD4BF]/10"
            >
              <h3 className="text-lg md:text-xl font-bold text-white leading-tight mb-2">{t('hero.bimLeader')}</h3>
              <p className="text-sm md:text-base text-white/90 leading-relaxed">
                {t('hero.bimDescription')}
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg className="w-full h-8 md:h-12 fill-[#F8FAFC]" viewBox="0 0 1920 48" preserveAspectRatio="none">
          <path d="M0,19.38 L1920,19.38 L1920,48 L0,48 Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;