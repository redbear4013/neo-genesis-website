'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { Calendar, MapPin, ExternalLink, ChevronRight } from 'lucide-react';

const ProjectPortfolio: React.FC = () => {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState('casino');

  const categories = [
    { id: 'casino', name: 'Casino & Resort', count: 9 },
    { id: 'commercial', name: 'Commercial', count: 3 },
    { id: 'retail', name: 'Retail & A&A', count: 6 },
    { id: 'government', name: 'Government', count: 1 },
    { id: 'entertainment', name: 'Entertainment', count: 2 },
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
      images: ['/images/projects/1.png', '/images/projects/2.png', '/images/projects/3.png', '/images/projects/4.jpg', '/images/projects/5.jpg'],
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
      images: ['/images/projects/BS1.png', '/images/projects/BS2.png', '/images/projects/BS3.png', '/images/projects/BS4.png', '/images/projects/BS5.png', '/images/projects/BS6.png', '/images/projects/BS7.png'],
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
      images: ['/images/projects/WP1.jpg', '/images/projects/WP2.jpg', '/images/projects/WP3.jpg', '/images/projects/WP4.png', '/images/projects/WP5.png', '/images/projects/WP6.png', '/images/projects/WP7.png'],
      services: ['Structural Engineering', 'BIM Coordination', 'Project Management']
    },
    {
      id: 4,
      title: 'City of Dreams Façade Enhancement',
      category: 'casino',
      location: 'Macau',
      year: '2020',
      type: 'Façade Renovation & Enhancement',
      area: 'Large-scale façade modification',
      description: 'Comprehensive façade enhancement project including structural modifications, aesthetic improvements, and building envelope upgrades.',
      image: '/images/projects/cod1.jpg',
      images: ['/images/projects/cod1.jpg', '/images/projects/cod2.png', '/images/projects/cod3.png', '/images/projects/cod4.jpg', '/images/projects/cod5.png', '/images/projects/cod6.jpg'],
      services: ['Façade Engineering', 'Structural Analysis', 'Project Management']
    },
    {
      id: 5,
      title: 'Hilton Saipan Garden Resort',
      category: 'casino',
      location: 'Saipan, Northern Mariana Islands',
      year: '2017',
      type: 'Resort Development & Construction',
      area: 'Full resort complex with amenities',
      description: 'Complete resort development including guest accommodations, recreational facilities, and landscape integration.',
      image: '/images/projects/Hil1.png',
      images: ['/images/projects/Hil1.png', '/images/projects/Hil2.png', '/images/projects/Hil3.png', '/images/projects/Hil4.png', '/images/projects/Hil5.png', '/images/projects/Hil6.jpg'],
      services: ['Resort Planning', 'Structural Engineering', 'Project Management']
    },
    {
      id: 7,
      title: 'Saipan Beverly Hill Development',
      category: 'commercial',
      location: 'Saipan, Northern Mariana Islands',
      year: '2018',
      type: 'Mixed-Use Commercial Development',
      area: 'Large-scale commercial complex',
      description: 'Comprehensive commercial development featuring retail spaces, office areas, and mixed-use facilities.',
      image: '/images/projects/bh1.png',
      images: ['/images/projects/bh1.png', '/images/projects/bh2.png', '/images/projects/bh3.png', '/images/projects/bh4.png', '/images/projects/bh5.png', '/images/projects/bh6.png', '/images/projects/bh7.png'],
      services: ['Commercial Design', 'Structural Engineering', 'Project Management']
    },
    {
      id: 8,
      title: 'Studio City Super Fun Zone',
      category: 'casino',
      location: 'Macau',
      year: '2020',
      type: 'Indoor Entertainment Facility',
      area: 'Multi-level indoor playground',
      description: 'Design and construction of indoor entertainment facility featuring interactive play areas and family entertainment zones.',
      image: '/images/projects/fz1.png',
      images: ['/images/projects/fz1.png', '/images/projects/fz2.png', '/images/projects/fz4.png', '/images/projects/fz13.png'],
      services: ['Entertainment Design', 'Safety Engineering', 'MEP Coordination']
    },
    {
      id: 9,
      title: 'Wynn Palace FIBA 3x3 Court',
      category: 'casino',
      location: 'Macau',
      year: '2021',
      type: 'Sports Facility Construction',
      area: 'Professional basketball court',
      description: 'Construction of FIBA-standard 3x3 basketball court including specialized flooring, lighting, and spectator areas.',
      image: '/images/projects/F3x3_1.jpg',
      images: ['/images/projects/F3x3_1.jpg', '/images/projects/F3x3_2.jpg', '/images/projects/F3x3_3.jpg', '/images/projects/F3x3_4.jpg', '/images/projects/F3x3_5.jpg', '/images/projects/F3x3_6.jpg'],
      services: ['Sports Facility Design', 'Structural Engineering', 'Specialized Systems']
    },
    {
      id: 10,
      title: 'Saipan Capitol Wonderland',
      category: 'commercial',
      location: 'Saipan, Northern Mariana Islands',
      year: '2019',
      type: 'Entertainment Complex',
      area: 'Multi-purpose entertainment venue',
      description: 'Development of comprehensive entertainment complex featuring diverse recreational facilities and commercial spaces.',
      image: '/images/projects/wl1.png',
      images: ['/images/projects/wl1.png', '/images/projects/wl2.png', '/images/projects/wl3.jpg', '/images/projects/wl4.jpg', '/images/projects/wl5.jpg'],
      services: ['Entertainment Design', 'Structural Engineering', 'Project Coordination']
    },
    {
      id: 11,
      title: 'Bank of China Nova Branch',
      category: 'retail',
      location: 'Macau',
      year: '2021',
      type: 'Bank Branch A&A and Rehabilitation',
      area: 'Commercial banking space renovation',
      description: 'Complete renovation and rehabilitation of Bank of China branch including interior fit-out, structural modifications, and modern banking facilities.',
      image: '/images/projects/boc/boc1.jpg',
      images: ['/images/projects/boc/boc1.jpg', '/images/projects/boc/boc2.jpg', '/images/projects/boc/boc3.png', '/images/projects/boc/boc4.png'],
      services: ['A&A Design', 'Structural Engineering', 'Interior Design']
    },
    {
      id: 12,
      title: 'Butani at the Grand Lisboa',
      category: 'retail',
      location: 'Macau',
      year: '2020',
      type: 'Luxury Jewelry Store',
      area: 'High-end retail space',
      description: 'Design and construction of luxury jewelry store at Grand Lisboa featuring premium finishes and specialized display systems.',
      image: '/images/projects/butani/B1.jpg',
      images: ['/images/projects/butani/B1.jpg', '/images/projects/butani/b2.jpg', '/images/projects/butani/b3.jpg', '/images/projects/butani/b4.jpg'],
      services: ['Retail Design', 'Interior Fit-out', 'Specialized Systems']
    },
    {
      id: 13,
      title: 'COD Crown Tower Podium Slide',
      category: 'casino',
      location: 'Macau',
      year: '2019',
      type: 'Entertainment Feature Installation',
      area: 'Large-scale slide installation',
      description: 'Engineering and installation of signature slide feature at City of Dreams Crown Tower podium area.',
      image: '/images/projects/cod-slide/slide1.jpg',
      images: ['/images/projects/cod-slide/slide1.jpg', '/images/projects/cod-slide/slide2.jpg', '/images/projects/cod-slide/slide3.jpg', '/images/projects/cod-slide/slide4.jpg'],
      services: ['Structural Engineering', 'Entertainment Design', 'Safety Systems']
    },
    {
      id: 14,
      title: 'Bank of China San Ma Lou Sub-Branch',
      category: 'retail',
      location: 'Macau',
      year: '2020',
      type: 'Bank Sub-Branch Development',
      area: 'Full branch banking facility',
      description: 'Complete development of Bank of China sub-branch including structural modifications, banking systems, and customer service areas.',
      image: '/images/projects/bocm/bocm1.jpg',
      images: ['/images/projects/bocm/bocm1.jpg', '/images/projects/bocm/bocm2.jpg', '/images/projects/bocm/bocm3.png', '/images/projects/bocm/bocm4.jpg', '/images/projects/bocm/bocm5.png', '/images/projects/bocm/bocm6.png'],
      services: ['Banking Design', 'Structural Engineering', 'MEP Systems']
    },
    {
      id: 15,
      title: 'City of Dreams Longines Shop',
      category: 'retail',
      location: 'Macau',
      year: '2021',
      type: 'Luxury Watch Retail Store',
      area: 'Premium retail space',
      description: 'Design and construction of Longines luxury watch store featuring sophisticated display systems and premium finishes.',
      image: '/images/projects/longines/long1.png',
      images: ['/images/projects/longines/long1.png', '/images/projects/longines/long2.jpg', '/images/projects/longines/long3.jpg'],
      services: ['Retail Design', 'Interior Fit-out', 'Display Systems']
    },
    {
      id: 16,
      title: 'Parisian Tissot Retail Shop',
      category: 'retail',
      location: 'Macau',
      year: '2020',
      type: 'Watch Retail Store',
      area: 'Retail shop fit-out',
      description: 'Complete fit-out of Tissot retail store at The Parisian Macau including brand-specific design elements and display systems.',
      image: '/images/projects/tissot/ti1.jpg',
      images: ['/images/projects/tissot/ti1.jpg', '/images/projects/tissot/ti2.jpg', '/images/projects/tissot/ti3.jpg'],
      services: ['Retail Design', 'Brand Implementation', 'Interior Fit-out']
    },
    {
      id: 17,
      title: 'Studio City IWC Shop Front',
      category: 'retail',
      location: 'Macau',
      year: '2021',
      type: 'Luxury Watch Store Front',
      area: 'Premium storefront design',
      description: 'Design and construction of IWC luxury watch store front at Studio City featuring elegant facade and interior design.',
      image: '/images/projects/iwc/iwc1.jpg',
      images: ['/images/projects/iwc/iwc1.jpg', '/images/projects/iwc/iwc2.png', '/images/projects/iwc/iwc3.png'],
      services: ['Facade Design', 'Retail Design', 'Interior Architecture']
    },
    {
      id: 18,
      title: 'Venetian Golden Fish High Limit Gaming',
      category: 'casino',
      location: 'Macau',
      year: '2019',
      type: 'High Limit Gaming Area',
      area: 'Premium gaming facility',
      description: 'Design and construction of exclusive high limit gaming area featuring luxury finishes and specialized gaming systems.',
      image: '/images/projects/hl/HL1.jpg',
      images: ['/images/projects/hl/HL1.jpg', '/images/projects/hl/HL2.png', '/images/projects/hl/HL3.jpg', '/images/projects/hl/HL4.jpg'],
      services: ['Gaming Design', 'Interior Fit-out', 'Specialized Systems']
    },
    {
      id: 19,
      title: 'Rua Leste do Mercado de S. Domingos',
      category: 'commercial',
      location: 'Macau',
      year: '2020',
      type: 'Commercial Building Development',
      area: 'Mixed-use commercial space',
      description: 'Development of commercial building at Rua Leste do Mercado de S. Domingos featuring retail and office spaces.',
      image: '/images/projects/don/don1.png',
      images: ['/images/projects/don/don1.png', '/images/projects/don/don2.png', '/images/projects/don/don3.png'],
      services: ['Commercial Design', 'Structural Engineering', 'Mixed-Use Development']
    },
    {
      id: 20,
      title: '4th Cross-sea Bridge Artificial Island Link',
      category: 'government',
      location: 'Macau',
      year: '2018',
      type: 'Infrastructure Development',
      area: 'Major bridge infrastructure',
      description: 'Engineering consultation for the 4th Cross-sea bridge in Macau artificial island connection, a major infrastructure project.',
      image: '/images/projects/bridge/bridge1.jpg',
      images: ['/images/projects/bridge/bridge1.jpg', '/images/projects/bridge/bridge2.jpg', '/images/projects/bridge/bridge3.jpg', '/images/projects/bridge/bridge4.png', '/images/projects/bridge/bridge5.png'],
      services: ['Infrastructure Engineering', 'Structural Consultation', 'Government Projects']
    },
    {
      id: 21,
      title: 'Studio City Water Park Phase 2',
      category: 'entertainment',
      location: 'Macau',
      year: '2019',
      type: 'Water Park Expansion',
      area: 'Large-scale water park facilities',
      description: 'Major expansion of Studio City water park facilities including new attractions, structural modifications, and safety systems.',
      image: '/images/projects/wpark/wpark1.jpg',
      images: ['/images/projects/wpark/wpark1.jpg', '/images/projects/wpark/wpark2.jpg', '/images/projects/wpark/wpark3.jpg', '/images/projects/wpark/wpark4.png', '/images/projects/wpark/wpark5.png', '/images/projects/wpark/wpark6.png'],
      services: ['Water Park Engineering', 'Structural Design', 'Safety Systems']
    },
    {
      id: 22,
      title: 'Wynn Palace Qingdao Beer Festival',
      category: 'entertainment',
      location: 'Macau',
      year: '2020',
      type: 'Cultural Festival Setup',
      area: 'Large-scale event infrastructure',
      description: 'Design and construction of temporary structures and facilities for Qingdao Beer & Cultural Festival at Wynn Palace.',
      image: '/images/projects/beer/beer1.jpg',
      images: ['/images/projects/beer/beer1.jpg', '/images/projects/beer/beer2.jpg', '/images/projects/beer/beer3.jpg', '/images/projects/beer/beer4.png', '/images/projects/beer/beer5.png', '/images/projects/beer/beer7.png'],
      services: ['Event Infrastructure', 'Temporary Structures', 'Cultural Events']
    }
  ];

  const filteredProjects = projects.filter(project => project.category === activeCategory);

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
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-neo-dark-gray mb-6">
            {t('projects.home.title')}
          </h2>
          <p className="text-xl text-neo-gray max-w-3xl mx-auto">
            {t('projects.home.subtitle')}
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