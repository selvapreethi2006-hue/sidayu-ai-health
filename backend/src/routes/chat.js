const express = require('express');
const router = express.Router();
const OrchestratorAgent = require('../agents/orchestrator');
const SafetyAgent = require('../agents/safetyAgent');

const orchestrator = new OrchestratorAgent();
const safetyAgent = new SafetyAgent();

router.post('/', async (req, res) => {
  try {
    const { message, history } = req.body;

    if (!message) {
      return res.status(400).json({ error: 'Message is required' });
    }

    const emergencyCheck = safetyAgent.checkForEmergency(message);
    if (emergencyCheck.isEmergency) {
      return res.status(200).json({
        response: emergencyCheck.message + '\n' + emergencyCheck.action,
        type: 'emergency',
      });
    }

    const response = await orchestrator.processUserRequest(message, history);

    res.json({
      response: response.message,
      type: response.type,
      timestamp: new Date(),
    });
  } catch (error) {
    console.error('Chat error:', error);
    res.status(500).json({ error: 'Failed to process message' });
  }
});

module.exports = router;
