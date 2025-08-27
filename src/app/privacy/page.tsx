'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Navigation from '@/components/ui/Navigation';
import Footer from '@/components/ui/Footer';
import { Shield, Lock, Eye, Users } from 'lucide-react';

export default function PrivacyPage() {
  const [currentYear, setCurrentYear] = useState('2024');

  useEffect(() => {
    setCurrentYear(new Date().getFullYear().toString());
  }, []);

  const privacyPrinciples = [
    {
      icon: Shield,
      title: "Data Protection",
      description: "We use industry-standard encryption and security measures to protect your personal information."
    },
    {
      icon: Lock,
      title: "Secure Storage",
      description: "Your data is stored securely and accessed only by authorized personnel for legitimate business purposes."
    },
    {
      icon: Eye,
      title: "Transparency",
      description: "We're transparent about what data we collect, how we use it, and who we share it with."
    },
    {
      icon: Users,
      title: "User Control",
      description: "You have control over your data and can request access, modification, or deletion at any time."
    }
  ];

  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Privacy <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Policy</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We respect your privacy and are committed to protecting your personal information. 
              This policy explains how we collect, use, and safeguard your data.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Privacy Principles */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Privacy Principles
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These core principles guide how we handle your personal information.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {privacyPrinciples.map((principle, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <principle.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{principle.title}</h3>
                <p className="text-gray-600 leading-relaxed">{principle.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Privacy Content */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <p className="text-sm text-gray-600 mb-0">
                  <strong>Last updated:</strong> {currentYear}
                </p>
              </div>

              <div className="space-y-12">
                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introduction</h2>
                  <p className="text-gray-600 leading-relaxed">
                    This Privacy Policy describes how RATOO, operated by Little Ratoons, collects, uses, and protects your personal data. By using our app or website, you agree to the terms of this policy.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Information We Collect</h2>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex gap-2">
                      <strong>Personal Information:</strong>
                      <span>Name, mobile number, address, email ID</span>
                    </li>
                    <li className="flex gap-2">
                      <strong>Usage Data:</strong>
                      <span>App usage, search queries, interaction history</span>
                    </li>
                    <li className="flex gap-2">
                      <strong>Location Data:</strong>
                      <span>Used for accurate delivery and store recommendations</span>
                    </li>
                    <li className="flex gap-2">
                      <strong>Device Info:</strong>
                      <span>Device model, OS, IP address, and cookies</span>
                    </li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">3. How We Use Your Information</h2>
                  <p className="text-gray-600 mb-3">We use the data to:</p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-600">
                    <li>Deliver your orders efficiently</li>
                    <li>Provide customer support</li>
                    <li>Improve app experience and features</li>
                    <li>Send offers, updates, or notifications (you may opt-out)</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Sharing of Information</h2>
                  <p className="text-gray-600 mb-3">We do not sell your personal data. Your data may be shared with:</p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-600">
                    <li>Delivery partners for fulfilling orders</li>
                    <li>Third-party services for payment, analytics, and notifications</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Data Security</h2>
                  <p className="text-gray-600">
                    We use encryption, access control, and secure servers to protect your data. However, no system is 100% secure.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">6. User Rights</h2>
                  <p className="text-gray-600">
                    You have the right to access, correct, or delete your personal information. For any such request, please email us at <a href="mailto:support@ratooapp.com" className="text-blue-600 hover:underline">support@ratooapp.com</a>.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Cookies &amp; Tracking</h2>
                  <p className="text-gray-600">
                    We may use cookies or similar technologies to improve user experience and understand usage behavior. You may choose to disable cookies in your browser.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Children&apos;s Privacy</h2>
                  <p className="text-gray-600">
                    RATOO is not intended for use by children under the age of 13. We do not knowingly collect data from minors.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Changes to This Policy</h2>
                  <p className="text-gray-600">
                    We may update this Privacy Policy from time to time. We recommend checking this page periodically for changes.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Grievance Redressal</h2>
                  <p className="text-gray-600">
                    For any privacy-related concerns or complaints, please write to our Grievance Officer:
                    <br />
                    <span className="block mt-2">📧 <strong>care@ratooapp.com</strong></span>
                    <span className="block">📍 <strong>Little Ratoons, Tamil Nadu, India</strong></span>
                  </p>
                </section>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 md:p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Questions About Your Privacy?
              </h2>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                Our privacy team is here to help. Contact us with any questions about how we protect your data.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:privacy@ratoo.com"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Email Privacy Team
                </a>
                <a
                  href="tel:+918122070580"
                  className="bg-white hover:bg-gray-50 text-blue-600 font-semibold py-3 px-6 rounded-lg border-2 border-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Call Us
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
