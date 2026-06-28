import React, { useState } from 'react';
import { BookOpen } from 'lucide-react';

const KnowledgeBase = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const treatments = [
    {
      id: 1,
      name: 'Siddha Medicine',
      icon: '🌿',
      description: 'Ancient Tamil medical system focusing on balance and natural remedies',
      benefits: [
        'Holistic approach to wellness',
        'Natural herbal treatments',
        'Preventive care emphasis',
        'Personalized healing'
      ],
      details: 'Siddha medicine is one of the oldest medical systems in the world, originating in Tamil Nadu, India. It emphasizes the balance of body elements and uses natural herbs, minerals, and metals for treatment.'
    },
    {
      id: 2,
      name: 'Ayurveda',
      icon: '🍃',
      description: 'Traditional Indian medicine system based on three doshas (body energies)',
      benefits: [
        'Balances body doshas',
        'Promotes digestive health',
        'Supports mental clarity',
        'Strengthens immunity'
      ],
      details: 'Ayurveda, meaning "science of life" in Sanskrit, is a 5000-year-old healing system that treats the whole person through personalized herbal remedies, oils, and lifestyle practices.'
    },
    {
      id: 3,
      name: 'Yoga & Meditation',
      icon: '🧘',
      description: 'Physical and mental practices for body-mind wellness',
      benefits: [
        'Improves flexibility',
        'Reduces stress and anxiety',
        'Enhances breathing',
        'Promotes inner peace'
      ],
      details: 'Yoga combines physical postures (asanas), breathing techniques (pranayama), and meditation to create harmony between body and mind, promoting overall wellness.'
    },
    {
      id: 4,
      name: 'Unani Medicine',
      icon: '⚗️',
      description: 'Greek and Islamic medical tradition emphasizing body humors balance',
      benefits: [
        'Balances body humors',
        'Natural herbal remedies',
        'Detoxification support',
        'Chronic disease management'
      ],
      details: 'Unani medicine, derived from Greek and Persian traditions, focuses on maintaining the balance of four body humors. It uses natural compounds and lifestyle modifications.'
    },
    {
      id: 5,
      name: 'Acupuncture',
      icon: '🧵',
      description: 'Chinese medicine technique using needle insertion for pain relief',
      benefits: [
        'Pain management',
        'Improves energy flow',
        'Reduces inflammation',
        'Supports recovery'
      ],
      details: 'Acupuncture is a key component of Traditional Chinese Medicine that works by stimulating specific points on the body to balance qi (life energy) and promote healing.'
    },
    {
      id: 6,
      name: 'Lifestyle Wellness',
      icon: '💚',
      description: 'Holistic approach combining diet, exercise, and daily habits',
      benefits: [
        'Prevents chronic diseases',
        'Maintains healthy weight',
        'Boosts energy levels',
        'Improves sleep quality'
      ],
      details: 'Lifestyle wellness encompasses nutrition, regular exercise, stress management, sleep hygiene, and healthy habits that form the foundation of long-term health.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-light-gray to-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-slideUp">
          <h1 className="text-5xl font-bold text-slate mb-4">
            Natural Treatment Knowledge Base
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore evidence-based information on traditional and natural wellness approaches
          </p>
        </div>

        {/* Treatment Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {treatments.map((treatment) => (
            <div
              key={treatment.id}
              onClick={() => setSelectedCategory(treatment.id)}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all cursor-pointer transform hover:scale-105"
            >
              {/* Icon section */}
              <div className="bg-gradient-light h-24 flex items-center justify-center text-6xl">
                {treatment.icon}
              </div>
              
              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate mb-2">{treatment.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{treatment.description}</p>
                
                {/* Benefits preview */}
                <div className="space-y-2 mb-4">
                  {treatment.benefits.slice(0, 2).map((benefit, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm">
                      <span className="text-health-green">✓</span>
                      <span className="text-gray-600">{benefit}</span>
                    </div>
                  ))}
                  <p className="text-xs text-health-green font-semibold">+{treatment.benefits.length - 2} more benefits</p>
                </div>

                {/* Button */}
                <button className="btn-outline w-full">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Detail Modal */}
        {selectedCategory && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-xl max-w-2xl w-full max-h-96 overflow-y-auto animate-slideUp">
              {(() => {
                const treatment = treatments.find(t => t.id === selectedCategory);
                return (
                  <div>
                    {/* Header */}
                    <div className="bg-gradient-light p-8 flex items-center gap-4">
                      <span className="text-5xl">{treatment.icon}</span>
                      <div>
                        <h2 className="text-3xl font-bold text-slate">{treatment.name}</h2>
                        <p className="text-gray-600">{treatment.description}</p>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-8">
                      <p className="text-gray-700 mb-6 leading-relaxed">{treatment.details}</p>
                      
                      <div className="mb-6">
                        <h4 className="text-lg font-bold text-slate mb-4">Key Benefits:</h4>
                        <div className="grid md:grid-cols-2 gap-3">
                          {treatment.benefits.map((benefit, idx) => (
                            <div key={idx} className="flex items-start gap-3 bg-light-gray p-3 rounded">
                              <span className="text-health-green text-xl mt-1">✓</span>
                              <span className="text-gray-700">{benefit}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Action buttons */}
                      <div className="flex gap-4">
                        <button className="btn-primary flex-1">
                          Book Consultation
                        </button>
                        <button
                          onClick={() => setSelectedCategory(null)}
                          className="btn-secondary flex-1"
                        >
                          Close
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })()}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default KnowledgeBase;
