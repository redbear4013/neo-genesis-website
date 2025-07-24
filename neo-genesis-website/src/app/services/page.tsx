export default function Services() {
  return (
    <div className="min-h-screen bg-neo-off-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-neo-dark-gray mb-6 animate-fade-in-up">
            Our Services
          </h1>
          <p className="text-xl text-neo-gray max-w-3xl mx-auto animate-fade-in-up">
            Comprehensive engineering solutions tailored to your project needs
          </p>
        </div>

        {/* Main Services */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Structural Engineering */}
          <div className="bg-white rounded-lg shadow-lg p-8 animate-slide-in-left">
            <div className="text-4xl mb-4">🏢</div>
            <h2 className="text-2xl font-bold text-neo-dark-gray mb-4">Structural Engineering</h2>
            <p className="text-neo-gray mb-6">
              Our structural engineering team provides comprehensive design and analysis services for buildings, 
              bridges, and infrastructure projects of all scales.
            </p>
            <ul className="space-y-2 text-neo-gray">
              <li>• Structural Design & Analysis</li>
              <li>• Seismic Engineering</li>
              <li>• Foundation Design</li>
              <li>• Retrofitting & Rehabilitation</li>
              <li>• Code Compliance & Certification</li>
            </ul>
          </div>

          {/* Project Management */}
          <div className="bg-white rounded-lg shadow-lg p-8 animate-fade-in-up">
            <div className="text-4xl mb-4">📊</div>
            <h2 className="text-2xl font-bold text-neo-dark-gray mb-4">Project Management</h2>
            <p className="text-neo-gray mb-6">
              End-to-end project management services ensuring timely delivery, budget control, and quality assurance 
              throughout the entire project lifecycle.
            </p>
            <ul className="space-y-2 text-neo-gray">
              <li>• Project Planning & Scheduling</li>
              <li>• Cost Management & Control</li>
              <li>• Quality Assurance</li>
              <li>• Risk Management</li>
              <li>• Stakeholder Coordination</li>
            </ul>
          </div>

          {/* BIM Technology */}
          <div className="bg-white rounded-lg shadow-lg p-8 animate-slide-in-left">
            <div className="text-4xl mb-4">💻</div>
            <h2 className="text-2xl font-bold text-neo-dark-gray mb-4">BIM Technology</h2>
            <p className="text-neo-gray mb-6">
              Advanced Building Information Modeling (BIM) services that enhance collaboration, reduce errors, 
              and optimize project efficiency from conception to completion.
            </p>
            <ul className="space-y-2 text-neo-gray">
              <li>• 3D Modeling & Visualization</li>
              <li>• 4D Scheduling Integration</li>
              <li>• 5D Cost Management</li>
              <li>• Clash Detection & Resolution</li>
              <li>• BIM Implementation Training</li>
            </ul>
          </div>

          {/* Consulting Services */}
          <div className="bg-white rounded-lg shadow-lg p-8 animate-fade-in-up">
            <div className="text-4xl mb-4">💡</div>
            <h2 className="text-2xl font-bold text-neo-dark-gray mb-4">Engineering Consulting</h2>
            <p className="text-neo-gray mb-6">
              Expert consulting services providing strategic guidance, technical expertise, and innovative solutions 
              for complex engineering challenges.
            </p>
            <ul className="space-y-2 text-neo-gray">
              <li>• Feasibility Studies</li>
              <li>• Technical Due Diligence</li>
              <li>• Design Review & Optimization</li>
              <li>• Sustainability Consulting</li>
              <li>• Regulatory Compliance</li>
            </ul>
          </div>
        </div>

        {/* Specialized Services */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-neo-dark-gray text-center mb-12">Specialized Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center bg-neo-teal text-white p-8 rounded-lg animate-fade-in-up">
              <div className="text-4xl mb-4">🌱</div>
              <h3 className="text-xl font-bold mb-4">Sustainable Design</h3>
              <p>
                Green building solutions and LEED certification support for environmentally responsible construction.
              </p>
            </div>
            <div className="text-center bg-neo-dark-teal text-white p-8 rounded-lg animate-fade-in-up">
              <div className="text-4xl mb-4">🔧</div>
              <h3 className="text-xl font-bold mb-4">MEP Engineering</h3>
              <p>
                Mechanical, electrical, and plumbing systems design and coordination for optimal building performance.
              </p>
            </div>
            <div className="text-center bg-neo-teal text-white p-8 rounded-lg animate-fade-in-up">
              <div className="text-4xl mb-4">🔍</div>
              <h3 className="text-xl font-bold mb-4">Quality Control</h3>
              <p>
                Comprehensive inspection and testing services ensuring compliance with international standards.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-neo-dark-gray text-white rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
          <p className="text-xl mb-6">
            Contact our expert team to discuss how we can bring your vision to life.
          </p>
          <button className="bg-neo-teal hover:bg-neo-dark-teal px-8 py-3 rounded-lg font-semibold transition-colors">
            Get in Touch
          </button>
        </div>
      </div>
    </div>
  );
}