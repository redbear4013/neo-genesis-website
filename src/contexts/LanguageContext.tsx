'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

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
    'services.structural.desc': 'Expert structural engineering consultation for projects of all scales, ensuring safety and compliance with international standards.',
    'services.structural.list1': 'Structural Analysis',
    'services.structural.list2': 'Foundation Design',
    'services.structural.list3': 'Seismic Assessment',
    'services.inspection': 'Structural Inspection and QA/QC',
    'services.inspection.desc': 'Comprehensive quality assurance, quality control, and inspection services ensuring structural integrity and regulatory compliance.',
    'services.inspection.list1': 'Construction Monitoring',
    'services.inspection.list2': 'Material Testing',
    'services.inspection.list3': 'Quality Control',
    'services.inspection.list4': 'Safety Inspections',
    'services.inspection.list5': 'Standards Compliance',
    'services.construction': 'Construction Management',
    'services.construction.desc': 'End-to-end project management services from planning to completion, ensuring timely and budget-conscious delivery.',
    'services.construction.list1': 'Project Planning',
    'services.construction.list2': 'Resource Management',
    'services.construction.list3': 'Timeline Coordination',
    'services.permits': 'Building Department Submission',
    'services.permits.desc': 'Professional handling of all regulatory submissions and approvals across multiple jurisdictions.',
    'services.permits.list1': 'Permit Applications',
    'services.permits.list2': 'Regulatory Compliance',
    'services.permits.list3': 'Documentation Preparation',
    'services.bim': 'BIM Services',
    'services.bim.desc': 'Advanced Building Information Modeling technology for superior project visualization and coordination.',
    'services.bim.list1': '3D Modeling',
    'services.bim.list2': 'Clash Detection',
    'services.bim.list3': 'Project Visualization',
    'services.exhibition': 'Exhibition & Trade Show Construction',
    'services.exhibition.desc': 'Specialized expertise in large-scale exhibition and entertainment venue construction and modifications.',
    'services.exhibition.list1': 'Event Structures',
    'services.exhibition.list2': 'Temporary Installations',
    'services.exhibition.list3': 'Trade Show Design',
    'services.cta.title': 'Ready to Start Your Project?',
    'services.cta.description': 'Contact our expert team to discuss how we can bring your vision to life.',
    'services.cta.contact': 'Get in Touch',
    'services.home.title': 'Our Services',
    'services.home.subtitle': 'We provide comprehensive engineering and construction services with expertise spanning multiple countries and project types, from casino developments to government buildings.',
    'services.home.learnMore': 'Learn More',
    'services.home.customSolution': 'Need a Custom Solution?',
    'services.home.customDescription': 'Every project is unique. Let us work with you to develop a tailored approach that meets your specific requirements and exceeds your expectations.',
    'services.home.discussProject': 'Discuss Your Project',
    
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
    'projects.home.title': 'Project Portfolio',
    'projects.home.subtitle': 'Showcasing our expertise across diverse project types, from luxury casino developments to government buildings and commercial renovations.',
    
    // Global Offices
    'global.title': 'Global Presence',
    'global.subtitle': 'With offices across Asia-Pacific and the United States, we provide localized expertise and international standards to clients worldwide.',
    'projects.modal.overview': 'Project Overview',
    'projects.modal.scope': 'Project Scope',
    'projects.modal.services': 'Services Provided',
    'projects.modal.contact': 'Contact Us',
    'projects.modal.download': 'Download Info',
    
    // About
    'about.title': 'About NEO GENESIS',
    'about.subtitle': 'A NEW GENERATION OF INTEGRATED ENGINEERING',
    'about.company.name': 'Neo Genesis Construction & Engineering Co., Ltd',
    'about.story.title': 'Our Story',
    'about.story.p1': 'Neo Genesis is an innovative company with a broad range of professional specialties striving to forge a new standard in this evolving society. Established in 2015, with international exposure in Asia Pacific, the United States, China and South East Asia, Neo Genesis has a multi-disciplinary team of professionals who have experience in different project types and scales.',
    'about.story.p2': 'Each individual in our team is always striving for the highest standard to deliver sound solutions to our clients.',
    'about.story.p3': 'Neo Genesis provides full spectrum of design, engineering, planning and advisory services across sectors including: integrated resort, mixed commercial, residential, office, hotel, schools, hospital and gaming developments.',
    'about.mission.title': 'Our Mission',
    'about.mission.content': 'To bring the best value, optimal solutions, better quality livings to the communities – now and for the future.',
    'about.vision.title': 'Vision',
    'about.vision.content': 'To watch our works come to fruition world-wide and inspire the next generation of engineers and builders',
    'about.technical.title': 'Technical Excellence',
    'about.technical.p1': 'Our technical excellence is acknowledged by prestigious institutions such as the United States NCEES, Hong Kong Institution of Engineers (HKIE), Institution of Civil Engineers (ICE), and many others.',
    'about.technical.p2': 'We are well equipped for any related services such as Registered Structural Engineers, Third-party Peer Reviewers, Independent Checking Engineers, Site Resident Engineers and Site Inspectors for any scale of new project or A&A works as requested by our clients.',
    'about.services.title': 'Our Services',
    'about.services.content': 'We also provide some other related services such as Registered Structural Engineers and Authorized Persons work in relation to alterations and additions works and expert services from time to time as requested by our clients.',
    'about.values.title': 'Our Core Values',
    'about.values.innovation': 'Innovation',
    'about.values.innovation.desc': 'Embracing cutting-edge technology and methodologies to deliver superior results.',
    'about.values.integrity': 'Integrity',
    'about.values.integrity.desc': 'Building trust through transparency, honesty, and ethical business practices.',
    'about.values.excellence': 'Excellence',
    'about.values.excellence.desc': 'Pursuing perfection in every project through meticulous attention to detail.',
    'about.global.title': 'Global Presence',
    'about.viewDetails': 'View Details →',
    
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
    'contact.visit.description': 'Our main office is located in Macau at Rua dos Curtidores. No. 29E EDF. YU WAH GARDEN. GF Unit L',
    'contact.office.macau.address': 'Rua dos Curtidores. No. 29E EDF. YU WAH GARDEN. GF Unit L',
    'contact.office.china.title': 'China Office',
    'contact.office.china.address': 'Hengqin MCC Headquarters Complex Hr. 27 Room 04',
    
    // BIM
    'bim.title': 'BIM Technology',
    'bim.subtitle': 'Building Information Modeling solutions for the future of construction',
    'bim.what.title': 'What is BIM?',
    'bim.what.description': 'Building Information Modeling (BIM) is a digital representation of physical and functional characteristics of a building. It serves as a shared knowledge resource for information about a facility, forming a reliable basis for decisions during its life-cycle from earliest conception to demolition.',
    'bim.action.title': 'BIM in Action',
    'bim.action.modeling': '3D Structural Modeling',
    'bim.action.modeling.desc': 'Detailed 3D models providing comprehensive visualization of structural elements and their relationships.',
    'bim.action.coordination': 'Multi-Discipline Coordination',
    'bim.action.coordination.desc': 'Integrated coordination between architectural, structural, and MEP systems for optimal project delivery.',
    'bim.action.analysis': 'Advanced Analysis',
    'bim.action.analysis.desc': 'Sophisticated analysis tools for structural performance evaluation and optimization.',
    'bim.action.documentation': 'Technical Documentation',
    'bim.action.documentation.desc': 'Automated generation of technical drawings and documentation from 3D models.',
    'bim.services.title': 'Our BIM Services',
    'bim.services.implementation': 'BIM Implementation',
    'bim.services.implementation.strategy': 'BIM Strategy Development',
    'bim.services.implementation.software': 'Software Selection & Setup',
    'bim.services.implementation.training': 'Team Training & Support',
    'bim.services.implementation.process': 'Process Standardization',
    'bim.services.implementation.quality': 'Quality Control Procedures',
    'bim.services.modeling': 'BIM Modeling Services',
    'bim.services.modeling.architectural': 'Architectural BIM Modeling',
    'bim.services.modeling.structural': 'Structural BIM Modeling',
    'bim.services.modeling.mep': 'MEP BIM Coordination',
    'bim.services.modeling.clash': 'Clash Detection & Resolution',
    'bim.services.modeling.asbuilt': 'As-Built Documentation',
    'bim.benefits.title': 'Benefits of BIM',
    'bim.benefits.efficiency': 'Improved Efficiency',
    'bim.benefits.efficiency.desc': 'Streamlined workflows and reduced rework',
    'bim.benefits.collaboration': 'Better Collaboration',
    'bim.benefits.collaboration.desc': 'Enhanced team coordination and communication',
    'bim.benefits.cost': 'Cost Savings',
    'bim.benefits.cost.desc': 'Reduced errors and optimized resource allocation',
    'bim.benefits.quality': 'Quality Enhancement',
    'bim.benefits.quality.desc': 'Higher precision and fewer construction issues',
    'bim.tools.title': 'BIM Software & Tools',
    'bim.tools.design': 'Design & Modeling',
    'bim.tools.collaboration': 'Collaboration',
    'bim.tools.analysis': 'Analysis',
    'bim.cta.title': 'Ready to Transform Your Projects with BIM?',
    'bim.cta.description': 'Contact our BIM specialists to discuss how we can optimize your construction process.',
    'bim.cta.contact': 'Get BIM Consultation',
    
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
    'services.structural.desc': '為各種規模的項目提供專業結構工程諮詢，確保安全並符合國際標準。',
    'services.structural.list1': '結構分析',
    'services.structural.list2': '基礎設計',
    'services.structural.list3': '地震評估',
    'services.inspection': '結構檢查和品質保證/品質控制',
    'services.inspection.desc': '全面的品質保證、品質控制和檢查服務，確保結構完整性和法規合規性。',
    'services.inspection.list1': '施工監控',
    'services.inspection.list2': '材料測試',
    'services.inspection.list3': '品質控制',
    'services.inspection.list4': '安全檢查',
    'services.inspection.list5': '標準合規性',
    'services.construction': '施工管理',
    'services.construction.desc': '從規劃到完工的端到端項目管理服務，確保及時且符合預算的交付。',
    'services.construction.list1': '項目規劃',
    'services.construction.list2': '資源管理',
    'services.construction.list3': '時間表協調',
    'services.permits': '建築部門申請',
    'services.permits.desc': '專業處理多個司法管轄區的所有監管提交和批准。',
    'services.permits.list1': '許可證申請',
    'services.permits.list2': '法規合規性',
    'services.permits.list3': '文件準備',
    'services.bim': 'BIM服務',
    'services.bim.desc': '先進的建築資訊建模技術，實現卓越的項目可視化和協調。',
    'services.bim.list1': '3D建模',
    'services.bim.list2': '衝突檢測',
    'services.bim.list3': '項目可視化',
    'services.exhibition': '展覽和貿易展覽建設',
    'services.exhibition.desc': '在大型展覽和娛樂場所建設及改造方面的專業專長。',
    'services.exhibition.list1': '活動結構',
    'services.exhibition.list2': '臨時裝置',
    'services.exhibition.list3': '貿易展覽設計',
    'services.cta.title': '準備開始您的項目？',
    'services.cta.description': '聯繫我們的專家團隊，討論如何實現您的願景。',
    'services.cta.contact': '聯絡我們',
    'services.home.title': '我們的服務',
    'services.home.subtitle': '我們提供全面的工程和建設服務，專業知識涵蓋多個國家和項目類型，從賭場開發到政府建築。',
    'services.home.learnMore': '了解更多',
    'services.home.customSolution': '需要定制解決方案？',
    'services.home.customDescription': '每個項目都是獨特的。讓我們與您合作開發一個定制的方法，滿足您的具體要求並超越您的期望。',
    'services.home.discussProject': '討論您的項目',
    
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
    'projects.home.title': '項目作品集',
    'projects.home.subtitle': '展示我們在不同項目類型的專業知識，從豪華賭場開發到政府建築和商業翻新。',
    
    // Global Offices
    'global.title': '全球業務',
    'global.subtitle': '我們在亞太地區和美國設有辦事處，為全球客戶提供本土化專業知識和國際標準。',
    'projects.modal.overview': '項目概覽',
    'projects.modal.scope': '項目範圍',
    'projects.modal.services': '提供的服務',
    'projects.modal.contact': '聯絡我們',
    'projects.modal.download': '下載資訊',
    
    // About
    'about.title': '關於新創世',
    'about.subtitle': '新創世 ‧一個具有創新思維的綜合工程顧問',
    'about.company.name': '新創世建築工程有限公司',
    'about.story.title': '我們的故事',
    'about.story.p1': '新創世建築工程有限公司於2015年創辦，由一群擁有新思維專業人士，努力在工程領域開拓的新標準。近年活躍於亞太地區、美國、中國和東南亞並擁有多元化的國際經驗，新創世的專業團隊在不同規模的項目類型上有豐富的經驗。',
    'about.story.p2': '我們團隊中的每一個人都在努力追求最高的標準，為客戶提供完善的解決方案。',
    'about.story.p3': '新創世提供全方位的設計、工程管理、規劃等各類型的諮詢服務，項目包括：綜合體度假村、混合商業、住宅、辦公、酒店、學校、醫院和博彩業開發。',
    'about.mission.title': '我們的使命',
    'about.mission.content': '為社區帶來最佳價值、最優解決方案、更好的生活品質——現在和未來。',
    'about.vision.title': '願景',
    'about.vision.content': '見證我們的作品在世界各地開花結果，並啟發下一代工程師和建築師',
    'about.technical.title': '技術卓越',
    'about.technical.p1': '我們的團隊擁有多國專業認可的認證，其中包括美國(NCEES)、香港工程師學會(HKIE)、英國土木工程師學會(ICE)等著名機構的認可。',
    'about.technical.p2': '根據客戶要求，我們可以為任何規模的新項目或改建加建工程提供註冊結構工程師、第三方審核員、獨立檢查工程師、駐現場工程師和現場檢查驗收員等相關服務。',
    'about.services.title': '我們的服務',
    'about.services.content': '我們還提供其他相關服務，如註冊結構工程師和授權人員在改建加建工程方面的工作，以及根據客戶要求不時提供的專家服務。',
    'about.values.title': '我們的核心價值',
    'about.values.innovation': '創新',
    'about.values.innovation.desc': '擁抱尖端技術和方法論，提供卓越成果。',
    'about.values.integrity': '誠信',
    'about.values.integrity.desc': '通過透明、誠實和道德商業實踐建立信任。',
    'about.values.excellence': '卓越',
    'about.values.excellence.desc': '通過對細節的一絲不苟追求每個項目的完美。',
    'about.global.title': '全球業務',
    'about.viewDetails': '查看詳情 →',
    
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
    'contact.visit.description': '我們的總辦事處位於澳門涼水街29號E裕華花園大廈地下L座',
    'contact.office.macau.address': '澳門涼水街29號E裕華花園大廈地下L座',
    'contact.office.china.title': '珠海辦事處',
    'contact.office.china.address': '横琴總部大廈2704\n珠海橫琴',
    
    // BIM
    'bim.title': 'BIM技術',
    'bim.subtitle': '為建築業未來的建築資訊模型解決方案',
    'bim.what.title': '什麼是BIM？',
    'bim.what.description': '建築資訊建模（BIM）是建築物物理和功能特性的數字表示。它作為有關建築設施資訊的共享知識資源，為從最初概念到拆除的整個生命週期中的決策提供可靠基礎。',
    'bim.action.title': 'BIM實際應用',
    'bim.action.modeling': '3D結構建模',
    'bim.action.modeling.desc': '詳細的3D模型，提供結構元素及其關係的全面可視化。',
    'bim.action.coordination': '多學科協調',
    'bim.action.coordination.desc': '建築、結構和機電系統之間的整合協調，實現最佳項目交付。',
    'bim.action.analysis': '高級分析',
    'bim.action.analysis.desc': '用於結構性能評估和優化的先進分析工具。',
    'bim.action.documentation': '技術文件',
    'bim.action.documentation.desc': '從3D模型自動生成技術圖紙和文檔。',
    'bim.services.title': '我們的BIM服務',
    'bim.services.implementation': 'BIM實施',
    'bim.services.implementation.strategy': 'BIM策略開發',
    'bim.services.implementation.software': '軟件選擇和設置',
    'bim.services.implementation.training': '團隊培訓和支持',
    'bim.services.implementation.process': '流程標準化',
    'bim.services.implementation.quality': '質量控制程序',
    'bim.services.modeling': 'BIM建模服務',
    'bim.services.modeling.architectural': '建築BIM建模',
    'bim.services.modeling.structural': '結構BIM建模',
    'bim.services.modeling.mep': '機電BIM協調',
    'bim.services.modeling.clash': '衝突檢測和解決',
    'bim.services.modeling.asbuilt': '竣工文檔',
    'bim.benefits.title': 'BIM的優勢',
    'bim.benefits.efficiency': '提高效率',
    'bim.benefits.efficiency.desc': '簡化工作流程和減少返工',
    'bim.benefits.collaboration': '更好的協作',
    'bim.benefits.collaboration.desc': '增強團隊協調和溝通',
    'bim.benefits.cost': '成本節約',
    'bim.benefits.cost.desc': '減少錯誤和優化資源配置',
    'bim.benefits.quality': '質量提升',
    'bim.benefits.quality.desc': '更高精度和更少施工問題',
    'bim.tools.title': 'BIM軟件和工具',
    'bim.tools.design': '設計和建模',
    'bim.tools.collaboration': '協作',
    'bim.tools.analysis': '分析',
    'bim.cta.title': '準備用BIM改變您的項目？',
    'bim.cta.description': '聯繫我們的BIM專家，討論如何優化您的建設過程。',
    'bim.cta.contact': '獲得BIM諮詢',
    
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
  const [isLoaded, setIsLoaded] = useState(false);

  // Load language from localStorage on component mount
  useEffect(() => {
    const savedLanguage = localStorage.getItem('neo-genesis-language') as Language;
    if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'zh')) {
      setLanguage(savedLanguage);
    }
    setIsLoaded(true);
  }, []);

  // Save language to localStorage when it changes
  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('neo-genesis-language', lang);
  };

  const t = (key: string): string => {
    try {
      const translation = translations[language]?.[key as keyof typeof translations['en']];
      return translation || translations['en']?.[key as keyof typeof translations['en']] || key;
    } catch {
      console.warn(`Translation key "${key}" not found for language "${language}"`);
      return key;
    }
  };

  // Don't render until language is loaded from localStorage
  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};