'use client';

import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Contact() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      company: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-neo-off-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-neo-dark-gray mb-6 animate-fade-in-up">
            {t('contact.title')}
          </h1>
          <p className="text-xl text-neo-gray max-w-3xl mx-auto animate-fade-in-up">
            {t('contact.subtitle')}
          </p>
        </div>

        {/* Contact Form and Info */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-lg p-8 animate-slide-in-left">
            <h2 className="text-2xl font-bold text-neo-dark-gray mb-6">{t('contact.form.title')}</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-neo-dark-gray font-medium mb-2">
                    {t('contact.form.name')} *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-neo-teal focus:border-transparent"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-neo-dark-gray font-medium mb-2">
                    {t('contact.form.email')} *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-neo-teal focus:border-transparent"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="company" className="block text-neo-dark-gray font-medium mb-2">
                    {t('contact.form.company')}
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-neo-teal focus:border-transparent"
                    placeholder="Your company name"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-neo-dark-gray font-medium mb-2">
                    {t('contact.form.phone')}
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-neo-teal focus:border-transparent"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-neo-dark-gray font-medium mb-2">
                  {t('contact.form.subject')} *
                </label>
                <select
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-neo-teal focus:border-transparent"
                >
                  <option value="">Select a subject</option>
                  <option value="general">General Inquiry</option>
                  <option value="project">New Project</option>
                  <option value="bim">BIM Services</option>
                  <option value="consulting">Engineering Consulting</option>
                  <option value="partnership">Partnership Opportunity</option>
                  <option value="career">Career Opportunities</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-neo-dark-gray font-medium mb-2">
                  {t('contact.form.message')} *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-neo-teal focus:border-transparent"
                  placeholder="Please describe your project or inquiry in detail..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-neo-teal hover:bg-neo-dark-teal text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                {t('contact.form.submit')}
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8 animate-fade-in-up">
            {/* Main Office */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-xl font-bold text-neo-dark-gray mb-4">{t('contact.office.main')}</h3>
              <div className="space-y-3 text-neo-gray">
                <p><strong>{t('contact.office.address')}:</strong><br />
                Rua dos Curtidores. No. 29E EDF. YU WAH GARDEN. GF Unit L<br />
                Macau</p>
                <p><strong>{t('contact.office.phone')}:</strong> +853 66887906</p>
                <p><strong>{t('contact.office.email')}:</strong> neo@neogenesisenc.com</p>
                <p><strong>{t('contact.office.hours')}:</strong><br />
                {t('contact.office.weekdays')}<br />
                {t('contact.office.saturday')}</p>
              </div>
            </div>

            {/* China Office */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-xl font-bold text-neo-dark-gray mb-4">China Office</h3>
              <div className="space-y-3 text-neo-gray">
                <p><strong>Address:</strong><br />
                Hengqin MCC Headquarters Complex Hr. 27 Room 04<br />
                Hengqin Zhuhai, China</p>
                <p><strong>Phone:</strong> +86 18516377303</p>
                <p><strong>Timezone:</strong> GMT+8</p>
              </div>
            </div>

            {/* US Office */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-xl font-bold text-neo-dark-gray mb-4">US Office</h3>
              <div className="space-y-3 text-neo-gray">
                <p><strong>Address:</strong><br />
                Beach Rd. Garapan Floor of the Yuyu Bldg.<br />
                3rd Floor Room 103, Saipan<br />
                Northern Mariana Islands (USA)</p>
                <p><strong>Phone:</strong> +1 670 322 9568</p>
                <p><strong>Timezone:</strong> GMT+10</p>
              </div>
            </div>

          </div>
        </div>

        {/* Map and Additional Info */}
        <div className="bg-white rounded-lg shadow-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-neo-dark-gray mb-6">{t('contact.visit.title')}</h2>
          <div className="bg-neo-off-white rounded-lg p-8">
            <div className="w-full h-96 bg-gray-200 rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1845.123!2d113.5530!3d22.1987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f15.1!3m3!1m2!1s0x0%3A0x0!2sRua%20dos%20Curtidores%2C%20Macau!5e0!3m2!1sen!2smo!4v1709123456789!5m2!1sen!2smo"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Neo Genesis Office Location - Rua dos Curtidores, Macau"
              ></iframe>
            </div>
            <p className="text-neo-gray mt-4">
              {t('contact.visit.description')}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}