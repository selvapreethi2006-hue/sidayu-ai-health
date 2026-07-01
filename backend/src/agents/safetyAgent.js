/**
 * Safety Agent
 * Detects emergency symptoms
 */

class SafetyAgent {
  constructor() {
    this.name = 'Safety Agent';
    this.description = 'Detects emergency symptoms and ensures user safety';
  }

  checkForEmergency(symptoms) {
    if (!symptoms) return { isEmergency: false, risk: 'low' };

    const symptomsLower = symptoms.toLowerCase();
    const emergencyKeywords = [
      'chest pain', 'difficulty breathing', 'severe bleeding',
      'loss of consciousness', 'severe allergic reaction',
      'can\'t breathe', 'unconscious'
    ];

    const hasEmergency = emergencyKeywords.some(keyword => symptomsLower.includes(keyword));

    if (hasEmergency) {
      return {
        isEmergency: true,
        risk: 'critical',
        message: '⚠️ CRITICAL: Based on your symptoms, please seek immediate emergency medical care.',
        action: 'Call emergency services immediately (911 in USA, 112 in EU)',
      };
    }

    return { isEmergency: false, risk: 'low' };
  }
}

module.exports = SafetyAgent;
