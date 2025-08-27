'use client';

import { motion } from 'framer-motion';
import { Download, Phone, ArrowRight, Star, Zap, Shield, Sparkles, Users, TrendingUp } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 via-purple-600/5 to-pink-600/5"></div>
      </div>

      {/* Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ 
            x: [0, 100, 0],
            y: [0, -100, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
        />
        <motion.div
          animate={{ 
            x: [0, -120, 0],
            y: [0, 80, 0],
            scale: [1, 0.8, 1]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-br from-purple-400 to-pink-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
        />
        <motion.div
          animate={{ 
            x: [0, -50, 0],
            y: [0, 60, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/2 w-96 h-96 bg-gradient-to-br from-pink-400 to-orange-600 rounded-full mix-blend-multiply filter blur-3xl opacity-15"
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
              className="inline-flex items-center space-x-3 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 px-6 py-3 rounded-full text-sm font-semibold mb-8 border border-blue-200/50 shadow-lg backdrop-blur-sm"
            >
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <Sparkles className="w-4 h-4" />
              <span>Trusted by 70+ local businesses</span>
              <TrendingUp className="w-4 h-4" />
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-8 leading-tight"
            >
              Your Local{' '}
              <span className="relative">
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Revolution
                </span>
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 1.2, duration: 0.8 }}
                  className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"
                />
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-xl md:text-2xl text-gray-600 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
            >
              Connect with local retailers instantly. Experience lightning-fast delivery, 
              seamless ordering, and support your community—all in one revolutionary platform.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12"
            >
              <motion.a
                href="https://play.google.com/store/apps/details?id=com.userrnapp&hl=en_IN"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-2xl shadow-2xl transition-all duration-300 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative flex items-center justify-center space-x-3">
                  <Download className="w-5 h-5" />
                  <span>Download App</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.a>

              <motion.a
                href="tel:+918122070580"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="group px-8 py-4 bg-white/70 backdrop-blur-sm text-gray-800 font-bold rounded-2xl border-2 border-gray-200 shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center space-x-3 hover:bg-white"
              >
                <Phone className="w-5 h-5 text-blue-600 group-hover:text-purple-600 transition-colors" />
                <span>Order by Phone</span>
              </motion.a>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="grid grid-cols-3 gap-6 max-w-md mx-auto lg:mx-0"
            >
              <div className="text-center">
                <div className="flex items-center justify-center space-x-1 mb-2">
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <span className="text-2xl font-bold text-gray-900">4.7</span>
                </div>
                <p className="text-sm text-gray-600">App Rating</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center space-x-1 mb-2">
                  <Zap className="w-5 h-5 text-blue-500" />
                  <span className="text-2xl font-bold text-gray-900">15min</span>
                </div>
                <p className="text-sm text-gray-600">Avg Delivery</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center space-x-1 mb-2">
                  <Users className="w-5 h-5 text-purple-500" />
                  <span className="text-2xl font-bold text-gray-900">24/7</span>
                </div>
                <p className="text-sm text-gray-600">Support</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Enhanced App Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="relative"
          >
            <div className="relative mx-auto lg:mx-0 max-w-sm">
              {/* Glassmorphism Phone Frame */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="relative bg-gradient-to-br from-gray-900 to-black rounded-[3rem] p-2 shadow-2xl"
              >
                <div className="bg-white rounded-[2.5rem] overflow-hidden">
                  {/* App Screen */}
                  <div className="h-[600px] bg-gradient-to-br from-blue-500 via-purple-600 to-pink-600 relative">
                    {/* Status Bar */}
                    <div className="flex justify-between items-center p-4 text-white">
                      <span className="text-sm font-medium">9:41</span>
                      <div className="flex space-x-1">
                        <div className="w-4 h-2 bg-white/60 rounded-sm"></div>
                        <div className="w-4 h-2 bg-white/60 rounded-sm"></div>
                        <div className="w-4 h-2 bg-white rounded-sm"></div>
                      </div>
                    </div>

                    {/* App Header */}
                    <div className="px-6 py-4 text-white">
                      <div className="flex items-center justify-between mb-6">
                        <h3 className="text-2xl font-bold">Ratoo</h3>
                        <div className="w-10 h-10 bg-white/20 rounded-full backdrop-blur-sm"></div>
                      </div>
                      
                      <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 mb-6">
                        <p className="text-sm opacity-90 mb-2">Good morning! 👋</p>
                        <p className="font-semibold">What would you like to order today?</p>
                      </div>
                    </div>

                    {/* App Content */}
                    <div className="px-6 space-y-4">
                      {[
                        { icon: '🛒', title: 'Fresh Groceries', subtitle: '15 min delivery' },
                        { icon: '🍕', title: 'Local Restaurant', subtitle: 'Hot & ready' },
                        { icon: '💊', title: 'Pharmacy', subtitle: 'Health essentials' }
                      ].map((item, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 1 + index * 0.2, duration: 0.6 }}
                          className="bg-white/20 backdrop-blur-sm rounded-xl p-4"
                        >
                          <div className="flex items-center space-x-4">
                            <div className="text-2xl">{item.icon}</div>
                            <div className="flex-1">
                              <h4 className="font-semibold text-white">{item.title}</h4>
                              <p className="text-white/70 text-sm">{item.subtitle}</p>
                            </div>
                            <div className="w-8 h-8 bg-white/30 rounded-lg"></div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Floating Elements */}
              <motion.div
                animate={{ 
                  y: [-10, 10, -10],
                  rotate: [0, 5, 0]
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-6 -right-6 bg-white/90 backdrop-blur-xl rounded-2xl p-4 shadow-2xl border border-white/20"
              >
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-semibold text-gray-800">Order Confirmed</span>
                </div>
              </motion.div>

              <motion.div
                animate={{ 
                  y: [10, -10, 10],
                  rotate: [0, -5, 0]
                }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-6 -left-6 bg-white/90 backdrop-blur-xl rounded-2xl p-4 shadow-2xl border border-white/20"
              >
                <div className="flex items-center space-x-2">
                  <Zap className="w-4 h-4 text-blue-500" />
                  <span className="text-sm font-semibold text-gray-800">2 min away</span>
                </div>
              </motion.div>

              <motion.div
                animate={{ 
                  scale: [1, 1.1, 1],
                  rotate: [0, 10, 0]
                }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/2 -right-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-3 shadow-2xl"
              >
                <Shield className="w-6 h-6 text-white" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center space-y-2 text-gray-400"
        >
          <span className="text-sm font-medium">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-gray-400 rounded-full mt-2"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
