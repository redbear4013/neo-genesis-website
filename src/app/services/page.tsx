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
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {/* Structural Consultancy Services */}
          <div className="bg-white rounded-lg shadow-lg p-8 animate-slide-in-left">
            <div className="text-4xl mb-4">🏢</div>
            <h2 className="text-2xl font-bold text-neo-dark-gray mb-4">Structural Consultancy Services</h2>
            <p className="text-neo-gray mb-6">
              Expert structural engineering consultation for projects of all scales, ensuring safety and compliance with international standards.
            </p>
            <ul className="space-y-2 text-neo-gray">
              <li>• Structural Analysis</li>
              <li>• Foundation Design</li>
              <li>• Seismic Assessment</li>
            </ul>
          </div>

          {/* Structural Inspection and QA/QC */}
          <div className="bg-white rounded-lg shadow-lg p-8 animate-fade-in-up">
            <div className="text-4xl mb-4">✅</div>
            <h2 className="text-2xl font-bold text-neo-dark-gray mb-4">Structural Inspection and QA/QC</h2>
            <p className="text-neo-gray mb-6">
              Comprehensive quality assurance, quality control, and inspection services ensuring structural integrity and regulatory compliance.
            </p>
            <ul className="space-y-2 text-neo-gray">
              <li>• Construction Monitoring</li>
              <li>• Material Testing</li>
              <li>• Quality Control</li>
              <li>• Safety Inspections</li>
              <li>• Standards Compliance</li>
            </ul>
          </div>

          {/* Construction Management */}
          <div className="bg-white rounded-lg shadow-lg p-8 animate-slide-in-left">
            <div className="text-4xl mb-4">⛑️</div>
            <h2 className="text-2xl font-bold text-neo-dark-gray mb-4">Construction Management</h2>
            <p className="text-neo-gray mb-6">
              End-to-end project management services from planning to completion, ensuring timely and budget-conscious delivery.
            </p>
            <ul className="space-y-2 text-neo-gray">
              <li>• Project Planning</li>
              <li>• Resource Management</li>
              <li>• Timeline Coordination</li>
            </ul>
          </div>

          {/* Building Department Submission */}
          <div className="bg-white rounded-lg shadow-lg p-8 animate-fade-in-up">
            <div className="text-4xl mb-4">📄</div>
            <h2 className="text-2xl font-bold text-neo-dark-gray mb-4">Building Department Submission</h2>
            <p className="text-neo-gray mb-6">
              Professional handling of all regulatory submissions and approvals across multiple jurisdictions.
            </p>
            <ul className="space-y-2 text-neo-gray">
              <li>• Permit Applications</li>
              <li>• Regulatory Compliance</li>
              <li>• Documentation Preparation</li>
            </ul>
          </div>

          {/* BIM Services */}
          <div className="bg-white rounded-lg shadow-lg p-8 animate-slide-in-left">
            <div className="text-4xl mb-4">📦</div>
            <h2 className="text-2xl font-bold text-neo-dark-gray mb-4">BIM Services</h2>
            <p className="text-neo-gray mb-6">
              Advanced Building Information Modeling technology for superior project visualization and coordination.
            </p>
            <ul className="space-y-2 text-neo-gray">
              <li>• 3D Modeling</li>
              <li>• Clash Detection</li>
              <li>• Project Visualization</li>
            </ul>
          </div>

          {/* Exhibition & Trade Show Construction */}
          <div className="bg-white rounded-lg shadow-lg p-8 animate-fade-in-up">
            <div className="text-4xl mb-4">📅</div>
            <h2 className="text-2xl font-bold text-neo-dark-gray mb-4">Exhibition & Trade Show Construction</h2>
            <p className="text-neo-gray mb-6">
              Specialized expertise in large-scale exhibition and entertainment venue construction and modifications.
            </p>
            <ul className="space-y-2 text-neo-gray">
              <li>• Event Structures</li>
              <li>• Temporary Installations</li>
              <li>• Trade Show Design</li>
            </ul>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-neo-dark-gray text-white rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
          <p className="text-xl mb-6">
            Contact our expert team to discuss how we can bring your vision to life.
          </p>
          <a href="/contact" className="inline-block bg-neo-teal hover:bg-neo-dark-teal px-8 py-3 rounded-lg font-semibold transition-colors">
            Get in Touch
          </a>
        </div>
      </div>
    </div>
  );
}