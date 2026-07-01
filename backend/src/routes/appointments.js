const express = require('express');
const router = express.Router();
const { v4: uuidv4 } = require('uuid');

let appointments = [];

router.post('/', (req, res) => {
  try {
    const { doctorId, patientName, patientEmail, timeSlot, concern } = req.body;

    if (!doctorId || !patientName || !patientEmail || !timeSlot) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const appointment = {
      id: uuidv4(),
      doctorId,
      patientName,
      patientEmail,
      timeSlot,
      concern,
      status: 'pending',
      createdAt: new Date(),
    };

    appointments.push(appointment);
    res.status(201).json({ message: 'Appointment booked successfully', appointment });
  } catch (error) {
    console.error('Appointment error:', error);
    res.status(500).json({ error: 'Failed to book appointment' });
  }
});

router.get('/', (req, res) => {
  res.json({ appointments, total: appointments.length });
});

router.get('/:id', (req, res) => {
  const appointment = appointments.find((a) => a.id === req.params.id);
  if (!appointment) {
    return res.status(404).json({ error: 'Appointment not found' });
  }
  res.json(appointment);
});

router.put('/:id', (req, res) => {
  const appointment = appointments.find((a) => a.id === req.params.id);
  if (!appointment) {
    return res.status(404).json({ error: 'Appointment not found' });
  }

  const { status, timeSlot } = req.body;
  if (status) appointment.status = status;
  if (timeSlot) appointment.timeSlot = timeSlot;

  res.json({ message: 'Appointment updated', appointment });
});

module.exports = router;
