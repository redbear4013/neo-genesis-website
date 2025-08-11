'use client';

import React from 'react';
import Image from 'next/image';

const ClientLogos = () => {
  const firstRowLogos = [
    { name: 'HSBC', logo: '/images/client-logos/39109-hsbc-logo-icon-vector-icon-vector-eps.png' },
    { name: 'China Construction Bank', logo: '/images/client-logos/601988.SS_BIG-9b33a254.png' },
    { name: 'Grand Hyatt', logo: '/images/client-logos/Grand hyat.png' },
    { name: 'Wynn Macau', logo: '/images/client-logos/Logo_Wynn Macau_ENG.png' },
    { name: 'Wynn Palace', logo: '/images/client-logos/Logo_Wynn Palace_ENG.png' },
  ];

  const secondRowLogos = [
    { name: 'MGM', logo: '/images/client-logos/MGM.png' },
    { name: 'City of Dreams', logo: '/images/client-logos/cod_lockup_dark.png' },
    { name: 'The Venetian Macau', logo: '/images/client-logos/veneitian.png' },
    { name: 'STDM', logo: '/images/client-logos/STDM.png' },
    { name: 'UM', logo: '/images/client-logos/UM.png' },
  ];

  return (
    <section className="bg-neo-teal py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Trusted by the Best
          </h2>
          <p className="text-xl text-white opacity-90">
            We&apos;ve had the privilege to work with some of the most prestigious brands
          </p>
        </div>
        
        <div className="relative space-y-8">
          {/* First row - left to right */}
          <div className="relative">
            <div className="flex animate-scroll">
              {/* First set of logos */}
              {firstRowLogos.map((client, index) => (
                <div 
                  key={`first-${index}`}
                  className="flex-shrink-0 mx-8 h-20 w-48 flex items-center justify-center"
                >
                  <div className="relative h-full w-full">
                    <Image
                      src={client.logo}
                      alt={`${client.name} logo`}
                      fill
                      className={`object-contain opacity-70 hover:opacity-100 transition-opacity duration-300 ${
                        client.name === 'Grand Hyatt' ? 'filter brightness-0' : ''
                      }`}
                      sizes="192px"
                    />
                  </div>
                </div>
              ))}
              {/* Duplicate set for seamless loop */}
              {firstRowLogos.map((client, index) => (
                <div 
                  key={`first-duplicate-${index}`}
                  className="flex-shrink-0 mx-8 h-20 w-48 flex items-center justify-center"
                >
                  <div className="relative h-full w-full">
                    <Image
                      src={client.logo}
                      alt={`${client.name} logo`}
                      fill
                      className={`object-contain opacity-70 hover:opacity-100 transition-opacity duration-300 ${
                        client.name === 'Grand Hyatt' ? 'filter brightness-0' : ''
                      }`}
                      sizes="192px"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Second row - right to left */}
          <div className="relative">
            <div className="flex animate-scroll-reverse">
              {/* First set of logos */}
              {secondRowLogos.map((client, index) => (
                <div 
                  key={`second-${index}`}
                  className="flex-shrink-0 mx-8 h-20 w-48 flex items-center justify-center"
                >
                  <div className="relative h-full w-full">
                    <Image
                      src={client.logo}
                      alt={`${client.name} logo`}
                      fill
                      className={`object-contain opacity-70 hover:opacity-100 transition-opacity duration-300 ${
                        client.name === 'MGM' ? 'filter brightness-0' : ''
                      }`}
                      sizes="192px"
                    />
                  </div>
                </div>
              ))}
              {/* Duplicate set for seamless loop */}
              {secondRowLogos.map((client, index) => (
                <div 
                  key={`second-duplicate-${index}`}
                  className="flex-shrink-0 mx-8 h-20 w-48 flex items-center justify-center"
                >
                  <div className="relative h-full w-full">
                    <Image
                      src={client.logo}
                      alt={`${client.name} logo`}
                      fill
                      className={`object-contain opacity-70 hover:opacity-100 transition-opacity duration-300 ${
                        client.name === 'MGM' ? 'filter brightness-0' : ''
                      }`}
                      sizes="192px"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;