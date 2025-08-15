"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <Image
                src="/icon-tp.png"
                alt="GutLog Icon"
                width={40}
                height={40}
                className="w-10 h-10"
              />
              <span className="text-2xl font-bold text-slate-900">GutLog</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link href="#features" className="text-slate-700 hover:text-blue-600 transition-colors">
                Features
              </Link>
              <Link href="#download" className="text-slate-700 hover:text-blue-600 transition-colors">
                Download
              </Link>
              <Link href="/privacy" className="text-slate-700 hover:text-blue-600 transition-colors">
                Privacy
              </Link>
              <Link href="mailto:support@gutlog.app" className="text-slate-700 hover:text-blue-600 transition-colors">
                Support
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-slate-700 hover:text-blue-600 hover:bg-slate-100 transition-colors"
              aria-expanded={isMobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              <svg
                className={`${isMobileMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg
                className={`${isMobileMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Mobile Navigation Menu */}
          <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} md:hidden`}>
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white/95 backdrop-blur-md rounded-lg mt-2 shadow-lg">
              <Link
                href="#features"
                className="block px-3 py-2 text-slate-700 hover:text-blue-600 hover:bg-slate-50 rounded-md transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Features
              </Link>
              <Link
                href="#download"
                className="block px-3 py-2 text-slate-700 hover:text-blue-600 hover:bg-slate-50 rounded-md transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Download
              </Link>
              <Link
                href="/privacy"
                className="block px-3 py-2 text-slate-700 hover:text-blue-600 hover:bg-slate-50 rounded-md transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Privacy
              </Link>
              <Link
                href="mailto:support@gutlog.app"
                className="block px-3 py-2 text-slate-700 hover:text-blue-600 hover:bg-slate-50 rounded-md transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Support
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 text-center lg:text-left">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 leading-tight">
                  Track Your
                  <span className="text-blue-600 block">Bowel Health</span>
                </h1>
                <p className="text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                  GutLog is your private, easy-to-use bowel health tracker. Log entries in seconds, visualize trends over time, and generate doctor-ready PDF reports — all designed to help you understand patterns, spot triggers, and have better conversations with your healthcare provider.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link
                  href="#download"
                  className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.53 4.08z"/>
                    <path d="M12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                  </svg>
                  Download on App Store
                </Link>
                <Link
                  href="#features"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-slate-300 text-slate-700 font-semibold rounded-full hover:border-blue-600 hover:text-blue-600 transition-colors"
                >
                  Learn More
                </Link>
              </div>
            </div>
            
            <div className="relative order-first lg:order-last">
              <div className="relative z-10">
                <Image
                  src="/images/1.png"
                  alt="GutLog App Screenshot"
                  width={300}
                  height={600}
                  className="w-full max-w-sm mx-auto shadow-2xl rounded-3xl"
                  priority
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-3xl transform rotate-6 scale-105"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Why Choose GutLog?
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Comprehensive bowel health tracking with intelligent insights and personalized recommendations
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 group hover:bg-slate-50 rounded-xl transition-colors duration-300">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Fast, Structured Logging</h3>
              <p className="text-slate-600">Log bowel movements with Bristol stool type, color, symptoms, and notes in seconds with our intuitive interface</p>
            </div>
            
            <div className="text-center p-6 group hover:bg-slate-50 rounded-xl transition-colors duration-300">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Clear Analytics & Insights</h3>
              <p className="text-slate-600">Visualize trends, patterns, and correlations with comprehensive charts and 60-day heatmaps</p>
            </div>
            
            <div className="text-center p-6 group hover:bg-slate-50 rounded-xl transition-colors duration-300">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Privacy by Design</h3>
              <p className="text-slate-600">Your health data is stored exclusively on your device — not on our servers. You control what you export or share</p>
            </div>
          </div>

          {/* Additional Features Grid */}
          <div className="mt-16 grid md:grid-cols-2 gap-8">
            <div className="bg-slate-50 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Core Features (Free)</h3>
              <ul className="space-y-2 text-slate-700">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Core logging and insights
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  30-day data history
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Basic analytics
                </li>
              </ul>
            </div>

            <div className="bg-blue-50 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Pro Features</h3>
              <ul className="space-y-2 text-slate-700">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-blue-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Unlimited data history
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-blue-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  PDF report generation
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-blue-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Advanced analytics & no ads
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* App Screenshots Section */}
      <section id="download" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              See GutLog in Action
            </h2>
            <p className="text-xl text-slate-600">
              Beautiful, intuitive design that makes tracking your bowel health effortless
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[1, 2, 3, 4, 5].map((num) => (
              <div key={num} className="group">
                <div className="relative overflow-hidden rounded-2xl shadow-lg group-hover:shadow-2xl transition-all duration-300 transform group-hover:-translate-y-2">
                  <Image
                    src={`/images/${num}.png`}
                    alt={`GutLog App Screenshot ${num}`}
                    width={250}
                    height={500}
                    className="w-full h-auto"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link
              href="#"
              className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.53 4.08z"/>
                <path d="M12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
              </svg>
              Download on App Store
            </Link>
          </div>
        </div>
      </section>

      {/* Medical Disclaimer */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-amber-800 mb-2">Medical Disclaimer</h3>
            <p className="text-amber-700">
              GutLog is a wellness tracking tool and not a medical device. It does not provide medical advice, diagnosis, or treatment. Always consult a qualified healthcare professional for medical concerns.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-5 gap-8">
            <div className="col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <Image
                  src="/icon-tp.png"
                  alt="GutLog Icon"
                  width={40}
                  height={40}
                  className="w-10 h-10"
                />
                <span className="text-2xl font-bold">GutLog</span>
              </div>
              <p className="text-slate-300 mb-4 max-w-md">
                Track your bowel health with our comprehensive iOS app. Monitor symptoms, track patterns, and get personalized insights for better digestive wellness.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">App</h3>
              <ul className="space-y-2">
                <li><Link href="#features" className="text-slate-300 hover:text-white transition-colors">Features</Link></li>
                <li><Link href="#download" className="text-slate-300 hover:text-white transition-colors">Download</Link></li>
                <li><Link href="#" className="text-slate-300 hover:text-white transition-colors">Updates</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Support</h3>
              <ul className="space-y-2">
                <li><Link href="/privacy" className="text-slate-300 hover:text-white transition-colors">Privacy Policy</Link></li>
                <li><Link href="mailto:support@gutlog.app" className="text-slate-300 hover:text-white transition-colors">Contact Support</Link></li>
                <li><Link href="#" className="text-slate-300 hover:text-white transition-colors">Help Center</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">More Apps</h3>
              <ul className="space-y-2">
                <li><Link href="https://habitswarrior.com" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-[#ff8000] transition-colors">Habits Warrior</Link></li>
                <li className="text-slate-400 text-sm">Build lasting habits with gamified tracking</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400">
            <p>&copy; 2025 GutLog. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
