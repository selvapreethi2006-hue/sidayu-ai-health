import React from 'react';
import { Link } from 'react-router-dom';
import { Zap, Users, Brain } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-white via-health-light to-white pt-20 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Text */}
          <div className="space-y-8 animate-slideUp">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-slate mb-4">
                AI Powered Natural Healthcare
                <span className="gradient-text"> Guidance</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Understand your health concerns, explore wellness options, and connect with healthcare experts through intelligent AI assistance.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/chat" className="btn-primary text-center">
                Start Health Assessment
              </Link>
              <a href="#how-it-works" className="btn-outline text-center">
                Learn More
              </a>
            </div>

            {/* Trust indicators */}
            <div className="flex items-center gap-8 pt-8 border-t border-health-green border-opacity-30">
              <div>
                <p className="text-2xl font-bold text-health-green">100K+</p>
                <p className="text-sm text-gray-600">Users Guided</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-health-green">24/7</p>
                <p className="text-sm text-gray-600">Available</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-health-green">5</p>
                <p className="text-sm text-gray-600">Specializations</p>
              </div>
            </div>
          </div>

          {/* Right side - Illustration */}
          <div className="hidden md:block animate-fadeIn">
            <div className="bg-gradient-health rounded-2xl p-8 shadow-xl">
              <div className="space-y-6">
                <div className="flex items-center gap-4 bg-white rounded-lg p-4">
                  <Brain className="h-12 w-12 text-health-green" />
                  <div>
                    <p className="font-semibold text-slate">AI Analysis</p>
                    <p className="text-sm text-gray-600">Symptom Understanding</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 bg-white rounded-lg p-4">
                  <Zap className="h-12 w-12 text-health-green" />
                  <div>
                    <p className="font-semibold text-slate">Instant Guidance</p>
                    <p className="text-sm text-gray-600">Evidence-based Tips</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 bg-white rounded-lg p-4">
                  <Users className="h-12 w-12 text-health-green" />
                  <div>
                    <p className="font-semibold text-slate">Expert Connect</p>
                    <p className="text-sm text-gray-600">Doctor Consultation</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
