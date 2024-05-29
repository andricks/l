const db = require('../database/dbConnection');
const admin = require('firebase-admin');

// Método para crear un nuevo vehículo

const uuid = require('uuid');

exports.createVehicle = async (req, res) => {
    const order = req.body;
    try {
        const { Placa, Marca, TipoDeVehiculo, Color, Combustion } = order;

        // Generar un ID único para la variable Placa
        const vehicleId = uuid.v4();

        // Guardar los datos en Firebase Realtime Database utilizando el ID generado
        const newVehicleRef = await admin.database().ref('vehicles').child(vehicleId).set({
            Placa,
            Marca,
            TipoDeVehiculo,
            Color,
            Combustion
        });

        res.status(201).json({ message: 'Datos del vehículo guardados exitosamente', id: vehicleId });
    } catch (error) {
        console.error('Error al guardar datos del vehículo:', error);
        res.status(500).json({ message: 'Error al guardar datos del vehículo' });
    }
};



// Método para obtener todos los vehículos
exports.getVehicles = async (req, res) => {
    try {
        const snapshot = await admin.database().ref('vehicles').once('value');
        const vehicles = snapshot.val();
        res.status(200).json(vehicles);
    } catch (error) {
        console.error('Error al obtener los vehículos:', error);
        res.status(500).json({ message: 'Error al obtener los vehículos' });
    }
};

// Método para obtener un vehículo por su ID
exports.getVehicleById = async (req, res) => {
    const vehicleId = req.params.id;

    try {
        const snapshot = await admin.database().ref('vehicles').child(vehicleId).once('value');
        const vehicle = snapshot.val();
        if (vehicle) {
            res.status(200).json(vehicle);
        } else {
            res.status(404).json({ message: 'Vehículo no encontrado' });
        }
    } catch (error) {
        console.error('Error al obtener el vehículo:', error);
        res.status(500).json({ message: 'Error al obtener el vehículo' });
    }
};

// Método para actualizar un vehículo por su ID
exports.updateVehicleById = async (req, res) => {
    const vehicleId = req.params.id;
    const updatedData = req.body;

    try {
        await admin.database().ref('vehicles').child(vehicleId).update(updatedData);
        res.status(200).json({ message: 'Vehículo actualizado exitosamente' });
    } catch (error) {
        console.error('Error al actualizar el vehículo:', error);
        res.status(500).json({ message: 'Error al actualizar el vehículo' });
    }
};

// Método para eliminar un vehículo por su ID
exports.deleteVehicleById = async (req, res) => {
    const vehicleId = req.params.id;

    try {
        await admin.database().ref('vehicles').child(vehicleId).remove();
        res.status(200).json({ message: 'Vehículo eliminado exitosamente' });
    } catch (error) {
        console.error('Error al eliminar el vehículo:', error);
        res.status(500).json({ message: 'Error al eliminar el vehículo' });
    }
};
