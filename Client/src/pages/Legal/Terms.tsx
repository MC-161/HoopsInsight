import Footer from '@/components/Footer/Footer';
import React from 'react';

const TermsOfService: React.FC = () => {
  return (
    <div className="bg-black text-white h-screen">
      <div className="max-w-4xl mx-auto py-24">
        <h1 className="text-4xl font-bold mb-6 mt-4">📝 Terms of Service</h1>
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">📃 Agreement</h2>
          <p className="text-sm mb-2">
            By using our NBA web application, you agree to comply with and be bound by the following terms and conditions.
          </p>
        </section>
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">💻 Use of Site</h2>
          <p className="text-sm mb-2">
            You may use the site for lawful purposes only. You must not use the site in a way that causes damage to the site or impairs the availability or accessibility of the site.
          </p>
        </section>
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">🔐 User Accounts</h2>
          <p className="text-sm mb-2">
            When you create an account on our site, you must provide us with accurate information. You are responsible for maintaining the confidentiality of your account and password.
          </p>
        </section>
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">🚫 Termination</h2>
          <p className="text-sm mb-2">
            We may terminate or suspend your access to our site without prior notice or liability, for any reason, including if you breach the terms.
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-2">⚙️ Changes to Terms</h2>
          <p className="text-sm mb-2">
            We reserve the right to modify these terms at any time. If we make changes, we will provide notice of such changes.
          </p>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default TermsOfService;
