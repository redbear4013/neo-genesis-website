'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Calendar, MapPin, ExternalLink, ChevronRight } from 'lucide-react';

const ProjectPortfolio: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Projects', count: 7 },
    { id: 'casino', name: 'Casino & Resort', count: 3 },
    { id: 'commercial', name: 'Commercial', count: 1 },
    { id: 'government', name: 'Government', count: 1 },
    { id: 'aa', name: 'A&A Projects', count: 2 },
  ];

  const projects = [
    {
      id: 1,
      title: 'Macau Golden Dragon Hotel L3',
      category: 'casino',
      location: 'Macau',
      year: '2018',
      type: 'Hotel Renovation & Structural Modification',
      area: '220 sqm addition, 130 sqm modification',
      description: 'Major structural renovation including new escalator and stair installation, floor slab infill, and comprehensive building modifications.',
      image: '/images/projects/1.png',
      services: ['Structural Engineering', 'Construction Management', 'Building Permits']
    },
    {
      id: 2,
      title: 'Saipan Imperial Pacific Resort',
      category: 'casino',
      location: 'Saipan, Northern Mariana Islands',
      year: '2019',
      type: 'Large-scale Resort Development',
      area: 'Over 140,000 sqm with 14-story hotel tower',
      description: 'Luxury integrated resort with more than 340 rooms, 15 ultra-luxury villas, high-end dining and entertainment facilities.',
      image: '/images/projects/BS1.png',
      services: ['Structural Consultancy', 'Project Management', 'BIM Modeling']
    },
    {
      id: 3,
      title: 'Wynn Palace Macau',
      category: 'casino',
      location: 'Macau',
      year: '2016',
      type: 'Luxury Casino Resort',
      area: 'Integrated resort complex',
      description: 'Luxury integrated resort featuring world-class gaming facilities, premium accommodations, and entertainment venues.',
      image: '/images/projects/WP1.jpg',
      services: ['Structural Engineering', 'BIM Coordination', 'Project Management']
    },
    {
      id: 4,
      title: 'Macau Bank of China - San Ma Lou Sub-Branch',
      category: 'commercial',
      location: 'Macau',
      year: '2020',
      type: 'Bank Branch Remodeling',
      area: 'Complete interior renovation',
      description: 'Adding new mezzanine floor and new stairs, glass facade wall replacement, and comprehensive interior modifications.',
      image: '/images/projects/2.png',
      services: ['Structural Analysis', 'Interior Design Support', 'Regulatory Approval']
    },
    {
      id: 5,
      title: 'New Immigration Building Design',
      category: 'government',
      location: 'Macau',
      year: '2011',
      type: 'Government Building Architecture',
      area: 'Multi-story government facility',
      description: 'Comprehensive design and planning for new immigration building including architectural optimization and space utilization.',
      image: '/images/projects/3.png',
      services: ['Architectural Design', 'Space Planning', 'Government Compliance']
    },
    {
      id: 6,
      title: 'Butani at the Grand Lisboa',
      category: 'aa',
      location: 'Macau',
      year: '2021',
      type: 'Luxury Retail Store Renovation',
      area: 'High-end jewelry store fit-out',
      description: 'Premium jewelry store renovation featuring sophisticated design elements and luxury retail space optimization.',
      image: '/images/projects/4.jpg',
      services: ['A&A Projects', 'Luxury Fit-out', 'MEP Coordination']
    },
    {
      id: 7,
      title: 'Macau Parisian Tissot Retail Shop',
      category: 'aa',
      location: 'Macau',
      year: '2020',
      type: 'Brand Retail Store Design',
      area: 'Watch retail boutique',
      description: 'Complete renovation of Tissot retail space with brand-specific design requirements and high-end finishes.',
      image: '/images/projects/5.jpg',
      services: ['Retail Design', 'Brand Compliance', 'Construction Management']
    }
  ];

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

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
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-neo-dark-gray mb-6">
            Project <span className="text-neo-teal">Portfolio</span>
          </h2>
          <p className="text-xl text-neo-gray max-w-3xl mx-auto">
            Showcasing our expertise across diverse project types, from luxury casino developments 
            to government buildings and commercial renovations.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-neo-teal text-white shadow-lg scale-105'
                  : 'bg-gray-100 text-neo-gray hover:bg-neo-teal/10 hover:text-neo-teal'
              }`}
            >
              {category.name}
              <span className="ml-2 text-sm opacity-75">({category.count})</span>
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          key={activeCategory} // Re-animate when category changes
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <Image 
                  src={project.image} 
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold text-neo-teal">
                  {project.year}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <button className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-full text-neo-teal opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white hover:scale-110">
                  <ExternalLink className="h-4 w-4" />
                </button>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-neo-dark-gray group-hover:text-neo-teal transition-colors line-clamp-2">
                    {project.title}
                  </h3>
                </div>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center space-x-2 text-sm text-neo-gray">
                    <MapPin className="h-4 w-4 text-neo-teal" />
                    <span>{project.location}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-neo-gray">
                    <Calendar className="h-4 w-4 text-neo-teal" />
                    <span>{project.type}</span>
                  </div>
                </div>

                <p className="text-neo-gray text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>

                <div className="mb-4">
                  <p className="text-xs text-neo-teal font-semibold mb-2">PROJECT SCOPE</p>
                  <p className="text-sm text-neo-gray">{project.area}</p>
                </div>

                {/* Services Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.services.slice(0, 2).map((service, index) => (
                    <span
                      key={index}
                      className="bg-neo-teal/10 text-neo-teal text-xs px-2 py-1 rounded-full"
                    >
                      {service}
                    </span>
                  ))}
                  {project.services.length > 2 && (
                    <span className="bg-gray-100 text-neo-gray text-xs px-2 py-1 rounded-full">
                      +{project.services.length - 2} more
                    </span>
                  )}
                </div>

                <button className="w-full bg-neo-teal/5 hover:bg-neo-teal hover:text-white text-neo-teal font-semibold py-3 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 group/btn">
                  <span>View Project Details</span>
                  <ChevronRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-neo-teal to-neo-dark-teal text-white rounded-xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Have a Project in Mind?</h3>
            <p className="text-lg opacity-95 mb-6">
              From concept to completion, we bring expertise and innovation to every project. 
              Let&apos;s discuss how we can bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-neo-teal px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
                Start Your Project
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-neo-teal px-8 py-3 rounded-lg font-semibold transition-all">
                Download Portfolio
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectPortfolio;