import React from 'react';
import { AlertCircle } from 'lucide-react';

const DisclaimerSection = () => {
  return (
    <section className="py-16 bg-red-50 border-t-4 border-red-500">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-start gap-4">
          <AlertCircle className="h-8 w-8 text-red-600 flex-shrink-0 mt-1" />
          <div>
            <h3 className="text-2xl font-bold text-red-800 mb-4">⚠️ Important Medical Disclaimer</h3>
            <p className="text-red-700 mb-4 text-lg font-semibold">
              This application provides educational guidance ONLY. It is NOT a medical diagnosis system.
            </p>
            <div className="space-y-2 text-red-700">
              <p>❌ <strong>Does NOT diagnose</strong> medical conditions</p>
              <p>❌ <strong>Does NOT replace</strong> professional medical advice</p>
              <p>❌ <strong>Does NOT treat or cure</strong> diseases</p>
              <p className="mt-4">✅ Provides educational health information</p>
              <p>✅ Helps users understand general wellness</p>
              <p>✅ Encourages consultation with healthcare professionals</p>
            </div>
            <p className="text-red-800 font-bold mt-6">
              Always consult a qualified healthcare professional for medical decisions. In case of medical emergency, call your local emergency number immediately.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DisclaimerSection;
