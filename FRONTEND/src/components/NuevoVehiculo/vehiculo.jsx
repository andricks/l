import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, Dialog, DialogTitle, DialogContent, DialogActions, TextField } from '@mui/material';
import NuevoVehiculoFormulario from './NuevoVehiculoFormulario';
function Vehiculo() {
  const [vehiculos, setVehiculos] = useState([]);
  const [editingVehiculo, setEditingVehiculo] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);

  useEffect(() => {
    fetchVehiculos();
  }, []);

  const fetchVehiculos = async () => {
    try {
      const response = await axios.get('http://localhost:5000/vehicles');
      const data = response.data;
      const vehiculosArray = Object.keys(data).map(key => ({ id: key, ...data[key] }));
      setVehiculos(vehiculosArray);
    } catch (error) {
      console.error('Error al obtener vehículos:', error);
    }
  };

  const handleEdit = (vehiculo) => {
    setEditingVehiculo(vehiculo);
    setOpenDialog(true);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEditingVehiculo({ ...editingVehiculo, [name]: value });
  };

  const handleUpdate = async () => {
    try {
      const response = await axios.put(`http://localhost:5000/vehicles/${editingVehiculo.id}`, editingVehiculo);
      console.log(response.data);
      setOpenDialog(false);
      fetchVehiculos();
    } catch (error) {
      console.error('Error al actualizar el vehículo:', error);
    }
  };

  const handleDeleteVehiculo = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/vehicles/${id}`);
      // Eliminar el vehículo de la lista de vehículos en el frontend
      setVehiculos(vehiculos.filter(vehiculo => vehiculo.id !== id));
    } catch (error) {
      console.error('Error al eliminar vehículo:', error);
    }
  };

  return (
    <Box sx={{ padding: '16px' }}>
      <NuevoVehiculoFormulario />
      <Typography variant="h5" mb={2}>
        Lista de Vehículos
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Año</TableCell>
              <TableCell>Marca</TableCell>
              <TableCell>Modelo</TableCell>
              <TableCell>Placa</TableCell>
              <TableCell>Tipo de Vehículo</TableCell>
              <TableCell>Acciones</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {vehiculos.map((vehiculo, index) => (
              <TableRow key={index}>
                <TableCell>{vehiculo.Año}</TableCell>
                <TableCell>{vehiculo.Marca}</TableCell>
                <TableCell>{vehiculo.Modelo}</TableCell>
                <TableCell>{vehiculo.Placa}</TableCell>
                <TableCell>{vehiculo.TipoDeVehiculo}</TableCell>
                <TableCell>
                  <Button variant="outlined" onClick={() => handleEdit(vehiculo)}>Editar</Button>
                  <Button onClick={() => handleDeleteVehiculo(vehiculo.id)} variant="outlined" color="secondary">Eliminar</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      
      <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
        <DialogTitle>Editar Vehículo</DialogTitle>
        <DialogContent>
          <TextField
            label="Año"
            name="Año"
            value={editingVehiculo ? editingVehiculo.Año : ''}
            onChange={handleInputChange}
            fullWidth
          />
          <TextField
            label="Marca"
            name="Marca"
            value={editingVehiculo ? editingVehiculo.Marca : ''}
            onChange={handleInputChange}
            fullWidth
          />
          <TextField
            label="Modelo"
            name="Modelo"
            value={editingVehiculo ? editingVehiculo.Modelo : ''}
            onChange={handleInputChange}
            fullWidth
          />
          <TextField
            label="Placa"
            name="Placa"
            value={editingVehiculo ? editingVehiculo.Placa : ''}
            onChange={handleInputChange}
            fullWidth
          />
          <TextField
            label="Tipo de Vehículo"
            name="TipoDeVehiculo"
            value={editingVehiculo ? editingVehiculo.TipoDeVehiculo : ''}
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

export default Vehiculo;
