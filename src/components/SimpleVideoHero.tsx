'use client';

import { useLanguage } from '@/contexts/LanguageContext';

export default function SimpleVideoHero() {
  const { t } = useLanguage();
  
  return (
    <div className="relative h-screen overflow-hidden">
      {/* Background Image for Mobile/Small Screens */}
      <div className="absolute inset-0 md:hidden">
        <div 
          className="absolute top-0 left-0 w-full h-full bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('/images/hero/011.jpg')` }}
        ></div>
      </div>
      
      {/* Video Background for Desktop/Large Screens */}
      <div className="hidden md:block">
        {/* Fallback Background Image */}
        <div 
          className="absolute top-0 left-0 w-full h-full bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('/images/hero/Bridge1.jpg')` }}
        ></div>
        
        {/* Optimized Video Background */}
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          poster="/images/hero/Bridge1.jpg"
          onLoadStart={() => console.log('Video load started')}
          onLoadedData={() => console.log('Video data loaded')}
          onCanPlay={() => console.log('Video can play')}
          onPlay={() => console.log('Video started playing')}
          onError={(e) => console.error('Video error:', e)}
          style={{
            willChange: 'transform',
            transform: 'translateZ(0)',
            backfaceVisibility: 'hidden',
            perspective: '1000px'
          }}
        >
          <source src="/videos/macau-4k-drone.webm" type="video/webm" />
          <source src="/videos/macau-4k-drone.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Light Overlay - Temporarily removed to test video visibility */}
      {/* <div className="absolute inset-0 bg-black bg-opacity-10"></div> */}

      {/* Content Overlay */}
      <div className="relative z-10 flex items-center justify-center h-full text-white text-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 drop-shadow-lg">
            {t('about.title')}
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl mb-4 drop-shadow-md">
            {t('about.subtitle')}
          </p>
          <p className="text-lg md:text-xl lg:text-2xl drop-shadow-md opacity-90">
            {t('about.company.name')}
          </p>
          
          
          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}