import React from 'react';
import { Brain, Database, AlertTriangle, Stethoscope, Zap } from 'lucide-react';

const AgentWorkflow = () => {
  const agents = [
    {
      id: 1,
      name: 'Orchestrator Agent',
      icon: Zap,
      color: 'from-blue-500 to-blue-600',
      description: 'Receives user requests and delegates tasks to specialized agents',
      responsibilities: [
        'Parse user input',
        'Route to appropriate agents',
        'Coordinate agent responses',
        'Generate final recommendations'
      ]
    },
    {
      id: 2,
      name: 'Symptom Analysis Agent',
      icon: Brain,
      color: 'from-green-500 to-green-600',
      description: 'Analyzes health symptoms and collects relevant health information',
      responsibilities: [
        'Understand symptoms',
        'Ask clarifying questions',
        'Collect medical history',
        'Identify patterns'
      ]
    },
    {
      id: 3,
      name: 'Knowledge Agent',
      icon: Database,
      color: 'from-purple-500 to-purple-600',
      description: 'Searches healthcare knowledge base and retrieves relevant information',
      responsibilities: [
        'Search medical database',
        'Find relevant articles',
        'Retrieve treatment options',
        'Provide evidence-based info'
      ]
    },
    {
      id: 4,
      name: 'Safety Agent',
      icon: AlertTriangle,
      color: 'from-red-500 to-red-600',
      description: 'Detects emergency symptoms and triggers immediate professional help',
      responsibilities: [
        'Monitor for emergencies',
        'Detect warning signs',
        'Recommend immediate help',
        'Provide emergency contacts'
      ]
    },
    {
      id: 5,
      name: 'Recommendation Agent',
      icon: Stethoscope,
      color: 'from-amber-500 to-amber-600',
      description: 'Provides personalized wellness suggestions and doctor referrals',
      responsibilities: [
        'Analyze all information',
        'Create recommendations',
        'Suggest wellness tips',
        'Connect with doctors'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-light-gray to-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-slideUp">
          <h1 className="text-5xl font-bold text-slate mb-4">
            AI Agent Architecture
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Our multi-agent system works together to provide comprehensive health guidance
          </p>
        </div>

        {/* Architecture Diagram */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-16">
          <div className="space-y-8">
            {/* Step 1: User Input */}
            <div className="flex items-center gap-4">
              <div className="flex-shrink-0 w-20 h-20 bg-blue-100 rounded-lg flex items-center justify-center">
                <span className="text-2xl font-bold text-blue-600">👤</span>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold text-slate">1. User Input</h3>
                <p className="text-gray-600">User describes their health concern</p>
              </div>
            </div>

            {/* Arrow */}
            <div className="flex justify-center">
              <div className="h-8 w-1 bg-gradient-health"></div>
            </div>

            {/* Step 2: Orchestrator */}
            <div className="flex items-center gap-4">
              <div className="flex-shrink-0 w-20 h-20 bg-gradient-health rounded-lg flex items-center justify-center text-white font-bold">🎯</div>
              <div className="flex-1">
                <h3 className="text-lg font-bold text-slate">2. Orchestrator Agent</h3>
                <p className="text-gray-600">Routes request to appropriate agents</p>
              </div>
            </div>

            {/* Arrow */}
            <div className="flex justify-center">
              <div className="h-8 w-1 bg-gradient-health"></div>
            </div>

            {/* Step 3: Parallel Processing */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-green-50 rounded-lg p-4 border-l-4 border-green-500">
                <h4 className="font-bold text-green-700 mb-2">Symptom Analysis</h4>
                <p className="text-sm text-gray-600">Understand symptoms and history</p>
              </div>
              <div className="bg-purple-50 rounded-lg p-4 border-l-4 border-purple-500">
                <h4 className="font-bold text-purple-700 mb-2">Knowledge Search</h4>
                <p className="text-sm text-gray-600">Query medical databases</p>
              </div>
              <div className="bg-red-50 rounded-lg p-4 border-l-4 border-red-500">
                <h4 className="font-bold text-red-700 mb-2">Safety Check</h4>
                <p className="text-sm text-gray-600">Detect emergency symptoms</p>
              </div>
            </div>

            {/* Arrow */}
            <div className="flex justify-center">
              <div className="h-8 w-1 bg-gradient-health"></div>
            </div>

            {/* Step 4: Recommendations */}
            <div className="flex items-center gap-4">
              <div className="flex-shrink-0 w-20 h-20 bg-amber-100 rounded-lg flex items-center justify-center text-2xl">💡</div>
              <div className="flex-1">
                <h3 className="text-lg font-bold text-slate">3. Personalized Recommendations</h3>
                <p className="text-gray-600">Wellness tips and doctor referrals</p>
              </div>
            </div>
          </div>
        </div>

        {/* Agent Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {agents.map((agent) => {
            const Icon = agent.icon;
            return (
              <div
                key={agent.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                {/* Color header */}
                <div className={`h-2 bg-gradient-to-r ${agent.color}`}></div>
                
                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`p-3 rounded-lg bg-gradient-to-r ${agent.color}`}>
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-slate">{agent.name}</h3>
                  </div>
                  
                  <p className="text-gray-600 mb-4 text-sm">{agent.description}</p>
                  
                  <div className="space-y-2">
                    <p className="text-xs font-semibold text-health-green uppercase">Responsibilities:</p>
                    <ul className="space-y-1">
                      {agent.responsibilities.map((resp, idx) => (
                        <li key={idx} className="text-sm text-gray-600 flex items-start gap-2">
                          <span className="text-health-green mt-1">•</span>
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Key Features */}
        <div className="mt-16 bg-gradient-health rounded-xl p-8 text-white">
          <h3 className="text-2xl font-bold mb-6">Why Multi-Agent Architecture?</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-bold mb-2 text-lg">✓ Specialization</h4>
              <p>Each agent is optimized for specific tasks, improving accuracy and performance</p>
            </div>
            <div>
              <h4 className="font-bold mb-2 text-lg">✓ Scalability</h4>
              <p>Easy to add new agents or improve existing ones without affecting others</p>
            </div>
            <div>
              <h4 className="font-bold mb-2 text-lg">✓ Reliability</h4>
              <p>Safety checks and validation at multiple levels ensure user protection</p>
            </div>
            <div>
              <h4 className="font-bold mb-2 text-lg">✓ Transparency</h4>
              <p>Clear workflow shows users exactly how recommendations are generated</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgentWorkflow;
