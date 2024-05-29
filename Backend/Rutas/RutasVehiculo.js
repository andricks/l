const express = require('express');
const router = express.Router();
const vehicleController = require('../Controllers/ControllerVehiculo');

// Ruta para crear un vehículo
router.post('/vehicles', vehicleController.createVehicle);

// Ruta para obtener todos los vehículos
router.get('/vehicles', vehicleController.getVehicles);

// Ruta para obtener un vehículo por su ID
router.get('/vehicles/:id', vehicleController.getVehicleById);

// Ruta para actualizar un vehículo por su ID
router.put('/vehicles/:id', vehicleController.updateVehicleById);

// Ruta para eliminar un vehículo por su ID
router.delete('/vehicles/:id', vehicleController.deleteVehicleById);

module.exports = router;
