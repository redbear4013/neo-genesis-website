'use client';

import React from 'react';
import Link from 'next/link';
import { MapPin, Phone, Mail } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Footer: React.FC = () => {
  const { t } = useLanguage();
  const office = {
    address: 'Rua dos Curtidores. No. 29 EDF. YU WAH GARDEN. GF Unit L',
    phone: '+853 66887906',
  };

  const services = [
    t('services.structural'),
    t('services.inspections'),
    t('services.qaqc'),
    t('services.construction'),
    t('services.permits'),
    t('services.bim'),
  ];

  return (
    <footer className="bg-neo-charcoal text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className="mb-3">
              <h3 className="text-lg font-bold text-neo-teal">NEO GENESIS</h3>
              <p className="text-xs text-neo-teal-light">CONSTRUCTION AND ENGINEERING CO., LTD</p>
            </div>
            <p className="text-xs text-gray-400">
              Registered Company in Macau, Northern Mariana Islands, USA & Zhuhai, China
            </p>
          </div>

          {/* Services - Centered */}
          <div className="text-center">
            <h4 className="text-lg font-semibold text-neo-teal mb-3">{t('footer.services')}</h4>
            <div className="grid grid-cols-2 gap-x-4 gap-y-1 justify-center">
              {services.map((service, index) => (
                <div key={index}>
                  <Link href="/services" className="text-gray-300 hover:text-neo-teal transition-colors text-xs block">
                    {service}
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Office Contact */}
          <div>
            <h4 className="text-lg font-semibold text-neo-teal mb-3">{t('footer.contactInfo')}</h4>
            <div className="space-y-2 text-sm">
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-neo-teal mt-0.5 flex-shrink-0" />
                <p className="text-gray-300">{office.address}</p>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-neo-teal" />
                <a href={`tel:${office.phone}`} className="text-gray-300 hover:text-neo-teal transition-colors">
                  {office.phone}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-neo-slate mt-6 pt-6">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 sm:mb-0">
              {t('footer.copyright')}
            </p>
            <div className="flex space-x-6">
              <Link href="/privacy" className="text-gray-400 hover:text-neo-teal text-sm transition-colors">
                {t('footer.privacy')}
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-neo-teal text-sm transition-colors">
                {t('footer.terms')}
              </Link>
              <a href="mailto:info@neogenesis.com" className="text-gray-400 hover:text-neo-teal text-sm transition-colors flex items-center space-x-1">
                <Mail className="h-4 w-4" />
                <span>{t('footer.contactUs')}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;