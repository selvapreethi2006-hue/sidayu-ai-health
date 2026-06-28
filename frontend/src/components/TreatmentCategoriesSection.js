import React from 'react';
import { Leaf, Heart, Brain } from 'lucide-react';

const TreatmentCategoriesSection = () => {
  const categories = [
    { icon: Leaf, name: 'Traditional Medicine', count: '5 Systems' },
    { icon: Heart, name: 'Wellness Practices', count: '6 Approaches' },
    { icon: Brain, name: 'Mental Health', count: '4 Methods' },
  ];

  return (
    <section className="py-20 bg-light-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-slideUp">
          <h2 className="section-title">Healthcare Categories</h2>
          <p className="section-subtitle">Explore diverse natural wellness approaches</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {categories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <div key={idx} className="bg-white rounded-xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow">
                <Icon className="h-16 w-16 text-health-green mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-slate mb-2">{cat.name}</h3>
                <p className="text-health-green font-semibold mb-6">{cat.count}</p>
                <button className="btn-outline">
                  Explore
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TreatmentCategoriesSection;
