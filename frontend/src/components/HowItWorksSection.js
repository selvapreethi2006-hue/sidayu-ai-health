import React from 'react';
import { CheckCircle, Users, Brain, Zap } from 'lucide-react';

const HowItWorksSection = () => {
  const steps = [
    {
      icon: MessageSquare,
      title: 'Describe Your Concern',
      description: 'Tell our AI about your health symptoms or concerns'
    },
    {
      icon: Brain,
      title: 'AI Analysis',
      description: 'Multiple specialized agents analyze your information'
    },
    {
      icon: Zap,
      title: 'Get Recommendations',
      description: 'Receive personalized wellness guidance and suggestions'
    },
    {
      icon: Users,
      title: 'Connect with Doctors',
      description: 'Book consultations with healthcare professionals if needed'
    },
  ];

  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-slideUp">
          <h2 className="section-title">How AI Works</h2>
          <p className="section-subtitle">Your journey to health understanding in 4 simple steps</p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative">
                {/* Number circle */}
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-gradient-health rounded-full flex items-center justify-center text-white font-bold text-2xl mb-4">
                    {index + 1}
                  </div>
                  <div className="text-center">
                    <h3 className="text-lg font-bold text-slate mb-2">{step.title}</h3>
                    <p className="text-gray-600 text-sm">{step.description}</p>
                  </div>
                </div>

                {/* Connector line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-1/2 w-full h-1 bg-gradient-to-r from-health-green to-transparent transform translate-y-0"></div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const MessageSquare = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
  </svg>
);

export default HowItWorksSection;
