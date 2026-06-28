import React, { useState, useRef, useEffect } from 'react';
import { Send, AlertCircle } from 'lucide-react';
import api from '../services/api';

const ChatInterface = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'bot',
      content: 'Hello! I\'m your AI Health Companion. I\'m here to help you understand your health concerns and provide wellness guidance.\n\n⚠️ Remember: I provide educational information only. Always consult qualified healthcare professionals for medical decisions.\n\nTell me, what health concern brings you here today?',
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [showAssessment, setShowAssessment] = useState(false);
  const [assessmentData, setAssessmentData] = useState({
    age: '',
    symptoms: '',
    duration: '',
    lifestyle: '',
    previousConditions: '',
  });
  const messagesEnd = useRef(null);

  useEffect(() => {
    messagesEnd.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = {
      id: messages.length + 1,
      type: 'user',
      content: input,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setLoading(true);

    try {
      const response = await api.post('/api/chat', {
        message: input,
        history: messages,
      });

      const botMessage = {
        id: messages.length + 2,
        type: 'bot',
        content: response.data.response,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      const errorMessage = {
        id: messages.length + 2,
        type: 'bot',
        content:
          'I encountered an error processing your message. Please try again.',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setLoading(false);
    }
  };

  const handleAssessment = async () => {
    if (
      !assessmentData.age ||
      !assessmentData.symptoms ||
      !assessmentData.duration
    ) {
      alert('Please fill in all required fields');
      return;
    }

    setLoading(true);
    try {
      const response = await api.post('/api/health-assessment', assessmentData);
      const botMessage = {
        id: messages.length + 1,
        type: 'bot',
        content: response.data.assessment,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMessage]);
      setShowAssessment(false);
      setAssessmentData({
        age: '',
        symptoms: '',
        duration: '',
        lifestyle: '',
        previousConditions: '',
      });
    } catch (error) {
      alert('Error processing assessment. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-screen bg-light-gray">
      {/* Header */}
      <div className="bg-gradient-health text-white p-6 shadow-lg">
        <h1 className="text-3xl font-bold">AI Health Assistant</h1>
        <p className="text-health-light mt-2">
          Your personal guide to wellness and health understanding
        </p>
      </div>

      {/* Disclaimer Banner */}
      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
        <div className="flex items-start gap-3">
          <AlertCircle className="h-5 w-5 text-yellow-600 flex-shrink-0 mt-0.5" />
          <p className="text-sm text-yellow-800">
            <strong>Disclaimer:</strong> This AI provides educational guidance only. It is not a substitute for professional medical advice. Always consult a qualified healthcare professional.
          </p>
        </div>
      </div>

      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto p-6 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-md lg:max-w-2xl px-4 py-3 rounded-lg ${
                message.type === 'user'
                  ? 'bg-health-green text-white rounded-br-none'
                  : 'bg-white text-slate shadow-md rounded-bl-none'
              }`}
            >
              <p className="whitespace-pre-wrap">{message.content}</p>
              <p className={`text-xs mt-2 ${
                message.type === 'user' ? 'text-health-light' : 'text-gray-500'
              }`}>
                {message.timestamp.toLocaleTimeString()}
              </p>
            </div>
          </div>
        ))}
        {loading && (
          <div className="flex justify-start">
            <div className="bg-white text-slate px-4 py-3 rounded-lg rounded-bl-none shadow-md">
              <div className="flex gap-2">
                <div className="h-2 w-2 bg-health-green rounded-full animate-bounce"></div>
                <div className="h-2 w-2 bg-health-green rounded-full animate-bounce delay-100"></div>
                <div className="h-2 w-2 bg-health-green rounded-full animate-bounce delay-200"></div>
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEnd} />
      </div>

      {/* Assessment Form */}
      {showAssessment && (
        <div className="bg-white border-t border-gray-200 p-6 max-h-64 overflow-y-auto">
          <h3 className="font-bold text-slate mb-4">Health Assessment Form</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="number"
              placeholder="Age"
              value={assessmentData.age}
              onChange={(e) =>
                setAssessmentData({ ...assessmentData, age: e.target.value })
              }
              className="border border-gray-300 rounded px-3 py-2"
            />
            <input
              type="text"
              placeholder="Primary Symptoms"
              value={assessmentData.symptoms}
              onChange={(e) =>
                setAssessmentData({ ...assessmentData, symptoms: e.target.value })
              }
              className="border border-gray-300 rounded px-3 py-2"
            />
            <input
              type="text"
              placeholder="Duration (e.g., 2 weeks)"
              value={assessmentData.duration}
              onChange={(e) =>
                setAssessmentData({ ...assessmentData, duration: e.target.value })
              }
              className="border border-gray-300 rounded px-3 py-2"
            />
            <input
              type="text"
              placeholder="Lifestyle (e.g., sedentary, active)"
              value={assessmentData.lifestyle}
              onChange={(e) =>
                setAssessmentData({ ...assessmentData, lifestyle: e.target.value })
              }
              className="border border-gray-300 rounded px-3 py-2"
            />
            <input
              type="text"
              placeholder="Previous Conditions (optional)"
              value={assessmentData.previousConditions}
              onChange={(e) =>
                setAssessmentData({
                  ...assessmentData,
                  previousConditions: e.target.value,
                })
              }
              className="border border-gray-300 rounded px-3 py-2 md:col-span-2"
            />
          </div>
          <div className="flex gap-2 mt-4">
            <button
              onClick={handleAssessment}
              className="btn-primary flex-1"
              disabled={loading}
            >
              {loading ? 'Processing...' : 'Submit Assessment'}
            </button>
            <button
              onClick={() => setShowAssessment(false)}
              className="btn-secondary flex-1"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {/* Input Area */}
      <div className="bg-white border-t border-gray-200 p-4">
        <div className="max-w-7xl mx-auto flex gap-4">
          <button
            onClick={() => setShowAssessment(!showAssessment)}
            className="btn-secondary whitespace-nowrap"
          >
            {showAssessment ? 'Chat' : 'Assessment'}
          </button>
          {!showAssessment && (
            <div className="flex-1 flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Describe your health concern..."
                className="flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-health-green"
                disabled={loading}
              />
              <button
                onClick={handleSendMessage}
                disabled={loading}
                className="btn-primary"
              >
                <Send className="h-5 w-5" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChatInterface;
