'use client';

import ClientLogos from '@/components/ClientLogos';

export default function TestLogos() {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="py-8">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            Client Logos Component Test
          </h1>
          <p className="text-gray-600 mb-8">
            Testing the infinite scroll client logos component in isolation
          </p>
        </div>
      </div>
      
      <ClientLogos />
      
      <div className="py-16 text-center">
        <p className="text-gray-500">
          Component test completed. Check the scrolling animation above.
        </p>
      </div>
    </div>
  );
}