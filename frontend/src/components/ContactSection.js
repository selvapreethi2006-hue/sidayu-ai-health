import React, { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section className="py-20 bg-gradient-to-br from-health-green to-health-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="animate-slideUp">
            <h2 className="text-4xl font-bold mb-6">Get in Touch</h2>
            <p className="text-health-light mb-8 text-lg">
              Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>

            <div className="space-y-6">
              <div className="flex gap-4">
                <Mail className="h-6 w-6 flex-shrink-0" />
                <div>
                  <p className="font-semibold">Email</p>
                  <p className="text-health-light">support@sidayuhealth.com</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Phone className="h-6 w-6 flex-shrink-0" />
                <div>
                  <p className="font-semibold">Phone</p>
                  <p className="text-health-light">+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="flex gap-4">
                <MapPin className="h-6 w-6 flex-shrink-0" />
                <div>
                  <p className="font-semibold">Address</p>
                  <p className="text-health-light">123 Wellness Street<br />Health City, HC 12345</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-4 animate-slideUp" style={{ animationDelay: '0.1s' }}>
            {submitted && (
              <div className="bg-green-500 text-white p-4 rounded-lg mb-4">
                ✓ Thank you! Your message has been sent successfully.
              </div>
            )}
            <div>
              <label className="block text-sm font-semibold mb-2">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-white bg-opacity-20 text-white placeholder-health-light focus:outline-none focus:bg-opacity-30"
                placeholder="Your name"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-white bg-opacity-20 text-white placeholder-health-light focus:outline-none focus:bg-opacity-30"
                placeholder="your@email.com"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2">Subject</label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-white bg-opacity-20 text-white placeholder-health-light focus:outline-none focus:bg-opacity-30"
                placeholder="Subject"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-white bg-opacity-20 text-white placeholder-health-light focus:outline-none focus:bg-opacity-30 h-32"
                placeholder="Your message"
                required
              />
            </div>
            <button type="submit" className="btn-primary w-full">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
