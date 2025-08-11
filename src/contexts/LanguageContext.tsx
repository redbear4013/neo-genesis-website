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
    
    // Footer
    'footer.services': 'Our Services',
    'footer.contactInfo': 'Contact Information',
    'footer.copyright': '© 2025 Neo-Genesis Construction & Engineering Co., Ltd. All rights reserved.',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Service',
    'footer.contactUs': 'Contact Us',
    
    // Services
    'services.title': 'Our Services',
    'services.subtitle': 'Comprehensive engineering solutions tailored to your project needs',
    'services.structural': 'Structural Consultancy Services',
    'services.inspections': 'Special Inspections',
    'services.qaqc': 'QA/QC For Structural Element',
    'services.construction': 'Construction Management',
    'services.permits': 'Building Department Submission',
    'services.bim': 'BIM Services',
    'services.customSolution': 'Need a Custom Solution?',
    'services.customDescription': 'Our team can design tailored engineering solutions for your unique project requirements.',
    'services.getQuote': 'Get Quote',
    
    // Projects
    'projects.title': 'Our Projects',
    'projects.subtitle': 'Showcasing our expertise across diverse project types, from luxury casino developments to government buildings and commercial renovations.',
    'projects.stats.completed': 'Projects Completed',
    'projects.stats.countries': 'Countries',
    'projects.stats.experience': 'Years Experience',
    'projects.stats.engineers': 'Partnerships',
    'projects.categories.all': 'All Projects',
    'projects.categories.casino': 'Casino & Resort',
    'projects.categories.commercial': 'Commercial',
    'projects.categories.government': 'Government',
    'projects.categories.aa': 'A&A Projects',
    'projects.viewDetails': 'View Project Details',
    'projects.cta.title': 'Have a Project in Mind?',
    'projects.cta.description': 'From concept to completion, we bring expertise and innovation to every project. Let\'s discuss how we can bring your vision to life.',
    'projects.cta.start': 'Start Your Project',
    'projects.cta.download': 'Download Portfolio',
    'projects.modal.overview': 'Project Overview',
    'projects.modal.scope': 'Project Scope',
    'projects.modal.services': 'Services Provided',
    'projects.modal.contact': 'Contact Us',
    'projects.modal.download': 'Download Info',
    
    // About
    'about.title': 'About NEO GENESIS',
    'about.subtitle': 'Construction & Engineering Co., Ltd',
    'about.story.title': 'Our Story',
    'about.mission.title': 'Our Mission',
    'about.values.title': 'Our Core Values',
    'about.global.title': 'Global Presence',
    
    // Contact
    'contact.title': 'Contact Us',
    'contact.subtitle': 'Get in touch with our team to discuss your project needs',
    'contact.form.title': 'Send us a Message',
    'contact.form.name': 'Full Name',
    'contact.form.email': 'Email Address',
    'contact.form.company': 'Company',
    'contact.form.phone': 'Phone Number',
    'contact.form.subject': 'Subject',
    'contact.form.message': 'Message',
    'contact.form.submit': 'Send Message',
    'contact.office.main': 'Main Office',
    'contact.office.address': 'Address',
    'contact.office.phone': 'Phone',
    'contact.office.email': 'Email',
    'contact.office.hours': 'Business Hours',
    'contact.office.weekdays': 'Monday - Friday: 8:00 AM - 6:00 PM CST',
    'contact.office.saturday': 'Saturday: 9:00 AM - 1:00 PM CST',
    'contact.visit.title': 'Visit Our Main Office',
    'contact.visit.description': 'Our main office is located in Macau at Rua dos Curtidores. No. 29 EDF. YU WAH GARDEN. GF Unit L',
    
    // BIM
    'bim.title': 'BIM Technology',
    'bim.subtitle': 'Building Information Modeling solutions for the future of construction',
    
    // Common
    'common.readMore': 'Read More',
    'common.learnMore': 'Learn More',
    'common.getStarted': 'Get Started',
    'common.viewAll': 'View All',
    'common.close': 'Close',
    'common.next': 'Next',
    'common.previous': 'Previous',
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
    'hero.title': '新創世',
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
    'cta.description': '與新創世合作您的下一個建築或工程項目。我們經驗豐富的團隊隨時準備交付卓越的成果。',
    'cta.getStarted': '立即開始',
    'cta.viewWork': '查看我們的工作',
    
    // Footer
    'footer.services': '我們的服務',
    'footer.contactInfo': '聯絡資訊',
    'footer.copyright': '© 2025 新創世建築工程有限公司 版權所有',
    'footer.privacy': '私隱政策',
    'footer.terms': '服務條款',
    'footer.contactUs': '聯絡我們',
    
    // Services
    'services.title': '我們的服務',
    'services.subtitle': '為您的項目需求量身定制的綜合工程解決方案',
    'services.structural': '結構顧問服務',
    'services.inspections': '特殊檢驗',
    'services.qaqc': '結構元素品質保證/品質控制',
    'services.construction': '施工管理',
    'services.permits': '建築部門申請',
    'services.bim': 'BIM服務',
    'services.customSolution': '需要定制解決方案？',
    'services.customDescription': '我們的團隊可以為您的獨特項目需求設計量身定制的工程解決方案。',
    'services.getQuote': '獲取報價',
    
    // Projects
    'projects.title': '我們的項目',
    'projects.subtitle': '展示我們在不同項目類型的專業知識，從豪華賭場開發到政府建築和商業翻新。',
    'projects.stats.completed': '完成項目',
    'projects.stats.countries': '國家',
    'projects.stats.experience': '年經驗',
    'projects.stats.engineers': '合作夥伴',
    'projects.categories.all': '所有項目',
    'projects.categories.casino': '賭場及度假村',
    'projects.categories.commercial': '商業項目',
    'projects.categories.government': '政府項目',
    'projects.categories.aa': '增建及改動項目',
    'projects.viewDetails': '查看項目詳情',
    'projects.cta.title': '有項目構思？',
    'projects.cta.description': '從概念到完工，我們為每個項目帶來專業知識和創新。讓我們討論如何實現您的願景。',
    'projects.cta.start': '啟動您的項目',
    'projects.cta.download': '下載作品集',
    'projects.modal.overview': '項目概覽',
    'projects.modal.scope': '項目範圍',
    'projects.modal.services': '提供的服務',
    'projects.modal.contact': '聯絡我們',
    'projects.modal.download': '下載資訊',
    
    // About
    'about.title': '關於新創世',
    'about.subtitle': '建築工程有限公司',
    'about.story.title': '我們的故事',
    'about.mission.title': '我們的使命',
    'about.values.title': '我們的核心價值',
    'about.global.title': '全球業務',
    
    // Contact
    'contact.title': '聯絡我們',
    'contact.subtitle': '與我們的團隊聯繫，討論您的項目需求',
    'contact.form.title': '發送信息給我們',
    'contact.form.name': '全名',
    'contact.form.email': '電子郵件地址',
    'contact.form.company': '公司',
    'contact.form.phone': '電話號碼',
    'contact.form.subject': '主題',
    'contact.form.message': '信息',
    'contact.form.submit': '發送信息',
    'contact.office.main': '總辦事處',
    'contact.office.address': '地址',
    'contact.office.phone': '電話',
    'contact.office.email': '電子郵件',
    'contact.office.hours': '營業時間',
    'contact.office.weekdays': '星期一至五：上午8:00 - 下午6:00',
    'contact.office.saturday': '星期六：上午9:00 - 下午1:00',
    'contact.visit.title': '參觀我們的總辦公室',
    'contact.visit.description': '我們的總辦事處位於澳門氹仔黑沙環圍街29號裕華花園地下L舖',
    
    // BIM
    'bim.title': 'BIM技術',
    'bim.subtitle': '為建築業未來的建築資訊模型解決方案',
    
    // Common
    'common.readMore': '閱讀更多',
    'common.learnMore': '了解更多',
    'common.getStarted': '開始',
    'common.viewAll': '查看全部',
    'common.close': '關閉',
    'common.next': '下一個',
    'common.previous': '上一個',
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
    try {
      const translation = translations[language]?.[key as keyof typeof translations['en']];
      return translation || translations['en']?.[key as keyof typeof translations['en']] || key;
    } catch {
      console.warn(`Translation key "${key}" not found for language "${language}"`);
      return key;
    }
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};