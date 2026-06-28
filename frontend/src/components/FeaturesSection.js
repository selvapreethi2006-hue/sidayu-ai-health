import React from 'react';
import { MessageSquare, BookOpen, Users, Shield, Zap, BarChart3 } from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      icon: MessageSquare,
      title: 'AI Chat Assistant',
      description: 'Real-time conversation with intelligent AI to understand your health concerns'
    },
    {
      icon: BookOpen,
      title: 'Wellness Knowledge',
      description: 'Learn about Siddha, Ayurveda, Yoga, Unani, and natural treatment approaches'
    },
    {
      icon: Users,
      title: 'Doctor Network',
      description: 'Connect with qualified healthcare professionals for expert consultation'
    },
    {
      icon: Shield,
      title: 'Safety Checks',
      description: 'Emergency symptom detection with immediate professional recommendations'
    },
    {
      icon: Zap,
      title: 'Personalized Tips',
      description: 'Get wellness recommendations tailored to your lifestyle and concerns'
    },
    {
      icon: BarChart3,
      title: 'Health Tracking',
      description: 'Monitor your wellness journey with insights and progress tracking'
    },
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-slideUp">
          <h2 className="section-title">Powerful Features</h2>
          <p className="section-subtitle">Everything you need for comprehensive health guidance</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="card hover:border-health-green border-2 border-transparent">
                <Icon className="h-12 w-12 text-health-green mb-4" />
                <h3 className="text-xl font-bold text-slate mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
