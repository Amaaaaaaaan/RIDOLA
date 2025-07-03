const captainModel = require('../models/captain.model');
const captainService = require('../services/captain.service');
const { validationResult } = require('express-validator');

module.exports.createCaptain = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { fullname, email, password, vehicle, location } = req.body;

  try {
    const isCaptainExists = await captainModel.findOne({ email });
    if (isCaptainExists) {
      return res.status(400).json({ message: 'Captain already exists' });
    }

    const hashedPassword = await captainModel.hashedPassword(password);

    const captain = await captainService.createCaptain({
      firstname: fullname.firstname,
      lastname: fullname.lastname,
      email,
      password: hashedPassword,
      vehicle: true, // just to satisfy service check
      color: vehicle.color,
      plate: vehicle.plate,
      capacity: vehicle.capacity,
      vehicleType: vehicle.vehicleType,
      lat: location?.lat,
      lng: location?.lng
    });

    const token = captain.generateAuthToken();

    res.status(201).json({ token, captain });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
