'use client';

import { useLanguage } from '@/contexts/LanguageContext';

export default function Services() {
  const { t } = useLanguage();
  
  return (
    <div className="min-h-screen bg-neo-off-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-neo-dark-gray mb-6 animate-fade-in-up">
            {t('services.title')}
          </h1>
          <p className="text-xl text-neo-gray max-w-3xl mx-auto animate-fade-in-up">
            {t('services.subtitle')}
          </p>
        </div>

        {/* Main Services */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {/* Structural Consultancy Services */}
          <div className="bg-white rounded-lg shadow-lg p-8 animate-slide-in-left">
            <div className="text-4xl mb-4">🏢</div>
            <h2 className="text-2xl font-bold text-neo-dark-gray mb-4">{t('services.structural')}</h2>
            <p className="text-neo-gray mb-6">
              {t('services.structural.desc')}
            </p>
            <ul className="space-y-2 text-neo-gray">
              <li>• {t('services.structural.list1')}</li>
              <li>• {t('services.structural.list2')}</li>
              <li>• {t('services.structural.list3')}</li>
            </ul>
          </div>

          {/* Structural Inspection and QA/QC */}
          <div className="bg-white rounded-lg shadow-lg p-8 animate-fade-in-up">
            <div className="text-4xl mb-4">✅</div>
            <h2 className="text-2xl font-bold text-neo-dark-gray mb-4">{t('services.inspection')}</h2>
            <p className="text-neo-gray mb-6">
              {t('services.inspection.desc')}
            </p>
            <ul className="space-y-2 text-neo-gray">
              <li>• {t('services.inspection.list1')}</li>
              <li>• {t('services.inspection.list2')}</li>
              <li>• {t('services.inspection.list3')}</li>
              <li>• {t('services.inspection.list4')}</li>
              <li>• {t('services.inspection.list5')}</li>
            </ul>
          </div>

          {/* Construction Management */}
          <div className="bg-white rounded-lg shadow-lg p-8 animate-slide-in-left">
            <div className="text-4xl mb-4">⛑️</div>
            <h2 className="text-2xl font-bold text-neo-dark-gray mb-4">{t('services.construction')}</h2>
            <p className="text-neo-gray mb-6">
              {t('services.construction.desc')}
            </p>
            <ul className="space-y-2 text-neo-gray">
              <li>• {t('services.construction.list1')}</li>
              <li>• {t('services.construction.list2')}</li>
              <li>• {t('services.construction.list3')}</li>
            </ul>
          </div>

          {/* Building Department Submission */}
          <div className="bg-white rounded-lg shadow-lg p-8 animate-fade-in-up">
            <div className="text-4xl mb-4">📄</div>
            <h2 className="text-2xl font-bold text-neo-dark-gray mb-4">{t('services.permits')}</h2>
            <p className="text-neo-gray mb-6">
              {t('services.permits.desc')}
            </p>
            <ul className="space-y-2 text-neo-gray">
              <li>• {t('services.permits.list1')}</li>
              <li>• {t('services.permits.list2')}</li>
              <li>• {t('services.permits.list3')}</li>
            </ul>
          </div>

          {/* BIM Services */}
          <div className="bg-white rounded-lg shadow-lg p-8 animate-slide-in-left">
            <div className="text-4xl mb-4">📦</div>
            <h2 className="text-2xl font-bold text-neo-dark-gray mb-4">{t('services.bim')}</h2>
            <p className="text-neo-gray mb-6">
              {t('services.bim.desc')}
            </p>
            <ul className="space-y-2 text-neo-gray">
              <li>• {t('services.bim.list1')}</li>
              <li>• {t('services.bim.list2')}</li>
              <li>• {t('services.bim.list3')}</li>
            </ul>
          </div>

          {/* Exhibition & Trade Show Construction */}
          <div className="bg-white rounded-lg shadow-lg p-8 animate-fade-in-up">
            <div className="text-4xl mb-4">📅</div>
            <h2 className="text-2xl font-bold text-neo-dark-gray mb-4">{t('services.exhibition')}</h2>
            <p className="text-neo-gray mb-6">
              {t('services.exhibition.desc')}
            </p>
            <ul className="space-y-2 text-neo-gray">
              <li>• {t('services.exhibition.list1')}</li>
              <li>• {t('services.exhibition.list2')}</li>
              <li>• {t('services.exhibition.list3')}</li>
            </ul>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-neo-dark-gray text-white rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">{t('services.cta.title')}</h2>
          <p className="text-xl mb-6">
            {t('services.cta.description')}
          </p>
          <a href="/contact" className="inline-block bg-neo-teal hover:bg-neo-dark-teal px-8 py-3 rounded-lg font-semibold transition-colors">
            {t('services.cta.contact')}
          </a>
        </div>
      </div>
    </div>
  );
}