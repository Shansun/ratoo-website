'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navigation from '@/components/ui/Navigation';
import Footer from '@/components/ui/Footer';
import { ChevronDown, HelpCircle, Phone, Mail, MessageCircle } from 'lucide-react';

export default function FAQsPage() {
  const [openCategory, setOpenCategory] = useState<string | null>('general');
  const [openQuestions, setOpenQuestions] = useState<Set<string>>(new Set());

  const toggleQuestion = (questionId: string) => {
    const newOpenQuestions = new Set(openQuestions);
    if (newOpenQuestions.has(questionId)) {
      newOpenQuestions.delete(questionId);
    } else {
      newOpenQuestions.add(questionId);
    }
    setOpenQuestions(newOpenQuestions);
  };

  const faqData = {
    general: [
      {
        id: 'general-1',
        question: 'What is Ratoo?',
        answer: 'Ratoo is a local commerce platform that connects customers with local businesses for convenient ordering and delivery. We focus on supporting local economies while providing fast, reliable service.'
      },
      {
        id: 'general-2',
        question: 'How does Ratoo work?',
        answer: 'Simply download our app, browse local stores in your area, place your order, and we&apos;ll deliver it to your door. You can also call us directly to place orders over the phone.'
      },
      {
        id: 'general-3',
        question: 'What areas do you serve?',
        answer: 'We currently serve 50+ cities across the country and are expanding rapidly. Check our app or call us to see if we&apos;re available in your area.'
      },
      {
        id: 'general-4',
        question: 'Is Ratoo available 24/7?',
        answer: 'Our platform is available 24/7 for browsing and ordering, but delivery times depend on the operating hours of our local business partners.'
      }
    ],
    ordering: [
      {
        id: 'ordering-1',
        question: 'How do I place an order?',
        answer: 'You can place orders through our mobile app or by calling us directly at (123) 456-7890. The app allows you to browse stores, compare prices, and track your delivery in real-time.'
      },
      {
        id: 'ordering-2',
        question: 'What payment methods do you accept?',
        answer: 'We accept major credit cards, debit cards, digital wallets (Apple Pay, Google Pay), and cash on delivery. All online payments are processed securely.'
      },
      {
        id: 'ordering-3',
        question: 'Can I modify or cancel my order?',
        answer: 'You can modify or cancel your order within a limited time window after placing it. Contact our customer service team immediately if you need to make changes.'
      },
      {
        id: 'ordering-4',
        question: 'Do you offer bulk ordering?',
        answer: 'Yes, we support bulk orders for businesses and events. Contact our business team for special pricing and arrangements.'
      }
    ],
    delivery: [
      {
        id: 'delivery-1',
        question: 'How fast is delivery?',
        answer: 'Our average delivery time is 15-30 minutes, depending on your location and the store&apos;s preparation time. You can track your order in real-time through our app.'
      },
      {
        id: 'delivery-2',
        question: 'Is delivery free?',
        answer: 'Delivery fees vary by location and order size. Many orders over a certain amount qualify for free delivery. Check the app for current delivery fees in your area.'
      },
      {
        id: 'delivery-3',
        question: 'Can I schedule delivery for later?',
        answer: 'Yes, you can schedule deliveries for specific times. This feature is available in the app and helps ensure your order arrives when it&apos;s most convenient for you.'
      },
      {
        id: 'delivery-4',
        question: 'What if my order is late or incorrect?',
        answer: 'If your order is late or incorrect, contact us immediately. We have a satisfaction guarantee and will work to resolve any issues quickly.'
      }
    ],
    business: [
      {
        id: 'business-1',
        question: 'How can my business partner with Ratoo?',
        answer: 'We&apos;re always looking for great local businesses to partner with. Contact our business development team to learn about partnership opportunities and requirements.'
      },
      {
        id: 'business-2',
        question: 'What are the benefits for business partners?',
        answer: 'Our partners benefit from increased sales, expanded customer reach, marketing support, and our easy-to-use platform for managing orders and deliveries.'
      },
      {
        id: 'business-3',
        question: 'How do you ensure quality for business partners?',
        answer: 'We carefully vet all business partners and maintain quality standards through regular reviews, customer feedback, and ongoing support.'
      },
      {
        id: 'business-4',
        question: 'What technology do you provide to partners?',
        answer: 'We provide a comprehensive dashboard for order management, inventory tracking, analytics, and customer communication tools.'
      }
    ]
  };

  const categories = [
    { id: 'general', name: 'General Questions', icon: HelpCircle },
    { id: 'ordering', name: 'Ordering & Payment', icon: Phone },
    { id: 'delivery', name: 'Delivery & Service', icon: MessageCircle },
    { id: 'business', name: 'Business Partnership', icon: Mail }
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
              Frequently Asked <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Questions</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Find answers to the most common questions about Ratoo. Can&apos;t find what you&apos;re looking for? 
              Our support team is here to help.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setOpenCategory(category.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  openCategory === category.id
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <category.icon className="w-5 h-5" />
                <span>{category.name}</span>
              </motion.button>
            ))}
          </div>

          {/* FAQ Content */}
          <div className="max-w-4xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={openCategory}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-4"
              >
                {faqData[openCategory as keyof typeof faqData]?.map((item) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                  >
                    <button
                      onClick={() => toggleQuestion(item.id)}
                      className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                    >
                      <span className="font-semibold text-gray-900">{item.question}</span>
                      <ChevronDown
                        className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${
                          openQuestions.has(item.id) ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    <AnimatePresence>
                      {openQuestions.has(item.id) && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 pb-4 text-gray-600 leading-relaxed">
                            {item.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Contact Support Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Still Have Questions?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
              Our friendly support team is here to help you with any questions or concerns. 
              We&apos;re available 24/7 to ensure you get the assistance you need.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <motion.a
                href="tel:+918122070580"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 text-center hover:shadow-lg transition-shadow"
              >
                <Phone className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Call Us</h3>
                <p className="text-gray-600 mb-4">Speak directly with our support team</p>
                <span className="text-blue-600 font-semibold">+91 8122070580</span>
              </motion.a>

              <motion.a
                href="mailto:support@ratoo.com"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 text-center hover:shadow-lg transition-shadow"
              >
                <Mail className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Email Us</h3>
                <p className="text-gray-600 mb-4">Send us a detailed message</p>
                <span className="text-blue-600 font-semibold">support@ratoo.com</span>
              </motion.a>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 text-center hover:shadow-lg transition-shadow"
              >
                <MessageCircle className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Live Chat</h3>
                <p className="text-gray-600 mb-4">Get instant help through our app</p>
                <span className="text-blue-600 font-semibold">Available 24/7</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Help Section */}
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
                Need Immediate Assistance?
              </h2>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                For urgent matters or if you can&apos;t find the answer you&apos;re looking for, 
                don&apos;t hesitate to reach out to our support team.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  href="tel:+918122070580"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Call Support Now
                </motion.a>
                <motion.a
                  href="mailto:support@ratoo.com"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white hover:bg-gray-50 text-blue-600 font-semibold py-3 px-6 rounded-lg border-2 border-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Send Email
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
