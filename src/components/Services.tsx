'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Building2, 
  ClipboardCheck, 
  FileText, 
  HardHat, 
  Box, 
  Calendar 
} from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: Building2,
      title: 'Structural Consultancy Services',
      description: 'Expert structural engineering consultation for projects of all scales, ensuring safety and compliance with international standards.',
      features: ['Structural Analysis', 'Foundation Design', 'Seismic Assessment']
    },
    {
      icon: ClipboardCheck,
      title: 'Structural Inspection and QA/QC',
      description: 'Comprehensive quality assurance, quality control, and inspection services ensuring structural integrity and regulatory compliance.',
      features: ['Construction Monitoring', 'Material Testing', 'Quality Control', 'Safety Inspections', 'Standards Compliance']
    },
    {
      icon: HardHat,
      title: 'Construction Management',
      description: 'End-to-end project management services from planning to completion, ensuring timely and budget-conscious delivery.',
      features: ['Project Planning', 'Resource Management', 'Timeline Coordination']
    },
    {
      icon: FileText,
      title: 'Building Department Submission',
      description: 'Professional handling of all regulatory submissions and approvals across multiple jurisdictions.',
      features: ['Permit Applications', 'Regulatory Compliance', 'Documentation Preparation']
    },
    {
      icon: Box,
      title: 'BIM Services',
      description: 'Advanced Building Information Modeling technology for superior project visualization and coordination.',
      features: ['3D Modeling', 'Clash Detection', 'Project Visualization']
    },
    {
      icon: Calendar,
      title: 'Exhibition & Trade Show Construction',
      description: 'Specialized expertise in large-scale exhibition and entertainment venue construction and modifications.',
      features: ['Event Structures', 'Temporary Installations', 'Trade Show Design']
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section className="py-16 bg-neo-off-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-neo-dark-gray mb-6">
            Our <span className="text-neo-teal">Services</span>
          </h2>
          <p className="text-xl text-neo-gray max-w-3xl mx-auto">
            We provide comprehensive engineering and construction services with expertise 
            spanning multiple countries and project types, from casino developments to government buildings.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-neo-teal/30 group"
            >
              <div className="flex items-center mb-6">
                <div className="bg-neo-teal/10 group-hover:bg-neo-teal group-hover:text-white p-4 rounded-lg transition-all duration-300">
                  <service.icon className="h-8 w-8 text-neo-teal group-hover:text-white" />
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-neo-dark-gray mb-4 group-hover:text-neo-teal transition-colors">
                {service.title}
              </h3>
              
              <p className="text-neo-gray mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-neo-gray">
                    <div className="w-2 h-2 bg-neo-teal rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <div className="mt-6 pt-6 border-t border-gray-100">
                <button className="text-neo-teal font-semibold hover:text-neo-dark-teal transition-colors flex items-center group-hover:translate-x-2 transition-transform">
                  Learn More
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-center mt-12"
        >
          <div className="bg-gradient-to-r from-neo-teal to-neo-dark-teal text-white rounded-xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Need a Custom Solution?</h3>
            <p className="text-lg opacity-95 mb-6">
              Every project is unique. Let us work with you to develop a tailored approach 
              that meets your specific requirements and exceeds your expectations.
            </p>
            <a href="/contact" className="inline-block bg-white text-neo-teal px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
              Discuss Your Project
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;