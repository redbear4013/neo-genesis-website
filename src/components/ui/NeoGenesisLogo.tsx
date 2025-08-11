import React from 'react';
import Image from 'next/image';

interface NeoGenesisLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

const NeoGenesisLogo: React.FC<NeoGenesisLogoProps> = ({ className = '', size = 'md' }) => {
  const sizeClasses = {
    sm: 'w-36 h-36',
    md: 'w-54 h-54',
    lg: 'w-72 h-72',
    xl: 'w-90 h-90',
  };

  return (
    <div className={`${sizeClasses[size]} ${className} relative`}>
      <Image
        src="/images/COMPANY LOGO FINAL.png"
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