'use client';

import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';

export default function BIM() {
  const { t } = useLanguage();
  
  return (
    <div className="min-h-screen bg-neo-off-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-neo-dark-gray mb-6 animate-fade-in-up">
            {t('bim.title')}
          </h1>
          <p className="text-xl text-neo-gray max-w-3xl mx-auto animate-fade-in-up">
            {t('bim.subtitle')}
          </p>
        </div>

        {/* What is BIM */}
        <div className="mb-16">
          <div className="bg-white rounded-lg shadow-lg p-8 animate-fade-in-up">
            <h2 className="text-3xl font-bold text-neo-dark-gray mb-6 text-center">{t('bim.what.title')}</h2>
            <p className="text-neo-gray text-lg text-center max-w-4xl mx-auto">
              {t('bim.what.description')}
            </p>
          </div>
        </div>

        {/* BIM Images Showcase */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-neo-dark-gray text-center mb-12">{t('bim.action.title')}</h2>
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <Image 
                src="/images/bim/BIM1.png" 
                alt="BIM 3D Modeling Example"
                width={400}
                height={256}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-neo-dark-gray mb-3">{t('bim.action.modeling')}</h3>
                <p className="text-neo-gray">{t('bim.action.modeling.desc')}</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <Image 
                src="/images/bim/BIM2.png" 
                alt="BIM Coordination Example"
                width={400}
                height={256}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-neo-dark-gray mb-3">{t('bim.action.coordination')}</h3>
                <p className="text-neo-gray">{t('bim.action.coordination.desc')}</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <Image 
                src="/images/bim/BIM3.png" 
                alt="BIM Analysis Example"
                width={400}
                height={256}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-neo-dark-gray mb-3">{t('bim.action.analysis')}</h3>
                <p className="text-neo-gray">{t('bim.action.analysis.desc')}</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <Image 
                src="/images/bim/BIM4.png" 
                alt="BIM Documentation Example"
                width={400}
                height={256}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-neo-dark-gray mb-3">{t('bim.action.documentation')}</h3>
                <p className="text-neo-gray">{t('bim.action.documentation.desc')}</p>
              </div>
            </div>
          </div>
        </div>


        {/* Our BIM Services */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-neo-dark-gray text-center mb-12">{t('bim.services.title')}</h2>
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-neo-teal text-white rounded-lg p-8 animate-slide-in-left">
              <h3 className="text-2xl font-bold mb-4">{t('bim.services.implementation')}</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="mr-3">•</span>
                  <span>{t('bim.services.implementation.strategy')}</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3">•</span>
                  <span>{t('bim.services.implementation.software')}</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3">•</span>
                  <span>{t('bim.services.implementation.training')}</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3">•</span>
                  <span>{t('bim.services.implementation.process')}</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3">•</span>
                  <span>{t('bim.services.implementation.quality')}</span>
                </li>
              </ul>
            </div>
            <div className="bg-neo-dark-teal text-white rounded-lg p-8 animate-fade-in-up">
              <h3 className="text-2xl font-bold mb-4">{t('bim.services.modeling')}</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="mr-3">•</span>
                  <span>{t('bim.services.modeling.architectural')}</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3">•</span>
                  <span>{t('bim.services.modeling.structural')}</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3">•</span>
                  <span>{t('bim.services.modeling.mep')}</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3">•</span>
                  <span>{t('bim.services.modeling.clash')}</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3">•</span>
                  <span>{t('bim.services.modeling.asbuilt')}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* BIM Benefits */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-neo-dark-gray text-center mb-12">{t('bim.benefits.title')}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center bg-white p-6 rounded-lg shadow-lg animate-fade-in-up">
              <div className="text-3xl mb-3">📊</div>
              <h3 className="font-bold text-neo-dark-gray mb-2">{t('bim.benefits.efficiency')}</h3>
              <p className="text-neo-gray text-sm">{t('bim.benefits.efficiency.desc')}</p>
            </div>
            <div className="text-center bg-white p-6 rounded-lg shadow-lg animate-fade-in-up">
              <div className="text-3xl mb-3">🤝</div>
              <h3 className="font-bold text-neo-dark-gray mb-2">{t('bim.benefits.collaboration')}</h3>
              <p className="text-neo-gray text-sm">{t('bim.benefits.collaboration.desc')}</p>
            </div>
            <div className="text-center bg-white p-6 rounded-lg shadow-lg animate-fade-in-up">
              <div className="text-3xl mb-3">💰</div>
              <h3 className="font-bold text-neo-dark-gray mb-2">{t('bim.benefits.cost')}</h3>
              <p className="text-neo-gray text-sm">{t('bim.benefits.cost.desc')}</p>
            </div>
            <div className="text-center bg-white p-6 rounded-lg shadow-lg animate-fade-in-up">
              <div className="text-3xl mb-3">🎯</div>
              <h3 className="font-bold text-neo-dark-gray mb-2">{t('bim.benefits.quality')}</h3>
              <p className="text-neo-gray text-sm">{t('bim.benefits.quality.desc')}</p>
            </div>
          </div>
        </div>

        {/* Software & Tools */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-neo-dark-gray text-center mb-12">{t('bim.tools.title')}</h2>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <h3 className="text-xl font-bold text-neo-dark-gray mb-4">{t('bim.tools.design')}</h3>
                <ul className="space-y-2 text-neo-gray">
                  <li>Autodesk Revit</li>
                  <li>ArchiCAD</li>
                  <li>Tekla Structures</li>
                  <li>Bentley MicroStation</li>
                </ul>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold text-neo-dark-gray mb-4">{t('bim.tools.collaboration')}</h3>
                <ul className="space-y-2 text-neo-gray">
                  <li>BIM 360</li>
                  <li>Trimble Connect</li>
                  <li>Bentley ProjectWise</li>
                  <li>Procore</li>
                </ul>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold text-neo-dark-gray mb-4">{t('bim.tools.analysis')}</h3>
                <ul className="space-y-2 text-neo-gray">
                  <li>Navisworks</li>
                  <li>Trimble</li>
                  <li>Solidworks</li>
                  <li>Synchro</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-neo-dark-gray text-white rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">{t('bim.cta.title')}</h2>
          <p className="text-xl mb-6">
            {t('bim.cta.description')}
          </p>
          <a href="/contact" className="inline-block bg-neo-teal hover:bg-neo-dark-teal px-8 py-3 rounded-lg font-semibold transition-colors">
            {t('bim.cta.contact')}
          </a>
        </div>
      </div>
    </div>
  );
}