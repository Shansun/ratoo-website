'use client';

import { motion } from 'framer-motion';
import { Download, QrCode, Play } from 'lucide-react';

const AppDownloadSection = () => {
  const features = [
    "Browse local stores and products",
    "Real-time order tracking",
    "Secure payment options",
    "24/7 customer support",
    "Exclusive local deals",
    "Fast delivery in minutes"
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/10 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-white/10 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium mb-6"
            >
              <Download className="w-4 h-4" />
              <span>Available on iOS & Android</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
            >
              Get the Ratoo App
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="text-xl text-blue-100 mb-8 leading-relaxed"
            >
              Download our app and experience local shopping like never before. 
              Get instant access to the best local businesses, exclusive deals, and lightning-fast delivery.
            </motion.p>

            {/* Features List */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8"
            >
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span className="text-blue-100">{feature}</span>
                </div>
              ))}
            </motion.div>

            {/* Download Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 mb-8"
            >
              {/* Temporarily disabled - Apple App Store coming soon */}
              {/* <motion.a
                href="#"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-black text-white px-6 py-3 rounded-lg flex items-center justify-center space-x-3 hover:bg-gray-900 transition-colors"
              >
                <Apple className="w-6 h-6" />
                <div className="text-left">
                  <div className="text-xs">Download on the</div>
                  <div className="text-sm font-semibold">App Store</div>
                </div>
              </motion.a> */}

              <motion.a
                href="https://play.google.com/store/apps/details?id=com.userrnapp&hl=en_IN"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-black text-white px-6 py-3 rounded-lg flex items-center justify-center space-x-3 hover:bg-gray-900 transition-colors"
              >
                <Play className="w-6 h-6" />
                <div className="text-left">
                  <div className="text-xs">Get it on</div>
                  <div className="text-sm font-semibold">Google Play</div>
                </div>
              </motion.a>
            </motion.div>

            {/* Phone Order CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6"
            >
              <h3 className="text-lg font-semibold mb-2">Prefer to order by phone?</h3>
              <p className="text-blue-100 mb-4">Call us directly for personalized service</p>
              <a
                href="tel:+918122070580"
                className="bg-white text-blue-600 font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl inline-flex items-center space-x-2"
              >
                <span>Call +91 8122070580</span>
              </a>
            </motion.div>
          </motion.div>

          {/* Right Content - Phone Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="relative"
          >
            <div className="relative mx-auto lg:mx-0 max-w-sm">
              {/* Phone Frame */}
              <div className="relative bg-gray-900 rounded-[3rem] p-2 shadow-2xl">
                <div className="bg-white rounded-[2.5rem] overflow-hidden">
                  {/* App Screen */}
                  <div className="h-96 bg-gradient-to-br from-blue-500 to-purple-600 relative">
                    {/* App Content */}
                    <div className="absolute inset-0 p-6 text-white">
                      <div className="flex items-center justify-between mb-6">
                        <h3 className="text-lg font-bold">Ratoo</h3>
                        <div className="w-8 h-8 bg-white/20 rounded-full"></div>
                      </div>
                      
                      <div className="space-y-4">
                        <div className="bg-white/20 rounded-lg p-3">
                          <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 bg-white/30 rounded-lg"></div>
                            <div>
                              <div className="h-3 bg-white/40 rounded w-20 mb-1"></div>
                              <div className="h-2 bg-white/30 rounded w-16"></div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="bg-white/20 rounded-lg p-3">
                          <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 bg-white/30 rounded-lg"></div>
                            <div>
                              <div className="h-3 bg-white/40 rounded w-24 mb-1"></div>
                              <div className="h-2 bg-white/30 rounded w-18"></div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="bg-white/20 rounded-lg p-3">
                          <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 bg-white/30 rounded-lg"></div>
                            <div>
                              <div className="h-3 bg-white/40 rounded w-22 mb-1"></div>
                              <div className="h-2 bg-white/30 rounded w-14"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* QR Code */}
              <motion.div
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-4 -right-4 bg-white rounded-xl p-3 shadow-lg"
              >
                <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center">
                  <QrCode className="w-8 h-8 text-gray-600" />
                </div>
              </motion.div>

              {/* Download Icon */}
              <motion.div
                animate={{ y: [5, -5, 5] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -left-4 bg-white rounded-xl p-3 shadow-lg"
              >
                <div className="w-16 h-16 bg-blue-500 rounded-lg flex items-center justify-center">
                  <Download className="w-8 h-8 text-white" />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AppDownloadSection;
