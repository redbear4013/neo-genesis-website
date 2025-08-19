import React from 'react';
import Image from 'next/image';

interface NeoGenesisLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

const NeoGenesisLogo: React.FC<NeoGenesisLogoProps> = ({ className = '', size = 'md' }) => {
  const sizeClasses = {
    sm: 'w-40 h-12',
    md: 'w-60 h-16',
    lg: 'w-80 h-20',
    xl: 'w-96 h-24',
  };

  return (
    <div className={`${sizeClasses[size]} ${className} relative`}>
      <Image
        src="/images/COMPANY-LOGO-FINAL_web.png"
        alt="NEO GENESIS Logo"
        fill
        className="object-contain"
        style={{ transform: 'translateY(0px)' }}
        priority
      />
    </div>
  );
};

export default NeoGenesisLogo;