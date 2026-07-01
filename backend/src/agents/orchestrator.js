/**
 * Orchestrator Agent
 * Main agent that coordinates all other agents
 */

class OrchestratorAgent {
  constructor() {
    this.name = 'Orchestrator Agent';
    this.description = 'Main coordinator that delegates tasks to specialized agents';
  }

  async processUserRequest(userMessage, history = []) {
    console.log(`[${this.name}] Processing request:`, userMessage);

    try {
      const intent = this.determineIntent(userMessage);
      console.log(`[${this.name}] Detected intent:`, intent);

      let response = {};
      switch (intent) {
        case 'symptom_analysis':
          response.type = 'analysis';
          response.message = `I understand you have a health concern. Let me ask you some clarifying questions to better understand your situation.\n\n1. How long have you been experiencing this symptom?\n2. On a scale of 1-10, how severe is it?\n3. Is it constant or occasional?\n4. Any recent changes in your lifestyle or diet?`;
          break;

        case 'knowledge_request':
          response.type = 'knowledge';
          response.message = `Based on your query, I can provide information on various wellness approaches including Ayurveda, Siddha medicine, Yoga, and natural remedies. Which area would you like to learn about?`;
          break;

        case 'doctor_booking':
          response.type = 'appointment';
          response.message = 'I can help you find and book an appointment with healthcare professionals. Would you like me to show available doctors?';
          break;

        case 'emergency':
          response.type = 'emergency';
          response.message = '⚠️ EMERGENCY: Based on your symptoms, please seek immediate medical attention. Call emergency services (911 in US, 112 in EU) or visit the nearest hospital immediately.';
          break;

        default:
          response.type = 'general';
          response.message = `Thank you for sharing. I'm here to help with your health concerns. Could you describe your symptoms or health question in more detail?`;
      }

      return response;
    } catch (error) {
      console.error(`[${this.name}] Error:`, error);
      return {
        type: 'error',
        message: 'I encountered an error processing your request. Please try again.',
      };
    }
  }

  determineIntent(userMessage) {
    const lowerMessage = userMessage.toLowerCase();

    if (/chest pain|can't breathe|severe bleeding|unconscious|emergency|911/.test(lowerMessage)) {
      return 'emergency';
    }

    if (/doctor|appointment|book|consult|specialist/.test(lowerMessage)) {
      return 'doctor_booking';
    }

    if (/how|what|explain|information|about|treatment|ayurveda|yoga|siddha/.test(lowerMessage)) {
      return 'knowledge_request';
    }

    if (/pain|ache|sick|ill|symptom|concern|problem|hurt/.test(lowerMessage)) {
      return 'symptom_analysis';
    }

    return 'general';
  }
}

module.exports = OrchestratorAgent;
