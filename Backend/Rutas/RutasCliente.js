// Rutas para clientes (Rutas/RutasCliente.js)
const express = require('express');
const router = express.Router();
const clienteController = require('../Controllers/ControllerCliente');

// Ruta para crear un cliente
router.post('/clientes', clienteController.createCliente);

// Ruta para obtener todos los clientes
router.get('/clientes', clienteController.getClientes);

// Ruta para obtener un cliente por su ID
router.get('/clientes/:id', clienteController.getClienteById);

// Ruta para actualizar un cliente por su ID
router.put('/clientes/:id', clienteController.updateClienteById);

// Ruta para eliminar un cliente por su ID
router.delete('/clientes/:id', clienteController.deleteClienteById);

module.exports = router;
