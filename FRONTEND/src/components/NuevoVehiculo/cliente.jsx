import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NuevoVehiculoFormulario from './NuevoVehiculoFormulario';
import { Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, Dialog, DialogTitle, DialogContent, DialogActions, TextField } from '@mui/material';

function Cliente() {
  const [clientes, setClientes] = useState([]);
  const [editingClient, setEditingClient] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);

  useEffect(() => {
    fetchClientes();
  }, []);

  const fetchClientes = async () => {
    try {
      const response = await axios.get('http://localhost:5000/clientes');
      console.log(response, 'response');

      // Extraer los datos de cliente del objeto de respuesta
      const data = response.data;
      const clientesArray = Object.keys(data).map(key => ({ id: key, ...data[key] }));

      setClientes(clientesArray);
    } catch (error) {
      console.error('Error al obtener clientes:', error);
    }
  };

  const handleEdit = (cliente) => {
    setEditingClient(cliente);
    setOpenDialog(true);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEditingClient({ ...editingClient, [name]: value });
  };

  const handleUpdate = async () => {
    try {
      const response = await axios.put(`http://localhost:5000/clientes/${editingClient.id}`, editingClient);
      console.log(response.data);
      setOpenDialog(false);
      fetchClientes();
    } catch (error) {
      console.error('Error al actualizar el cliente:', error);
    }
  };

  const handleDeleteCliente = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/clientes/${id}`);
      // Eliminar el cliente de la lista de clientes en el frontend
      setClientes(clientes.filter(cliente => cliente.id !== id));
    } catch (error) {
      console.error('Error al eliminar cliente:', error);
    }
  };

  return (
    <Box sx={{ padding: '16px' }}>
      <NuevoVehiculoFormulario />
      <Typography variant="h5" mb={2}>
        Lista de Clientes
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Nombre</TableCell>
              <TableCell>Apellido</TableCell>
              <TableCell>Número de Teléfono</TableCell>
              <TableCell>NIT</TableCell>
              <TableCell>Dirección</TableCell>
              <TableCell>Acciones</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {clientes.map((cliente, index) => (
              <TableRow key={index}>
                <TableCell>{cliente.Nombre}</TableCell>
                <TableCell>{cliente.Apellido}</TableCell>
                <TableCell>{cliente.NumeroTelefono}</TableCell>
                <TableCell>{cliente.Nit}</TableCell>
                <TableCell>{cliente.Dirección}</TableCell>
                <TableCell>
                  <Button variant="outlined" onClick={() => handleEdit(cliente)}>Editar</Button>
                  <Button onClick={() => handleDeleteCliente(cliente.id)} variant="outlined" color="secondary">Eliminar</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      
      <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
        <DialogTitle>Editar Cliente</DialogTitle>
        <DialogContent>
          <TextField
            label="Nombre"
            name="Nombre"
            value={editingClient ? editingClient.Nombre : ''}
            onChange={handleInputChange}
            fullWidth
          />
          <TextField
            label="Apellido"
            name="Apellido"
            value={editingClient ? editingClient.Apellido : ''}
            onChange={handleInputChange}
            fullWidth
          />
          <TextField
            label="Número de Teléfono"
            name="NumeroTelefono"
            value={editingClient ? editingClient.NumeroTelefono : ''}
            onChange={handleInputChange}
            fullWidth
          />
          <TextField
            label="NIT"
            name="Nit"
            value={editingClient ? editingClient.Nit : ''}
            onChange={handleInputChange}
            fullWidth
          />
          <TextField
            label="Dirección"
            name="Dirección"
            value={editingClient ? editingClient.Dirección : ''}
            onChange={handleInputChange}
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDialog(false)}>Cancelar</Button>
          <Button onClick={handleUpdate} color="primary">Guardar Cambios</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}

export default Cliente;

