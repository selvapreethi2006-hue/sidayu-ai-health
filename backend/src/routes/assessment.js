const express = require('express');
const router = express.Router();
const SafetyAgent = require('../agents/safetyAgent');
const RecommendationAgent = require('../agents/recommendationAgent');

const safetyAgent = new SafetyAgent();
const recommendationAgent = new RecommendationAgent();

router.post('/', async (req, res) => {
  try {
    const { age, symptoms, duration, lifestyle, previousConditions } = req.body;

    if (!symptoms || !duration) {
      return res.status(400).json({ error: 'Symptoms and duration are required' });
    }

    const userData = { age, symptoms, duration, lifestyle, previousConditions };

    const emergencyCheck = safetyAgent.checkForEmergency(symptoms);
    if (emergencyCheck.isEmergency) {
      return res.json({
        assessment: emergencyCheck.message,
        type: 'emergency',
        action: 'SEEK IMMEDIATE MEDICAL HELP',
      });
    }

    const recommendations = recommendationAgent.generateRecommendations(userData);

    const assessment = {
      timestamp: new Date(),
      userProfile: { age, lifestyle },
      severity: symptoms.length > 50 ? 'medium' : 'low',
      recommendations,
      disclaimer: '⚠️ This is educational guidance only. Always consult qualified healthcare professionals for medical decisions.',
    };

    res.json({ assessment });
  } catch (error) {
    console.error('Assessment error:', error);
    res.status(500).json({ error: 'Failed to process assessment' });
  }
});

module.exports = router;
