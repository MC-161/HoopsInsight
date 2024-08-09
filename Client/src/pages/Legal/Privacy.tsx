import Footer from '@/components/Footer/Footer';
import React from 'react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="bg-black text-white h-screen ">
      <div className="max-w-4xl mx-auto py-24">
        <h1 className="text-4xl font-bold mb-6 mt-8">🔒 Privacy Policy</h1>
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Introduction</h2>
          <p className="text-sm mb-2">
            Your privacy is important to us. This privacy policy explains how we collect, use, and share information about you.
          </p>
        </section>
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">📋 Information We Collect</h2>
          <p className="text-sm mb-2">
            We collect information that you provide to us directly, such as when you create an account or contact us for support. We also collect information automatically as you navigate through our site.
          </p>
        </section>
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">💼 How We Use Information</h2>
          <p className="text-sm mb-2">
            We use the information we collect to provide, maintain, and improve our services, as well as to communicate with you.
          </p>
        </section>
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">🔄 Sharing Information</h2>
          <p className="text-sm mb-2">
            We do not share your personal information with third parties except as necessary to provide our services or as required by law.
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-2">🔐 Security</h2>
          <p className="text-sm mb-2">
            We take reasonable measures to help protect information about you from loss, theft, misuse, and unauthorized access, disclosure, alteration, and destruction.
          </p>
        </section>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default PrivacyPolicy;
