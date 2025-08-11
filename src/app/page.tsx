'use client';

import Hero from '@/components/Hero';
import Services from '@/components/Services';
import ProjectPortfolio from '@/components/ProjectPortfolio';
import GlobalOffices from '@/components/GlobalOffices';
import ClientLogos from '@/components/ClientLogos';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Home() {
  const { t } = useLanguage();
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero />
      
      {/* Services Overview */}
      <Services />
      
      {/* Featured Projects */}
      <ProjectPortfolio />
      
      {/* Global Offices */}
      <GlobalOffices />
      
      {/* Client Logos */}
      <ClientLogos />
      
      {/* Call to Action */}
      <section className="bg-neo-teal py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            {t('cta.title')}
          </h2>
          <p className="text-xl text-white mb-8 opacity-90">
            {t('cta.description')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="bg-white text-neo-teal hover:bg-neo-off-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
            >
              {t('cta.getStarted')}
            </a>
            <a 
              href="/projects" 
              className="border-2 border-white text-white hover:bg-white hover:text-neo-teal px-8 py-4 rounded-lg font-semibold transition-all duration-300"
            >
              {t('cta.viewWork')}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}