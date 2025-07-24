'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Award, GraduationCap, MapPin } from 'lucide-react';

const Team: React.FC = () => {
  const leadership = [
    {
      name: 'CHEANG HONG KIN "ROGER"',
      title: 'Director & Principal Engineer',
      credentials: ['P.E.', 'Macau Certified Engineer', 'U.S. Licensed Structural Engineer'],
      location: 'Macau',
      specialization: 'Structural Engineering & Project Management',
      experience: '15+ Years',
      education: 'Master of Engineering',
      avatar: '/api/placeholder/150/150'
    },
    {
      name: 'Kenny Cheang',
      title: 'Associate Architect',
      credentials: ['Macau Certified Architect'],
      location: 'Macau',
      specialization: 'Architectural Design & Planning',
      experience: '12+ Years',
      education: 'Bachelor of Architecture',
      avatar: '/api/placeholder/150/150'
    }
  ];

  const teamMembers = [
    {
      name: 'K.S. HOI',
      title: 'Project Manager',
      credentials: ['Macau Certified Engineer'],
      department: 'Project Team',
      specialization: 'Construction Management'
    },
    {
      name: 'Josh Zheng',
      title: 'Structural Engineer',
      credentials: ['Macau Certified Engineer'],
      department: 'Project Team',
      specialization: 'Structural Analysis'
    },
    {
      name: 'Samson Ng',
      title: 'Technical Manager',
      credentials: ['Technical Specialist'],
      department: 'Technical Team',
      specialization: 'Quality Assurance'
    },
    {
      name: 'Wei Ng',
      title: 'Engineer',
      credentials: ['Licensed Engineer'],
      department: 'Technical Team',
      specialization: 'Site Inspection'
    },
    {
      name: 'Frankie Chan',
      title: 'Engineer',
      credentials: ['Licensed Engineer'],
      department: 'Technical Team',
      specialization: 'Construction Oversight'
    },
    {
      name: 'CHEANG MEN CHENG',
      title: 'Administration Officer',
      credentials: ['Business Administration'],
      department: 'CAD & BIM Team',
      specialization: 'Operations Management'
    },
    {
      name: 'Queenie Ao',
      title: 'Finance Officer',
      credentials: ['CPA Certified'],
      department: 'Administration',
      specialization: 'Financial Management'
    },
    {
      name: 'Susana Ng',
      title: 'Coordinator',
      credentials: ['Project Coordination'],
      department: 'Administration',
      specialization: 'Client Relations'
    }
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
    <section className="py-20 bg-neo-off-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-neo-charcoal mb-6">
            Our <span className="text-neo-teal">Expert Team</span>
          </h2>
          <p className="text-xl text-neo-slate max-w-3xl mx-auto">
            Led by licensed professionals with extensive experience across multiple countries, 
            our team brings international expertise to every project.
          </p>
        </motion.div>

        {/* Leadership Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-neo-charcoal mb-8 text-center">Leadership Team</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {leadership.map((leader, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="flex items-start space-x-6">
                  <div className="w-24 h-24 bg-gradient-to-br from-neo-teal to-neo-teal-light rounded-full flex items-center justify-center text-white text-2xl font-bold">
                    {leader.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-neo-charcoal mb-2">{leader.name}</h4>
                    <p className="text-neo-teal font-semibold mb-3">{leader.title}</p>
                    
                    <div className="space-y-2 mb-4">
                      {leader.credentials.map((credential, credIndex) => (
                        <span 
                          key={credIndex}
                          className="inline-block bg-neo-teal/10 text-neo-teal text-xs px-3 py-1 rounded-full mr-2 mb-1"
                        >
                          {credential}
                        </span>
                      ))}
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-neo-slate">
                      <div className="flex items-center space-x-2">
                        <MapPin className="h-4 w-4 text-neo-teal" />
                        <span>{leader.location}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Award className="h-4 w-4 text-neo-teal" />
                        <span>{leader.experience}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <GraduationCap className="h-4 w-4 text-neo-teal" />
                        <span>{leader.education}</span>
                      </div>
                    </div>

                    <p className="text-neo-slate mt-4 text-sm">
                      <strong>Specialization:</strong> {leader.specialization}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Team Organization Chart */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-neo-charcoal mb-8 text-center">Organization Structure</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Group by Department */}
            {[
              { dept: 'Project Team', color: 'from-blue-500 to-blue-600', members: teamMembers.filter(m => m.department === 'Project Team') },
              { dept: 'Technical Team', color: 'from-neo-teal to-neo-teal-light', members: teamMembers.filter(m => m.department === 'Technical Team') },
              { dept: 'CAD & BIM Team', color: 'from-green-500 to-green-600', members: teamMembers.filter(m => m.department === 'CAD & BIM Team') },
              { dept: 'Administration', color: 'from-purple-500 to-purple-600', members: teamMembers.filter(m => m.department === 'Administration') }
            ].map((group, groupIndex) => (
              <motion.div
                key={groupIndex}
                variants={itemVariants}
                className="space-y-4"
              >
                <div className={`bg-gradient-to-r ${group.color} text-white p-4 rounded-lg text-center`}>
                  <h4 className="font-bold text-lg">{group.dept}</h4>
                  <p className="text-sm opacity-90">{group.members.length} Members</p>
                </div>
                
                <div className="space-y-3">
                  {group.members.map((member, memberIndex) => (
                    <div
                      key={memberIndex}
                      className="bg-white rounded-lg p-4 shadow-md border border-gray-100 hover:shadow-lg transition-shadow"
                    >
                      <h5 className="font-semibold text-neo-charcoal text-sm mb-1">{member.name}</h5>
                      <p className="text-neo-teal text-xs font-medium mb-2">{member.title}</p>
                      <p className="text-neo-slate text-xs mb-2">{member.specialization}</p>
                      <div className="flex flex-wrap gap-1">
                        {member.credentials.map((cred, credIndex) => (
                          <span 
                            key={credIndex}
                            className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded"
                          >
                            {cred}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-neo-charcoal to-neo-slate text-white rounded-xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Join Our Growing Team</h3>
            <p className="text-lg opacity-95 mb-6">
              We&apos;re always looking for talented engineers, architects, and construction professionals 
              to join our international team. Explore career opportunities with Neo Genesis.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-neo-teal hover:bg-neo-teal-dark px-6 py-3 rounded-lg font-semibold transition-colors">
                View Open Positions
              </button>
              <button className="border border-neo-teal text-neo-teal hover:bg-neo-teal hover:text-white px-6 py-3 rounded-lg font-semibold transition-all">
                Submit Your Resume
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Team;