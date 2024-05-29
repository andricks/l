const express = require('express');
const router = express.Router();
const FormularioVehiculo = require('../Controllers/FormularioVehiculo');

// Ruta para guardar cliente, vehículo y formulario de vehículo
router.post('/formulario', FormularioVehiculo.createFormularioVehiculo);

// Ruta para obtener un formulario y los datos del cliente y vehículo relacionados
router.get('/formulario/:placa', FormularioVehiculo.getFormularioByPlaca);


router.put('/formulario/:placa', FormularioVehiculo.updateFormularioByPlaca );


router.delete('/formulario/:placa', FormularioVehiculo.deleteFormularioAndVehiculoVehiculoByPlaca );

router.get('/formularioCompleto/:placa', FormularioVehiculo.getFormularioCompleto);

module.exports = router;
