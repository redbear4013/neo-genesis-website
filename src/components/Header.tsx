'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Languages } from 'lucide-react';
import NeoGenesisLogo from './ui/NeoGenesisLogo';
import { useLanguage } from '@/contexts/LanguageContext';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

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
    setIsLangOpen(false);
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
          <div className="hidden lg:flex items-center space-x-8">
            <nav className="flex space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-300 hover:text-neo-teal transition-colors duration-200 font-medium"
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Language Toggle - Desktop */}
            <div className="relative">
              <button
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="flex items-center space-x-2 p-2 rounded-md text-gray-300 hover:text-neo-teal hover:bg-neo-gray transition-colors"
              >
                <Languages className="h-5 w-5" />
                <span className="text-sm font-medium">{t('lang.current')}</span>
              </button>
              
              {isLangOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
                  <button
                    onClick={() => toggleLanguage('en')}
                    className={`block w-full text-left px-4 py-2 text-sm transition-colors ${
                      language === 'en' 
                        ? 'bg-neo-teal text-white' 
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    {t('lang.english')}
                  </button>
                  <button
                    onClick={() => toggleLanguage('zh')}
                    className={`block w-full text-left px-4 py-2 text-sm transition-colors ${
                      language === 'zh' 
                        ? 'bg-neo-teal text-white' 
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    {t('lang.chinese')}
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Mobile menu and language buttons */}
          <div className="lg:hidden flex items-center space-x-2">
            {/* Language Toggle - Mobile */}
            <div className="relative">
              <button
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="p-2 rounded-md text-gray-300 hover:text-white hover:bg-neo-gray transition-colors"
              >
                <Languages className="h-5 w-5" />
              </button>
              
              {isLangOpen && (
                <div className="absolute right-0 mt-2 w-32 bg-white rounded-md shadow-lg py-1 z-50">
                  <button
                    onClick={() => toggleLanguage('en')}
                    className={`block w-full text-left px-3 py-2 text-sm transition-colors ${
                      language === 'en' 
                        ? 'bg-neo-teal text-white' 
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    EN
                  </button>
                  <button
                    onClick={() => toggleLanguage('zh')}
                    className={`block w-full text-left px-3 py-2 text-sm transition-colors ${
                      language === 'zh' 
                        ? 'bg-neo-teal text-white' 
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    中
                  </button>
                </div>
              )}
            </div>

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
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-300 hover:text-neo-teal transition-colors duration-200 font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;