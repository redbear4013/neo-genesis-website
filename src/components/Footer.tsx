import React from 'react';
import Link from 'next/link';
import { MapPin, Phone, Mail } from 'lucide-react';
import NeoGenesisLogo from './ui/NeoGenesisLogo';

const Footer: React.FC = () => {
  const offices = [
    {
      location: 'Macau',
      address: 'Alameda Dr. Carlos D\'Assumpção, No. 258, PRACA KIN HENG LONG, 14 andar R',
      phone: '+853 2875 7686',
      country: 'MACAU',
    },
    {
      location: 'China',
      address: 'Hengqin MCC Headquarters Complex Hr. 27 Room 04, Hengqin Zhuhai, China',
      phone: '+86 18516377303',
      country: 'CHINA',
    },
    {
      location: 'Northern Mariana Islands',
      address: 'Beach Rd. Garapan Floor of the Yuyu Bldg. 3rd Floor Room 103, Saipan',
      phone: '+1 670 322 9568',
      country: 'NORTHERN MARIANA ISLANDS (USA)',
    },
  ];

  const services = [
    'Structural Consultancy Services',
    'Special Inspections',
    'QA/QC For Structural Element',
    'Construction Management',
    'Building Department Submission',
    'BIM Services',
  ];

  return (
    <footer className="bg-neo-charcoal text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <NeoGenesisLogo size="md" />
              <div>
                <h3 className="text-lg font-bold text-neo-teal">NEO GENESIS</h3>
                <p className="text-xs text-neo-teal-light">CONSTRUCTION AND ENGINEERING CO., LTD</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm mb-4">
              Founded in 2015, our firm strives to produce practical, buildable and economic designs with expertise in engineering, construction and inspection.
            </p>
            <p className="text-xs text-gray-400">
              Registered Company in Macau, Northern Mariana Islands, USA & Zhuhai, China
            </p>
          </div>

          {/* Services */}
          <div className="lg:col-span-1">
            <h4 className="text-lg font-semibold text-neo-teal mb-4">Our Services</h4>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <Link href="/services" className="text-gray-300 hover:text-neo-teal transition-colors text-sm">
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Global Offices */}
          <div className="lg:col-span-2">
            <h4 className="text-lg font-semibold text-neo-teal mb-4">Global Offices</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {offices.map((office, index) => (
                <div key={index} className="border border-neo-slate rounded-lg p-4">
                  <h5 className="font-semibold text-neo-teal-light mb-2">{office.location}</h5>
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
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-neo-slate mt-8 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 sm:mb-0">
              &copy; 2025 Neo-Genesis Construction & Engineering Co., Ltd. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link href="/privacy" className="text-gray-400 hover:text-neo-teal text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-neo-teal text-sm transition-colors">
                Terms of Service
              </Link>
              <a href="mailto:info@neogenesis.com" className="text-gray-400 hover:text-neo-teal text-sm transition-colors flex items-center space-x-1">
                <Mail className="h-4 w-4" />
                <span>Contact Us</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;