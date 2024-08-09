import Footer from '@/components/Footer/Footer';
import React from 'react';

const Legal: React.FC = () => {
  return (
    <div className="bg-black text-white h-screen">
      <div className="max-w-4xl mx-auto py-32">
        <h1 className="text-4xl font-bold mb-6">⚖️ Legal</h1>
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Welcome</h2>
          <p className="text-sm mb-2">
            Welcome to our NBA web application. This Legal page outlines the terms and conditions that govern your use of our site.
          </p>
        </section>
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">📜 Intellectual Property</h2>
          <p className="text-sm mb-2">
            All content, trademarks, and data on this site, including but not limited to text, graphics, and logos, are the property of the site owner.
          </p>
        </section>
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">⚠️ Disclaimer</h2>
          <p className="text-sm mb-2">
            The information provided on this site is for general informational purposes only. We do not guarantee the accuracy, completeness, or usefulness of this information.
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-2">📍 Governing Law</h2>
          <p className="text-sm mb-2">
            These terms and conditions are governed by the laws of the country in which the site owner is located, without regard to its conflict of law provisions.
          </p>
        </section>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Legal;
