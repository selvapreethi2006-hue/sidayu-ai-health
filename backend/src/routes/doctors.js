const express = require('express');
const router = express.Router();

const doctors = [
  {
    id: 1,
    name: 'Dr. Sarah Johnson',
    specialization: 'Ayurvedic Medicine',
    location: 'Mumbai',
    rating: 4.9,
    consultationFee: 30,
  },
  {
    id: 2,
    name: 'Dr. Raj Patel',
    specialization: 'Siddha Medicine',
    location: 'Chennai',
    rating: 4.8,
    consultationFee: 25,
  },
  {
    id: 3,
    name: 'Dr. Emily Chen',
    specialization: 'Acupuncture',
    location: 'New York',
    rating: 4.7,
    consultationFee: 45,
  },
];

router.get('/', (req, res) => {
  const { specialization } = req.query;
  let filteredDoctors = doctors;
  
  if (specialization) {
    filteredDoctors = doctors.filter((d) =>
      d.specialization.toLowerCase().includes(specialization.toLowerCase())
    );
  }

  res.json({ doctors: filteredDoctors, total: filteredDoctors.length });
});

router.get('/:id', (req, res) => {
  const doctor = doctors.find((d) => d.id === parseInt(req.params.id));
  if (!doctor) {
    return res.status(404).json({ error: 'Doctor not found' });
  }
  res.json(doctor);
});

module.exports = router;
