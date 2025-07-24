export default function About() {
  return (
    <div className="min-h-screen bg-neo-off-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-neo-dark-gray mb-6 animate-fade-in-up">
            About NEO GENESIS
          </h1>
          <p className="text-xl text-neo-gray max-w-3xl mx-auto animate-fade-in-up">
            Construction & Engineering Co., Ltd
          </p>
        </div>

        {/* Company Overview */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className="animate-slide-in-left">
            <h2 className="text-3xl font-bold text-neo-dark-gray mb-6">Our Story</h2>
            <p className="text-neo-gray mb-4">
              Founded in 2015, NEO GENESIS Construction & Engineering Co., Ltd has established itself as a leading 
              provider of innovative engineering solutions across China, Macau, USA, and Hong Kong.
            </p>
            <p className="text-neo-gray mb-4">
              Our company was born from a vision to revolutionize the construction industry through cutting-edge 
              technology, sustainable practices, and uncompromising quality standards.
            </p>
            <p className="text-neo-gray">
              With a diverse portfolio spanning structural engineering, BIM technology implementation, and comprehensive 
              project management, we have successfully delivered over 200 projects worldwide.
            </p>
          </div>
          <div className="animate-fade-in-up">
            <h2 className="text-3xl font-bold text-neo-dark-gray mb-6">Our Mission</h2>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <p className="text-neo-gray mb-4">
                To deliver exceptional engineering solutions that shape the future of construction while maintaining 
                the highest standards of safety, sustainability, and innovation.
              </p>
              <p className="text-neo-gray">
                We strive to build lasting partnerships with our clients by consistently exceeding expectations 
                and delivering projects that stand the test of time.
              </p>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-neo-dark-gray text-center mb-12">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center bg-white p-8 rounded-lg shadow-lg animate-fade-in-up">
              <div className="text-4xl mb-4">🏗️</div>
              <h3 className="text-xl font-bold text-neo-dark-gray mb-4">Innovation</h3>
              <p className="text-neo-gray">
                Embracing cutting-edge technology and methodologies to deliver superior results.
              </p>
            </div>
            <div className="text-center bg-white p-8 rounded-lg shadow-lg animate-fade-in-up">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-bold text-neo-dark-gray mb-4">Integrity</h3>
              <p className="text-neo-gray">
                Building trust through transparency, honesty, and ethical business practices.
              </p>
            </div>
            <div className="text-center bg-white p-8 rounded-lg shadow-lg animate-fade-in-up">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold text-neo-dark-gray mb-4">Excellence</h3>
              <p className="text-neo-gray">
                Pursuing perfection in every project through meticulous attention to detail.
              </p>
            </div>
          </div>
        </div>

        {/* Global Presence */}
        <div className="bg-neo-teal rounded-lg p-8 text-white">
          <h2 className="text-3xl font-bold text-center mb-8">Global Presence</h2>
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div>
              <h3 className="text-xl font-bold mb-2">🇨🇳 China</h3>
              <p>Main Operations</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">🇲🇴 Macau</h3>
              <p>Regional Hub</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">🇺🇸 USA</h3>
              <p>International Expansion</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">🇭🇰 Hong Kong</h3>
              <p>Financial Center</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}