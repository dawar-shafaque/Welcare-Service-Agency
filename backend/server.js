const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const { services } = require('./data/services');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Wellcare Service Agency API is running' });
});

app.get('/api/services', (req, res) => {
  res.json(services);
});

app.get('/api/services/:serviceId', (req, res) => {
  const service = services.find((item) => item.id === req.params.serviceId);

  if (!service) {
    return res.status(404).json({ message: 'Service not found' });
  }

  return res.json(service);
});

app.get('/api/services/:serviceId/subservices/:subServiceId', (req, res) => {
  const service = services.find((item) => item.id === req.params.serviceId);

  if (!service) {
    return res.status(404).json({ message: 'Service not found' });
  }

  const subService = service.subServices.find((item) => item.id === req.params.subServiceId);

  if (!subService) {
    return res.status(404).json({ message: 'Sub-service not found' });
  }

  return res.json(subService);
});

app.post('/api/booking', (req, res) => {
  const { name, phoneNumber, address, selectedService, selectedSubService } = req.body;

  if (!name || !phoneNumber || !address || !selectedService || !selectedSubService) {
    return res.status(400).json({ message: 'Missing required booking details' });
  }

  const summary = {
    selectedService,
    selectedSubService,
    name,
    phoneNumber,
    address,
    status: 'pending'
  };

  return res.status(200).json({
    success: true,
    message: 'Booking request recorded successfully.',
    summary
  });
});

app.listen(PORT, () => {
  console.log(`Wellcare API running on http://localhost:${PORT}`);
});
