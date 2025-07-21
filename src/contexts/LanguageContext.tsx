'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'zh';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Header
    'nav.home': 'Home',
    'nav.about': 'About Us',
    'nav.services': 'Services',
    'nav.projects': 'Projects',
    'nav.bim': 'BIM Technology',
    'nav.contact': 'Contact',
    
    // Language toggle
    'lang.english': 'English',
    'lang.chinese': '中文',
    'lang.current': 'EN',
    
    // Hero section
    'hero.founded': 'Founded in 2015',
    'hero.title': 'NEO GENESIS',
    'hero.subtitle': 'Construction & Engineering',
    'hero.description': 'Our firm strives to produce practical, buildable and economic designs. With expertise in engineering, construction and inspection across China, Macau, USA, and Hong Kong, we provide excellent design solutions that satisfy diverse client needs.',
    'hero.viewProjects': 'View Our Projects',
    'hero.contactUs': 'Contact Us',
    'hero.yearsExp': 'Years Experience',
    'hero.projectsCompleted': 'Projects Completed',
    'hero.countries': 'Countries',
    'hero.bimLeader': 'BIM Technology Leader',
    'hero.bimDescription': 'Early adopter since 2015, we leverage cutting-edge BIM technology for superior project visualization and management.',
    
    // Call to action
    'cta.title': 'Ready to Build Your Vision?',
    'cta.description': 'Partner with NEO GENESIS for your next construction or engineering project. Our experienced team is ready to deliver exceptional results.',
    'cta.getStarted': 'Get Started Today',
    'cta.viewWork': 'View Our Work',
  },
  zh: {
    // Header
    'nav.home': '首頁',
    'nav.about': '關於我們',
    'nav.services': '服務',
    'nav.projects': '項目',
    'nav.bim': 'BIM技術',
    'nav.contact': '聯絡我們',
    
    // Language toggle
    'lang.english': 'English',
    'lang.chinese': '繁體中文',
    'lang.current': '繁',
    
    // Hero section
    'hero.founded': '成立於2015年',
    'hero.title': '新創世紀',
    'hero.subtitle': '建築工程',
    'hero.description': '我們公司致力於提供實用、可建造和經濟的設計。憑藉在中國、澳門、美國和香港的工程、建築和檢驗專業知識，我們提供滿足不同客戶需求的優秀設計解決方案。',
    'hero.viewProjects': '查看項目',
    'hero.contactUs': '聯絡我們',
    'hero.yearsExp': '年經驗',
    'hero.projectsCompleted': '完成項目',
    'hero.countries': '個國家',
    'hero.bimLeader': 'BIM技術領導者',
    'hero.bimDescription': '自2015年以來的早期採用者，我們利用尖端的BIM技術實現卓越的項目可視化和管理。',
    
    // Call to action
    'cta.title': '準備實現您的願景？',
    'cta.description': '與新創世紀合作您的下一個建築或工程項目。我們經驗豐富的團隊隨時準備交付卓越的成果。',
    'cta.getStarted': '立即開始',
    'cta.viewWork': '查看我們的工作',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};