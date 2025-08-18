'use client';

import { useRef, useEffect, useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

interface VideoHeroProps {
  videoSrc?: string;
  videoSources?: { src: string; type: string }[];
  fallbackImage?: string;
  height?: string;
}

export default function VideoHero({ 
  videoSrc,
  videoSources,
  fallbackImage = '/images/hero/Bridge1.jpg',
  height = 'h-screen'
}: VideoHeroProps) {
  const { t } = useLanguage();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [showVideo, setShowVideo] = useState(true);
  const [videoError, setVideoError] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (video && (videoSrc || videoSources)) {
      const handleVideoError = () => {
        console.log('Video failed to load, using fallback image');
        setVideoError(true);
        setShowVideo(false);
      };

      const handleVideoLoad = () => {
        console.log('Video loaded successfully');
        setVideoError(false);
        setShowVideo(true);
      };

      // Add event listeners
      video.addEventListener('error', handleVideoError);
      video.addEventListener('loadeddata', handleVideoLoad);
      video.addEventListener('canplay', handleVideoLoad);

      // Try to play the video
      const playVideo = async () => {
        try {
          await video.play();
          console.log('Video is playing');
        } catch (error) {
          console.log('Auto-play was prevented or video failed:', error);
          handleVideoError();
        }
      };

      // Small delay to ensure video element is ready
      const timer = setTimeout(playVideo, 100);

      return () => {
        clearTimeout(timer);
        video.removeEventListener('error', handleVideoError);
        video.removeEventListener('loadeddata', handleVideoLoad);
        video.removeEventListener('canplay', handleVideoLoad);
      };
    } else {
      // No video source provided, show fallback
      setShowVideo(false);
      setVideoError(true);
    }
  }, [videoSrc, videoSources]);

  return (
    <div className={`relative ${height} overflow-hidden`}>
      {/* Fallback Background Image */}
      <div 
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('${fallbackImage}')` }}
      ></div>
      
      {/* Video Background */}
      {showVideo && !videoError && (
        <video
          ref={videoRef}
          className="absolute top-0 left-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          poster={fallbackImage}
          preload="metadata"
        >
          {videoSources ? (
            videoSources.map((source, index) => (
              <source key={index} src={source.src} type={source.type} />
            ))
          ) : videoSrc ? (
            <>
              <source src={videoSrc} type="video/mp4" />
              <source src={videoSrc.replace('.mp4', '.webm')} type="video/webm" />
              <source src={videoSrc.replace('.mp4', '.ogg')} type="video/ogg" />
            </>
          ) : null}
          Your browser does not support the video tag.
        </video>
      )}

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      {/* Content Overlay */}
      <div className="relative z-10 flex items-center justify-center h-full text-white text-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in-up drop-shadow-lg">
            {t('about.title')}
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl mb-4 animate-fade-in-up drop-shadow-md">
            {t('about.subtitle')}
          </p>
          <p className="text-lg md:text-xl lg:text-2xl animate-fade-in-up drop-shadow-md opacity-90">
            {t('about.company.name')}
          </p>
          
          {/* Debug info (remove in production) */}
          {process.env.NODE_ENV === 'development' && (
            <div className="absolute top-4 left-4 text-xs bg-black bg-opacity-50 p-2 rounded">
              Video Status: {videoError ? 'Error' : showVideo ? 'Playing' : 'Loading'}
            </div>
          )}
          
          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out;
        }
        
        .animate-fade-in-up:nth-child(2) {
          animation-delay: 0.3s;
          animation-fill-mode: both;
        }
        
        .animate-fade-in-up:nth-child(3) {
          animation-delay: 0.6s;
          animation-fill-mode: both;
        }
      `}</style>
    </div>
  );
}