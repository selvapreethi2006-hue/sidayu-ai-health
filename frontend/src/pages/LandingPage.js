import React from 'react';
import HeroSection from '../components/HeroSection';
import FeaturesSection from '../components/FeaturesSection';
import HowItWorksSection from '../components/HowItWorksSection';
import TreatmentCategoriesSection from '../components/TreatmentCategoriesSection';
import WhyChooseUsSection from '../components/WhyChooseUsSection';
import DisclaimerSection from '../components/DisclaimerSection';
import ContactSection from '../components/ContactSection';

const LandingPage = () => {
  return (
    <div className="bg-white">
      <HeroSection />
      <HowItWorksSection />
      <FeaturesSection />
      <TreatmentCategoriesSection />
      <WhyChooseUsSection />
      <DisclaimerSection />
      <ContactSection />
    </div>
  );
};

export default LandingPage;
