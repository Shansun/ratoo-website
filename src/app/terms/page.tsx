'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Navigation from '@/components/ui/Navigation';
import Footer from '@/components/ui/Footer';

export default function TermsPage() {
  const [currentYear, setCurrentYear] = useState('2024');

  useEffect(() => {
    setCurrentYear(new Date().getFullYear().toString());
  }, []);

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
              Terms & <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Conditions</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Please read these terms and conditions carefully before using our services.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
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
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
                  <p className="text-gray-600 leading-relaxed">
                    By using the RATOO app or website, you agree to be bound by these Terms &amp; Conditions. If you do not agree, please do not use the service.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Services Offered</h2>
                  <p className="text-gray-600 leading-relaxed">
                    RATOO connects users with local vendors for food, groceries, and other essentials. We provide an online ordering platform with payment and delivery options.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">3. User Responsibilities</h2>
                  <p className="text-gray-600 leading-relaxed">
                    You must provide accurate information and maintain account security. Misuse of the platform may result in termination.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Vendor &amp; Delivery Partner Roles</h2>
                  <p className="text-gray-600 leading-relaxed">
                    Vendors are responsible for their products. Delivery partners operate independently. RATOO is not liable for issues arising between vendors and users.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Orders &amp; Cancellations</h2>
                  <p className="text-gray-600 leading-relaxed">
                    Confirmed orders may not be canceled unless approved. RATOO reserves the right to cancel any order due to operational or vendor issues.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Payments &amp; Refunds</h2>
                  <p className="text-gray-600 leading-relaxed">
                    Payments are processed securely via third-party gateways. Refunds will be processed within 5–7 working days if applicable.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Promotions &amp; Offers</h2>
                  <p className="text-gray-600 leading-relaxed">
                    Offers are time-limited and subject to change. RATOO reserves the right to modify or cancel promotions at any time.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">8. User Conduct</h2>
                  <p className="text-gray-600 leading-relaxed">
                    You must not misuse the platform, upload harmful content, or violate laws. Inappropriate behavior will result in action.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Intellectual Property</h2>
                  <p className="text-gray-600 leading-relaxed">
                    All content, logos, and designs are property of Little Ratoons. Unauthorized use is strictly prohibited.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Limitation of Liability</h2>
                  <p className="text-gray-600 leading-relaxed">
                    We are not liable for indirect or incidental damages. We strive to provide reliable service but do not guarantee uninterrupted access.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Privacy Policy</h2>
                  <p className="text-gray-600 leading-relaxed">
                    Use of RATOO is also governed by our Privacy Policy. By using the platform, you consent to our data practices.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Termination</h2>
                  <p className="text-gray-600 leading-relaxed">
                    We may suspend or terminate accounts found in violation of these terms or engaging in fraudulent activities.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">13. Governing Law</h2>
                  <p className="text-gray-600 leading-relaxed">
                    These Terms are governed by Indian law. Any disputes shall fall under the jurisdiction of courts in Madurai, Tamil Nadu.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">14. Changes to Terms</h2>
                  <p className="text-gray-600 leading-relaxed">
                    We may update these Terms at any time. Continued use of the platform indicates acceptance of the updated Terms.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">15. Contact Us</h2>
                  <p className="text-gray-600 leading-relaxed">
                    For any queries, please contact:<br />
                    📧 <a href="mailto:care@ratooapp.com" className="text-blue-600 hover:underline">support@ratooapp.com</a><br />
                    📍 Little Ratoons, Tamil Nadu, India
                  </p>
                </section>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
