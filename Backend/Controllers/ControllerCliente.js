// Controlador para clientes (Controllers/ControllerCliente.js)
const admin = require('firebase-admin');

// Método para crear un nuevo cliente
exports.createCliente = async (req, res) => {
   
    const clienteData = req.body;
    try {
        const { Nombre, Apellido, NumeroTelefono, Nit, Dirección } = clienteData;
        
        // Guardar los datos del cliente en Firebase Realtime Database
        const newClienteRef = await admin.database().ref('clientes').push({
            Nombre,
            Apellido,
            NumeroTelefono,
            Nit,
            Dirección
        });

        res.status(201).json({ message: 'Datos del cliente guardados exitosamente', id: newClienteRef.key });
    } catch (error) {
        console.error('Error al guardar datos del cliente:', error);
        res.status(500).json({ message: 'Error al guardar datos del cliente' });
    }
};

// Método para obtener todos los clientes
exports.getClientes = async (req, res) => {
    try {
        const snapshot = await admin.database().ref('clientes').once('value');
        const clientes = snapshot.val();
        res.status(200).json(clientes);
    } catch (error) {
        console.error('Error al obtener los clientes:', error);
        res.status(500).json({ message: 'Error al obtener los clientes' });
    }
};

// Método para obtener un cliente por su ID
exports.getClienteById = async (req, res) => {
    const clienteId = req.params.id;

    try {
        const snapshot = await admin.database().ref('clientes').child(clienteId).once('value');
        const cliente = snapshot.val();
        if (cliente) {
            res.status(200).json(cliente);
        } else {
            res.status(404).json({ message: 'Cliente no encontrado' });
        }
    } catch (error) {
        console.error('Error al obtener el cliente:', error);
        res.status(500).json({ message: 'Error al obtener el cliente' });
    }
};

// Método para actualizar un cliente por su ID
exports.updateClienteById = async (req, res) => {
    const clienteId = req.params.id;
    const updatedData = req.body;

    try {
        await admin.database().ref('clientes').child(clienteId).update(updatedData);
        res.status(200).json({ message: 'Cliente actualizado exitosamente' });
    } catch (error) {
        console.error('Error al actualizar el cliente:', error);
        res.status(500).json({ message: 'Error al actualizar el cliente' });
    }
};

// Método para eliminar un cliente por su ID
exports.deleteClienteById = async (req, res) => {
    const clienteId = req.params.id;

    try {
        await admin.database().ref('clientes').child(clienteId).remove();
        res.status(200).json({ message: 'Cliente eliminado exitosamente' });
    } catch (error) {
        console.error('Error al eliminar el cliente:', error);
        res.status(500).json({ message: 'Error al eliminar el cliente' });
    }
};
