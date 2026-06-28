import React from 'react';
import { Shield, Users, Clock, Zap } from 'lucide-react';

const WhyChooseUsSection = () => {
  const reasons = [
    {
      icon: Shield,
      title: 'Evidence-Based',
      description: 'Recommendations based on scientific research and traditional wisdom'
    },
    {
      icon: Users,
      title: 'Expert Network',
      description: 'Connect with qualified healthcare professionals worldwide'
    },
    {
      icon: Clock,
      title: 'Available 24/7',
      description: 'Get instant guidance anytime, anywhere on your mobile device'
    },
    {
      icon: Zap,
      title: 'Personalized',
      description: 'AI-powered recommendations tailored to your unique health profile'
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-slideUp">
          <h2 className="section-title">Why Choose Sidayu?</h2>
          <p className="section-subtitle">The most trusted AI health companion</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {reasons.map((reason, idx) => {
            const Icon = reason.icon;
            return (
              <div key={idx} className="flex gap-6 p-6 bg-light-gray rounded-xl hover:bg-health-light transition-colors">
                <Icon className="h-12 w-12 text-health-green flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-bold text-slate mb-2">{reason.title}</h3>
                  <p className="text-gray-600">{reason.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
