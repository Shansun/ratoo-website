'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Navigation from '@/components/ui/Navigation';
import Footer from '@/components/ui/Footer';
import { RefreshCw, CheckCircle, AlertCircle, Phone, Mail } from 'lucide-react';

export default function RefundPage() {
  const [currentYear, setCurrentYear] = useState('2024');

  useEffect(() => {
    setCurrentYear(new Date().getFullYear().toString());
  }, []);

  const refundReasons = [
    {
      icon: AlertCircle,
      title: "Incorrect Items",
      description: "Wrong products delivered or items missing from your order"
    },
    {
      icon: RefreshCw,
      title: "Quality Issues",
      description: "Products damaged, spoiled, or not meeting quality standards"
    },
    {
      icon: CheckCircle,
      title: "Order Cancellation",
      description: "Cancelled orders before preparation"
    }
  ];

  const refundProcess = [
    {
      step: "1",
      title: "Contact Us",
      description: "Call customer care and report your issue"
    },
    {
      step: "2",
      title: "Review Request",
      description: "Our team reviews your request and may request photos or additional details"
    },
    {
      step: "3",
      title: "Approval",
      description: "Once approved, refund is processed to your original payment method"
    },
    {
      step: "4",
      title: "Confirmation",
      description: "You'll receive confirmation message and refund appears in 3-5 business days"
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
              Cancellation &amp; <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Refund Policy</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Learn about our cancellation and refund policies. We&apos;re committed to providing a fair and transparent process for all our customers.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Customer Satisfaction Guarantee */}
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
              Our Customer Satisfaction Guarantee
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Your satisfaction is our priority. We&apos;re committed to resolving any issues quickly and fairly.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="bg-gradient-to-r from-green-500 to-blue-600 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">100% Satisfaction Guarantee</h3>
                <ul className="space-y-4">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-300 flex-shrink-0 mt-1" />
                    <span>Full refund for incorrect or damaged items</span>
                  </li>
                  {/* <li className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-300 flex-shrink-0 mt-1" />
                    <span>Compensation for significant delivery delays</span>
                  </li> */}
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-300 flex-shrink-0 mt-1" />
                    <span>Easy cancellation before preparation begins</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-300 flex-shrink-0 mt-1" />
                    <span>24/7 customer support for all issues</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">When Refunds Are Available</h3>
              <div className="space-y-6">
                {refundReasons.map((reason, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <reason.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">{reason.title}</h4>
                      <p className="text-gray-600">{reason.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Refund Process */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              How Our Refund Process Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Getting a refund is simple and straightforward. Here&apos;s what to expect.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {refundProcess.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white font-bold text-xl">{step.step}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Refund Policy Details */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="bg-gray-50 rounded-xl p-6 mb-8">
                <p className="text-sm text-gray-600 mb-0">
                  <strong>Last updated:</strong> {currentYear}
                </p>
              </div>

              <section className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Order Cancellation by User</h2>
                  <div className="space-y-4 text-gray-600">
                    <p>
                      Orders placed through RATOO can be cancelled within a limited time window. Once the vendor starts preparing your order, cancellation may not be possible.
                    </p>
                    
                    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg">
                      <p className="font-semibold text-yellow-800">
                        <strong>Note:</strong> Orders cannot be cancelled through the app. To cancel your order, you must call our customer care directly.
                      </p>
                    </div>
                    
                    <p>
                      If cancellation is requested before order preparation starts, a full refund will be initiated.
                    </p>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Order Cancellation by Vendor or RATOO</h2>
                  <p className="text-gray-600">
                    In some cases, orders may be cancelled due to unavailability of items, vendor closure, incorrect address, or operational issues. In such cases, a full refund will be issued.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Refund Eligibility</h2>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                      <span>If your order was cancelled before confirmation or preparation – eligible for <strong>100% refund</strong>.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                      <span>If the vendor fails to deliver due to their fault – <strong>full or partial refund</strong> as applicable.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                      <span>No refund will be provided for issues caused by <strong>incorrect delivery address</strong>, <strong>unavailability of customer</strong> at the time of delivery, or delays beyond RATOO&apos;s control.</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Refund Timeline</h2>
                  <p className="text-gray-600">
                    Approved refunds will be processed within <strong>5–7 business days</strong> to your original payment method. In rare cases, it may take longer depending on your bank or payment gateway.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Non-Refundable Scenarios</h2>
                  <ul className="list-disc pl-6 space-y-2 text-gray-600">
                    <li>Change of mind after food preparation has started</li>
                    <li>Incorrect or incomplete delivery address provided by user</li>
                    <li>Refusal to accept the order without valid reason</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Grievance Redressal</h2>
                  <p className="text-gray-600 mb-4">
                    If you have concerns about a cancellation or refund, please contact our support team. We&apos;re here to help and ensure fair resolution.
                  </p>
                  
                  <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">📧</span>
                        <div>
                          <p className="font-semibold text-gray-900">Email</p>
                          <a href="mailto:care@ratooapp.com" className="text-blue-600 hover:text-blue-800 transition-colors">
                            care@ratooapp.com
                          </a>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">📍</span>
                        <div>
                          <p className="font-semibold text-gray-900">Address</p>
                          <p className="text-gray-600">Little Ratoons, Tamil Nadu, India</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">📞</span>
                        <div>
                          <p className="font-semibold text-gray-900">Phone (For Cancellations)</p>
                          <a href="tel:+918122070580" className="text-blue-600 hover:text-blue-800 transition-colors font-semibold">
                            +91 8122070580
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Support Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Need Help with Cancellation or Refund?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Our support team is available 24/7 to assist you with cancellations, refunds, and any order-related concerns.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <motion.a
                href="tel:+918122070580"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-white text-blue-600 rounded-xl p-6 text-center hover:bg-gray-100 transition-colors"
              >
                <Phone className="w-12 h-12 mx-auto mb-4 text-blue-600" />
                <h3 className="text-xl font-bold mb-2">Call Us</h3>
                <p className="text-gray-600 mb-4">Speak directly with our support team</p>
                <span className="text-blue-600 font-semibold">+91 8122070580</span>
              </motion.a>

              <motion.a
                href="mailto:care@ratooapp.com"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white text-blue-600 rounded-xl p-6 text-center hover:bg-gray-100 transition-colors"
              >
                <Mail className="w-12 h-12 mx-auto mb-4 text-blue-600" />
                <h3 className="text-xl font-bold mb-2">Email Us</h3>
                <p className="text-gray-600 mb-4">Send us a detailed message</p>
                <span className="text-blue-600 font-semibold">care@ratooapp.com</span>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
