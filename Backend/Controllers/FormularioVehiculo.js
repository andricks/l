const admin = require('firebase-admin');
// Crear un nuevo formulario de vehículo


exports.createFormularioVehiculo = async (req, res) => {
    const { cliente, vehiculo, formularioVehiculo } = req.body;

    try {
        // Guardar cliente
        const clienteRef = await admin.database().ref("clientes").push(cliente);
        const clienteId = clienteRef.key;

        // Guardar vehículo
        const vehiculoRef = await admin.database().ref("vehicles").push(vehiculo);
        const vehiculoId = vehiculoRef.key;

        // Guardar formulario de vehículo con referencias al cliente y vehículo
        formularioVehiculo.clienteId = clienteId;
        formularioVehiculo.vehiculoId = vehiculoId;

        const formularioRef = await admin.database().ref("formulariosVehiculo").push(formularioVehiculo);

        res.status(201).json({
            message: 'Datos guardados exitosamente',
            clienteId: clienteId,
            vehiculoId: vehiculoId,
            formularioId: formularioRef.key
        });
    } catch (error) {
        console.error('Error al guardar datos:', error);
        res.status(500).json({ message: 'Error al guardar datos' });
    }
};




// Obtener todos los formularios de vehículos
exports.getAllFormulariosVehiculo = async (req, res) => {
    const formularioId = req.params.formularioId;

    try {
      const formularioSnapshot = await db.ref(`formulariosVehiculo/${formularioId}`).once("value");
      const formulario = formularioSnapshot.val();
  
      if (formulario) {
        const clienteSnapshot = await db.ref(`clientes/${formulario.clienteId}`).once("value");
        const cliente = clienteSnapshot.val();
  
        const vehiculoSnapshot = await db.ref(`vehicles/${formulario.vehiculoId}`).once("value");
        const vehiculo = vehiculoSnapshot.val();
  
        res.status(200).json({ formulario, cliente, vehiculo });
      } else {
        res.status(404).send("Formulario de vehículo no encontrado.");
      }
    } catch (error) {
      console.error('Error al obtener formulario y datos relacionados:', error);
      res.status(500).json({ message: 'Error al obtener formulario y datos relacionados' });
    }
  };

// Obtener un formulario de vehículo por su ID
exports.getFormularioVehiculoById = async (req, res) => {
    const formularioId = req.params.id;
    try {
        const formularioSnapshot = await admin.database().ref(`formulariosVehiculo/${formularioId}`).once('value');
        const formulario = formularioSnapshot.val();
        if (formulario) {
            res.status(200).json(formulario);
        } else {
            res.status(404).json({ message: 'Formulario de vehículo no encontrado' });
        }
    } catch (error) {
        console.error('Error al obtener formulario de vehículo por ID:', error);
        res.status(500).json({ message: 'Error al obtener formulario de vehículo por ID' });
    }
};

// Actualizar un formulario de vehículo por su ID
exports.updateFormularioVehiculo = async (req, res) => {
    const formularioId = req.params.id;
    const formularioData = req.body;
    try {
        await admin.database().ref(`formulariosVehiculo/${formularioId}`).update(formularioData);
        res.status(200).json({ message: 'Formulario de vehículo actualizado exitosamente' });
    } catch (error) {
        console.error('Error al actualizar formulario de vehículo:', error);
        res.status(500).json({ message: 'Error al actualizar formulario de vehículo' });
    }
};

// Eliminar un formulario de vehículo por su ID
exports.deleteFormularioAndVehiculoVehiculoByPlaca = async (req, res) => {
    try {
        const { placa } = req.params;

        // Buscar el vehículo por su placa
        const vehiculoSnapshot = await admin.database().ref("vehicles").orderByChild("Placa").equalTo(placa).once("value");
        const vehiculoId = Object.keys(vehiculoSnapshot.val())[0];

        // Buscar el formulario asociado al vehículo
        const formularioSnapshot = await admin.database().ref("formulariosVehiculo").orderByChild("vehiculoId").equalTo(vehiculoId).once("value");

        // Verificar si se encontró un formulario
        if (formularioSnapshot.exists()) {
            const formularioId = Object.keys(formularioSnapshot.val())[0];

            // Eliminar el formulario
            await admin.database().ref("formulariosVehiculo").child(formularioId).remove();

            // Eliminar la referencia del vehículo en vehiculoVehiculo
            await admin.database().ref("vehiculoVehiculo").child(vehiculoId).remove();
            
            res.status(200).json({ message: 'Formulario y referencia de vehículo eliminados exitosamente' });
        } else {
            res.status(404).json({ message: 'No se encontró ningún formulario para la placa proporcionada' });
        }
    } catch (error) {
        console.error('Error al eliminar el formulario y la referencia de vehículo:', error);
        res.status(500).json({ message: 'Error al eliminar el formulario y la referencia de vehículo' });
    }
};




exports.getFormularioByPlaca = async (req, res) => {
    try {
        const { placa } = req.params;

        // Buscar el vehículo por su placa
        const vehiculoSnapshot = await admin.database().ref("vehicles").orderByChild("Placa").equalTo(placa).once("value");
        const vehiculoId = Object.keys(vehiculoSnapshot.val())[0];

        // Buscar el formulario asociado al vehículo
        const formularioSnapshot = await admin.database().ref("formulariosVehiculo").orderByChild("vehiculoId").equalTo(vehiculoId).once("value");

        // Verificar si se encontró un formulario
        if (formularioSnapshot.exists()) {
            const formularioId = Object.keys(formularioSnapshot.val())[0];
            const formularioData = formularioSnapshot.val()[formularioId];
            
            res.status(200).json({
                message: 'Formulario encontrado',
                formularioId: formularioId,
                formularioData: formularioData
            });
        } else {
            res.status(404).json({ message: 'No se encontró ningún formulario para la placa proporcionada' });
        }
    } catch (error) {
        console.error('Error al buscar el formulario:', error);
        res.status(500).json({ message: 'Error al buscar el formulario' });
    }
};

// update 
exports.updateFormularioByPlaca = async (req, res) => {
    try {
        const { placa } = req.params;
        const formData = req.body; // Datos del formulario a actualizar

        // Buscar el vehículo por su placa
        const vehiculoSnapshot = await admin.database().ref("vehicles").orderByChild("Placa").equalTo(placa).once("value");
        const vehiculoId = Object.keys(vehiculoSnapshot.val())[0];

        // Buscar el formulario asociado al vehículo
        const formularioSnapshot = await admin.database().ref("formulariosVehiculo").orderByChild("vehiculoId").equalTo(vehiculoId).once("value");

        // Verificar si se encontró un formulario
        if (formularioSnapshot.exists()) {
            const formularioId = Object.keys(formularioSnapshot.val())[0];

            // Actualizar los datos del formulario
            await admin.database().ref("formulariosVehiculo").child(formularioId).update(formData);
            
            res.status(200).json({ message: 'Formulario actualizado exitosamente' });
        } else {
            res.status(404).json({ message: 'No se encontró ningún formulario para la placa proporcionada' });
        }
    } catch (error) {
        console.error('Error al actualizar el formulario:', error);
        res.status(500).json({ message: 'Error al actualizar el formulario' });
    }
};


exports.getFormularioByPlaca = async (req, res) => {
    try {
        const { placa } = req.params;

        // Buscar el vehículo por su placa
        const vehiculoSnapshot = await admin.database().ref("vehicles").orderByChild("Placa").equalTo(placa).once("value");
        const vehiculoId = Object.keys(vehiculoSnapshot.val())[0];

        // Buscar el formulario asociado al vehículo
        const formularioSnapshot = await admin.database().ref("formulariosVehiculo").orderByChild("vehiculoId").equalTo(vehiculoId).once("value");
        const cliente = await admin.database().ref("clientes").orderByChild("vehiculoId").equalTo(vehiculoId).once("value");
        // Verificar si se encontró un formulario
        if (formularioSnapshot.exists()) {
            const formularioId = Object.keys(formularioSnapshot.val())[0];
            const formularioData = formularioSnapshot.val()[formularioId];
            
            res.status(200).json({
                message: 'Formulario encontrado',
                formularioId: formularioId,
                formularioData: formularioData
            });
        } else {
            res.status(404).json({ message: 'No se encontró ningún formulario para la placa proporcionada' });
        }
    } catch (error) {
        console.error('Error al buscar el formulario:', error);
        res.status(500).json({ message: 'Error al buscar el formulario' });
    }
};

exports.getFormularioCompleto = async (req, res) => {
    try {
        const { placa } = req.params;

        // Buscar el vehículo por su placa
        const vehiculoSnapshot = await admin.database().ref("vehicles").orderByChild("Placa").equalTo(placa).once("value");

        // Verificar si se encontró el vehículo
        if (!vehiculoSnapshot.exists()) {
            return res.status(404).json({ message: 'No se encontró ningún vehículo con la placa proporcionada' });
        }

        const vehiculoData = vehiculoSnapshot.val();
        const vehiculoId = Object.keys(vehiculoData)[0];

        // Buscar el formulario asociado al vehículo
        const formularioSnapshot = await admin.database().ref("formulariosVehiculo").orderByChild("vehiculoId").equalTo(vehiculoId).once("value");

        // Verificar si se encontró un formulario
        if (!formularioSnapshot.exists()) {
            return res.status(404).json({ message: 'No se encontró ningún formulario para la placa proporcionada' });
        }

        const formularioId = Object.keys(formularioSnapshot.val())[0];
        const formularioData = formularioSnapshot.val()[formularioId];

        // Buscar el cliente asociado al formulario
        const clienteId = formularioData.clienteId;
        const clienteSnapshot = await admin.database().ref("clientes").child(clienteId).once("value");

        // Verificar si se encontró el cliente
        const clienteData = clienteSnapshot.exists() ? clienteSnapshot.val() : null;

        // Construir la respuesta con los datos del formulario, vehículo y cliente
        res.status(200).json({
            message: 'Formulario encontrado',
            formularioId: formularioId,
            formularioData: formularioData,
            vehiculo: vehiculoData[vehiculoId],
            cliente: clienteData
        });
    } catch (error) {
        console.error('Error al buscar el formulario:', error);
        res.status(500).json({ message: 'Error al buscar el formulario' });
    }
};
