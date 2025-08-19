'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Menu, X, Languages } from 'lucide-react';
import NeoGenesisLogo from './ui/NeoGenesisLogo';
import { useLanguage } from '@/contexts/LanguageContext';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const router = useRouter();

  const handleMobileNavClick = (href: string, name: string) => {
    console.log('Navigating to:', href, name);
    setIsMenuOpen(false);
    // Use Next.js router for navigation
    router.push(href);
  };

  const navigation = [
    { name: t('nav.home'), href: '/' },
    { name: t('nav.about'), href: '/about' },
    { name: t('nav.services'), href: '/services' },
    { name: t('nav.projects'), href: '/projects' },
    { name: t('nav.bim'), href: '/bim' },
    { name: t('nav.contact'), href: '/contact' },
  ];

  const toggleLanguage = (lang: 'en' | 'zh') => {
    setLanguage(lang);
  };

  return (
    <header className="bg-neo-dark-gray text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center hover:opacity-80 transition-opacity">
            <NeoGenesisLogo size="lg" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8" style={{ marginLeft: '12pt' }}>
            <nav className="flex space-x-8">
              {navigation.map((item, index) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-300 hover:text-neo-teal transition-colors duration-200 font-medium relative z-10 px-2 py-1"
                  style={{ 
                    marginLeft: index === 0 ? '12pt' : '0',
                    paddingLeft: index === 0 ? '12pt' : '8px'
                  }}
                  onClick={() => {
                    console.log('Desktop nav clicked:', item.name, item.href);
                    setIsLangOpen(false);
                  }}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Language Toggle - Desktop */}
            <button
              onClick={() => toggleLanguage(language === 'en' ? 'zh' : 'en')}
              className="flex items-center space-x-2 p-2 rounded-md text-gray-300 hover:text-neo-teal hover:bg-neo-gray transition-colors"
            >
              <span className="text-lg">🌐</span>
              <span className="text-sm font-medium">
                {language === 'en' ? 'EN' : '中'}
              </span>
            </button>
          </div>

          {/* Mobile menu and language buttons */}
          <div className="lg:hidden flex items-center space-x-2">
            {/* Language Toggle - Mobile */}
            <button
              onClick={() => toggleLanguage(language === 'en' ? 'zh' : 'en')}
              className="flex items-center p-2 rounded-md text-gray-300 hover:text-white hover:bg-neo-gray transition-colors"
            >
              <span className="text-base mr-1">🌐</span>
              <span className="text-sm font-medium">
                {language === 'en' ? 'EN' : '中'}
              </span>
            </button>

            {/* Mobile menu button */}
            <button
              className="p-2 rounded-md text-gray-300 hover:text-white hover:bg-neo-gray transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-neo-gray">
            <nav className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <button
                  key={item.name}
                  className="text-gray-300 hover:text-neo-teal transition-colors duration-200 font-medium py-2 block px-0 w-full"
                  style={{ textAlign: 'right' }}
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    console.log('Mobile nav clicked:', item.name, item.href);
                    handleMobileNavClick(item.href, item.name);
                  }}
                >
                  {item.name}
                </button>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;