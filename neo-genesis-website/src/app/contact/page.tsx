'use client';

import { useState } from 'react';

export default function Contact() {
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
            Contact Us
          </h1>
          <p className="text-xl text-neo-gray max-w-3xl mx-auto animate-fade-in-up">
            Get in touch with our team to discuss your project needs
          </p>
        </div>

        {/* Contact Form and Info */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-lg p-8 animate-slide-in-left">
            <h2 className="text-2xl font-bold text-neo-dark-gray mb-6">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-neo-dark-gray font-medium mb-2">
                    Full Name *
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
                    Email Address *
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
                    Company
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
                    Phone Number
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
                  Subject *
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
                  Message *
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
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8 animate-fade-in-up">
            {/* Main Office */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-xl font-bold text-neo-dark-gray mb-4">🏢 Main Office</h3>
              <div className="space-y-3 text-neo-gray">
                <p><strong>Address:</strong><br />
                Suite 1205, Neo Genesis Tower<br />
                123 Engineering Boulevard<br />
                Guangzhou, Guangdong 510000<br />
                China</p>
                <p><strong>Phone:</strong> +86 20 8888 9999</p>
                <p><strong>Email:</strong> info@neogenesis.com</p>
                <p><strong>Business Hours:</strong><br />
                Monday - Friday: 8:00 AM - 6:00 PM CST<br />
                Saturday: 9:00 AM - 1:00 PM CST</p>
              </div>
            </div>

            {/* Regional Offices */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-xl font-bold text-neo-dark-gray mb-4">🌍 Regional Offices</h3>
              <div className="space-y-4 text-neo-gray">
                <div>
                  <h4 className="font-semibold text-neo-dark-gray">🇲🇴 Macau SAR</h4>
                  <p>Avenida da Praia Grande, 123<br />
                  Macau SAR<br />
                  +853 2888 9999</p>
                </div>
                <div>
                  <h4 className="font-semibold text-neo-dark-gray">🇭🇰 Hong Kong SAR</h4>
                  <p>Central Plaza, 18th Floor<br />
                  18 Harbour Road, Wan Chai<br />
                  Hong Kong SAR<br />
                  +852 2888 9999</p>
                </div>
                <div>
                  <h4 className="font-semibold text-neo-dark-gray">🇺🇸 United States</h4>
                  <p>123 Innovation Drive<br />
                  San Francisco, CA 94105<br />
                  United States<br />
                  +1 (415) 888-9999</p>
                </div>
              </div>
            </div>

            {/* Quick Contact */}
            <div className="bg-neo-teal text-white rounded-lg p-8">
              <h3 className="text-xl font-bold mb-4">🚀 Quick Response</h3>
              <p className="mb-4">
                Need immediate assistance? Our project managers are available 24/7 for urgent inquiries.
              </p>
              <p><strong>Emergency Hotline:</strong><br />
              +86 138 0000 8888</p>
              <p className="text-sm mt-2 opacity-90">
                *For existing projects and emergency support only
              </p>
            </div>
          </div>
        </div>

        {/* Map and Additional Info */}
        <div className="bg-white rounded-lg shadow-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-neo-dark-gray mb-6">Visit Our Office</h2>
          <div className="bg-neo-off-white rounded-lg p-8 mb-6">
            <div className="text-6xl mb-4">🗺️</div>
            <p className="text-neo-gray">
              Interactive map integration would be implemented here.<br />
              Our main office is conveniently located in the heart of Guangzhou&apos;s business district,<br />
              easily accessible by metro and major highways.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-2xl mb-2">🚇</div>
              <h4 className="font-semibold text-neo-dark-gray">Metro Access</h4>
              <p className="text-neo-gray text-sm">5-minute walk from Zhujiang New Town Station</p>
            </div>
            <div>
              <div className="text-2xl mb-2">🅿️</div>
              <h4 className="font-semibold text-neo-dark-gray">Parking</h4>
              <p className="text-neo-gray text-sm">Underground parking available for visitors</p>
            </div>
            <div>
              <div className="text-2xl mb-2">☕</div>
              <h4 className="font-semibold text-neo-dark-gray">Meeting Facilities</h4>
              <p className="text-neo-gray text-sm">Modern conference rooms and presentation areas</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}