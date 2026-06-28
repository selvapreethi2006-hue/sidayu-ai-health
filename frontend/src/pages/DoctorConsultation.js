import React, { useState } from 'react';
import { MapPin, Clock, Star, Calendar } from 'lucide-react';

const DoctorConsultation = () => {
  const [selectedDoctor, setSelectedDoctor] = useState(null);

  const doctors = [
    {
      id: 1,
      name: 'Dr. Sarah Johnson',
      specialization: 'Ayurvedic Medicine',
      rating: 4.9,
      reviews: 234,
      location: 'Mumbai, India',
      experience: '15+ years',
      availableSlots: ['10:00 AM', '2:00 PM', '4:00 PM'],
      consultationFee: '$30',
      about: 'Specialized in Ayurvedic treatments with a focus on chronic disease management'
    },
    {
      id: 2,
      name: 'Dr. Raj Patel',
      specialization: 'Siddha Medicine',
      rating: 4.8,
      reviews: 189,
      location: 'Chennai, India',
      experience: '18+ years',
      availableSlots: ['9:00 AM', '1:00 PM', '5:00 PM'],
      consultationFee: '$25',
      about: 'Expert in traditional Siddha medicine and herbal remedies'
    },
    {
      id: 3,
      name: 'Dr. Emily Chen',
      specialization: 'Acupuncture & TCM',
      rating: 4.7,
      reviews: 156,
      location: 'New York, USA',
      experience: '12+ years',
      availableSlots: ['11:00 AM', '3:00 PM', '6:00 PM'],
      consultationFee: '$45',
      about: 'Certified acupuncturist and Traditional Chinese Medicine practitioner'
    },
    {
      id: 4,
      name: 'Dr. Amira Hassan',
      specialization: 'Unani Medicine',
      rating: 4.9,
      reviews: 201,
      location: 'Dubai, UAE',
      experience: '16+ years',
      availableSlots: ['10:30 AM', '2:30 PM', '4:30 PM'],
      consultationFee: '$35',
      about: 'Specialist in Unani healing practices and natural remedies'
    },
    {
      id: 5,
      name: 'Dr. Michael Rodriguez',
      specialization: 'Yoga Therapy',
      rating: 4.6,
      reviews: 142,
      location: 'California, USA',
      experience: '10+ years',
      availableSlots: ['9:30 AM', '3:30 PM', '5:30 PM'],
      consultationFee: '$40',
      about: 'Certified yoga therapist focusing on wellness and preventive care'
    },
    {
      id: 6,
      name: 'Dr. Priya Sharma',
      specialization: 'General Wellness',
      rating: 4.8,
      reviews: 267,
      location: 'Bangalore, India',
      experience: '14+ years',
      availableSlots: ['10:00 AM', '2:00 PM', '6:00 PM'],
      consultationFee: '$20',
      about: 'Holistic wellness expert with focus on lifestyle and preventive medicine'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-light-gray to-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-slideUp">
          <h1 className="text-5xl font-bold text-slate mb-4">
            Connect with Healthcare Professionals
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Book consultations with qualified doctors and wellness experts
          </p>
        </div>

        {/* Doctor Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {doctors.map((doctor) => (
            <div
              key={doctor.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              {/* Header */}
              <div className="bg-gradient-health h-24 flex items-end p-4">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-3xl border-4 border-health-green absolute -bottom-8">
                  👨‍⚕️
                </div>
              </div>

              {/* Content */}
              <div className="p-6 pt-12">
                <h3 className="text-xl font-bold text-slate mb-1">{doctor.name}</h3>
                <p className="text-health-green font-semibold text-sm mb-3">{doctor.specialization}</p>

                {/* Rating */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 text-yellow-400"
                        fill="currentColor"
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">{doctor.rating} ({doctor.reviews} reviews)</span>
                </div>

                {/* Details */}
                <div className="space-y-2 text-sm text-gray-600 mb-4">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-health-green" />
                    <span>{doctor.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-health-green" />
                    <span>{doctor.experience}</span>
                  </div>
                </div>

                {/* Fee */}
                <div className="bg-light-gray rounded p-3 mb-4">
                  <p className="text-sm text-gray-600">Consultation Fee</p>
                  <p className="text-2xl font-bold text-health-green">{doctor.consultationFee}</p>
                </div>

                {/* Button */}
                <button
                  onClick={() => setSelectedDoctor(doctor.id)}
                  className="btn-primary w-full"
                >
                  <Calendar className="h-4 w-4 inline mr-2" />
                  Book Appointment
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Booking Modal */}
        {selectedDoctor && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-xl max-w-md w-full animate-slideUp">
              {(() => {
                const doctor = doctors.find(d => d.id === selectedDoctor);
                return (
                  <div>
                    {/* Header */}
                    <div className="bg-gradient-health text-white p-6">
                      <h2 className="text-2xl font-bold mb-2">{doctor.name}</h2>
                      <p className="text-health-light">{doctor.specialization}</p>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <p className="text-gray-600 mb-6">{doctor.about}</p>
                      
                      <div className="mb-6">
                        <label className="block text-sm font-bold text-slate mb-2">Select Time Slot</label>
                        <div className="space-y-2">
                          {doctor.availableSlots.map((slot, idx) => (
                            <button
                              key={idx}
                              className="w-full border-2 border-health-green text-health-green rounded-lg py-2 hover:bg-health-light transition-colors"
                            >
                              {slot}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Contact form */}
                      <input
                        type="text"
                        placeholder="Your Name"
                        className="w-full border border-gray-300 rounded px-3 py-2 mb-3"
                      />
                      <input
                        type="email"
                        placeholder="Your Email"
                        className="w-full border border-gray-300 rounded px-3 py-2 mb-3"
                      />
                      <textarea
                        placeholder="Describe your concern"
                        className="w-full border border-gray-300 rounded px-3 py-2 mb-6 h-24"
                      />

                      {/* Buttons */}
                      <div className="flex gap-3">
                        <button className="btn-primary flex-1">
                          Confirm Booking
                        </button>
                        <button
                          onClick={() => setSelectedDoctor(null)}
                          className="btn-secondary flex-1"
                        >
                          Cancel
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

export default DoctorConsultation;
