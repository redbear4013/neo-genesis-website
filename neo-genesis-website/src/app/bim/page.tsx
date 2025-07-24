import Image from 'next/image';

export default function BIM() {
  return (
    <div className="min-h-screen bg-neo-off-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-neo-dark-gray mb-6 animate-fade-in-up">
            BIM Technology
          </h1>
          <p className="text-xl text-neo-gray max-w-3xl mx-auto animate-fade-in-up">
            Building Information Modeling solutions for the future of construction
          </p>
        </div>

        {/* What is BIM */}
        <div className="mb-16">
          <div className="bg-white rounded-lg shadow-lg p-8 animate-fade-in-up">
            <h2 className="text-3xl font-bold text-neo-dark-gray mb-6 text-center">What is BIM?</h2>
            <p className="text-neo-gray text-lg text-center max-w-4xl mx-auto">
              Building Information Modeling (BIM) is a digital representation of physical and functional characteristics 
              of a building. It serves as a shared knowledge resource for information about a facility, forming a 
              reliable basis for decisions during its life-cycle from earliest conception to demolition.
            </p>
          </div>
        </div>

        {/* BIM Images Showcase */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-neo-dark-gray text-center mb-12">BIM in Action</h2>
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
                <h3 className="text-xl font-bold text-neo-dark-gray mb-3">3D Structural Modeling</h3>
                <p className="text-neo-gray">Detailed 3D models providing comprehensive visualization of structural elements and their relationships.</p>
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
                <h3 className="text-xl font-bold text-neo-dark-gray mb-3">Multi-Discipline Coordination</h3>
                <p className="text-neo-gray">Integrated coordination between architectural, structural, and MEP systems for optimal project delivery.</p>
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
                <h3 className="text-xl font-bold text-neo-dark-gray mb-3">Advanced Analysis</h3>
                <p className="text-neo-gray">Sophisticated analysis tools for structural performance evaluation and optimization.</p>
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
                <h3 className="text-xl font-bold text-neo-dark-gray mb-3">Technical Documentation</h3>
                <p className="text-neo-gray">Automated generation of technical drawings and documentation from 3D models.</p>
              </div>
            </div>
          </div>
        </div>

        {/* BIM Dimensions */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-neo-dark-gray text-center mb-12">BIM Dimensions</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6 text-center animate-slide-in-left">
              <div className="text-4xl mb-4">📐</div>
              <h3 className="text-xl font-bold text-neo-dark-gray mb-4">3D Modeling</h3>
              <p className="text-neo-gray">
                Three-dimensional geometric representation with spatial relationships, 
                light analysis, and geographic information.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 text-center animate-fade-in-up">
              <div className="text-4xl mb-4">⏰</div>
              <h3 className="text-xl font-bold text-neo-dark-gray mb-4">4D Scheduling</h3>
              <p className="text-neo-gray">
                Time-based information linking 3D elements with time-related data 
                to enable project scheduling and sequencing.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 text-center animate-slide-in-left">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-xl font-bold text-neo-dark-gray mb-4">5D Cost Management</h3>
              <p className="text-neo-gray">
                Cost-related information integrated with 3D and 4D data for 
                accurate cost estimation and budget management.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 text-center animate-fade-in-up">
              <div className="text-4xl mb-4">🌱</div>
              <h3 className="text-xl font-bold text-neo-dark-gray mb-4">6D Sustainability</h3>
              <p className="text-neo-gray">
                Environmental impact analysis and energy performance data 
                for sustainable building design and operation.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 text-center animate-slide-in-left">
              <div className="text-4xl mb-4">🔧</div>
              <h3 className="text-xl font-bold text-neo-dark-gray mb-4">7D Facility Management</h3>
              <p className="text-neo-gray">
                Operational information for facility management including 
                maintenance schedules, warranties, and asset information.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 text-center animate-fade-in-up">
              <div className="text-4xl mb-4">⚠️</div>
              <h3 className="text-xl font-bold text-neo-dark-gray mb-4">8D Safety</h3>
              <p className="text-neo-gray">
                Safety information integration for hazard identification, 
                risk assessment, and safety planning throughout the project.
              </p>
            </div>
          </div>
        </div>

        {/* Our BIM Services */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-neo-dark-gray text-center mb-12">Our BIM Services</h2>
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-neo-teal text-white rounded-lg p-8 animate-slide-in-left">
              <h3 className="text-2xl font-bold mb-4">BIM Implementation</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="mr-3">•</span>
                  <span>BIM Strategy Development</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3">•</span>
                  <span>Software Selection & Setup</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3">•</span>
                  <span>Team Training & Support</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3">•</span>
                  <span>Process Standardization</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3">•</span>
                  <span>Quality Control Procedures</span>
                </li>
              </ul>
            </div>
            <div className="bg-neo-dark-teal text-white rounded-lg p-8 animate-fade-in-up">
              <h3 className="text-2xl font-bold mb-4">BIM Modeling Services</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="mr-3">•</span>
                  <span>Architectural BIM Modeling</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3">•</span>
                  <span>Structural BIM Modeling</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3">•</span>
                  <span>MEP BIM Coordination</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3">•</span>
                  <span>Clash Detection & Resolution</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3">•</span>
                  <span>As-Built Documentation</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* BIM Benefits */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-neo-dark-gray text-center mb-12">Benefits of BIM</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center bg-white p-6 rounded-lg shadow-lg animate-fade-in-up">
              <div className="text-3xl mb-3">📊</div>
              <h3 className="font-bold text-neo-dark-gray mb-2">Improved Efficiency</h3>
              <p className="text-neo-gray text-sm">Streamlined workflows and reduced rework</p>
            </div>
            <div className="text-center bg-white p-6 rounded-lg shadow-lg animate-fade-in-up">
              <div className="text-3xl mb-3">🤝</div>
              <h3 className="font-bold text-neo-dark-gray mb-2">Better Collaboration</h3>
              <p className="text-neo-gray text-sm">Enhanced team coordination and communication</p>
            </div>
            <div className="text-center bg-white p-6 rounded-lg shadow-lg animate-fade-in-up">
              <div className="text-3xl mb-3">💰</div>
              <h3 className="font-bold text-neo-dark-gray mb-2">Cost Savings</h3>
              <p className="text-neo-gray text-sm">Reduced errors and optimized resource allocation</p>
            </div>
            <div className="text-center bg-white p-6 rounded-lg shadow-lg animate-fade-in-up">
              <div className="text-3xl mb-3">🎯</div>
              <h3 className="font-bold text-neo-dark-gray mb-2">Quality Enhancement</h3>
              <p className="text-neo-gray text-sm">Higher precision and fewer construction issues</p>
            </div>
          </div>
        </div>

        {/* Software & Tools */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-neo-dark-gray text-center mb-12">BIM Software & Tools</h2>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <h3 className="text-xl font-bold text-neo-dark-gray mb-4">Design & Modeling</h3>
                <ul className="space-y-2 text-neo-gray">
                  <li>Autodesk Revit</li>
                  <li>ArchiCAD</li>
                  <li>Tekla Structures</li>
                  <li>Bentley MicroStation</li>
                </ul>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold text-neo-dark-gray mb-4">Collaboration</h3>
                <ul className="space-y-2 text-neo-gray">
                  <li>BIM 360</li>
                  <li>Trimble Connect</li>
                  <li>Bentley ProjectWise</li>
                  <li>Procore</li>
                </ul>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold text-neo-dark-gray mb-4">Analysis & Visualization</h3>
                <ul className="space-y-2 text-neo-gray">
                  <li>Navisworks</li>
                  <li>Lumion</li>
                  <li>Enscape</li>
                  <li>Synchro</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-neo-dark-gray text-white rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Projects with BIM?</h2>
          <p className="text-xl mb-6">
            Contact our BIM specialists to discuss how we can optimize your construction process.
          </p>
          <button className="bg-neo-teal hover:bg-neo-dark-teal px-8 py-3 rounded-lg font-semibold transition-colors">
            Get BIM Consultation
          </button>
        </div>
      </div>
    </div>
  );
}