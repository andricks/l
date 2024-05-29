const express = require('express');
const admin = require('firebase-admin');
const bodyParser = require('body-parser');
const app = express();
const RutasVehiculo = require('./Rutas/RutasVehiculo');
const RutsaCliente = require('./Rutas/RutasCliente')
const corsMiddleware = require('./CMiddleware/CorsMiddleware');
const formularioVehiculoRoutes = require('./Rutas/RutasFormularioVehiculo');
const cors = require('cors');
// cors
app.use(corsMiddleware);
app.use(cors());

// Middleware para analizar el cuerpo de la solicitud en formato JSON
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Rutas del formulario de vehículo
app.use(RutasVehiculo);
app.use(RutsaCliente);
app.use(formularioVehiculoRoutes);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`El servidor está corriendo en el puerto ${PORT}`);
});
