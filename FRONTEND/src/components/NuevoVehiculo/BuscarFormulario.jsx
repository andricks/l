import React, { useState } from 'react';
import axios from 'axios';
import NuevoVehiculoFormulario from './NuevoVehiculoFormulario';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function BuscarFormulario() {
  const [placa, setPlaca] = useState('');
  const [formularioData, setFormularioData] = useState(null);
  const [error, setError] = useState('');
  const [showDeleteButton, setShowDeleteButton] = useState(false);

  const handlePlacaChange = (event) => {
    setPlaca(event.target.value);
  };

  const handleSearch = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/formulario/${placa}`);
      setFormularioData(response.data.formularioData);
      setError('');
      setShowDeleteButton(true);
    } catch (error) {
      setError('No se encontró ningún formulario para la placa proporcionada');
      setFormularioData(null);
      setShowDeleteButton(false);
    }
  };

  const handleDelete = async () => {
    try {
      const response = await axios.delete(`http://localhost:5000/formulario/${placa}`);
      setFormularioData(response.data.formularioData);
      setError('');
      setShowDeleteButton(true);
    } catch (error) {
      setError('No se eliminar ningún formulario para la placa proporcionada');
      setFormularioData(null);
      setShowDeleteButton(false);
    }
  };

  const handleUpdate = async () => {
    try {
      const response = await axios.put(`http://localhost:5000/formulario/${placa}`, formularioData);
      console.log(response.data.message);
      setFormularioData(null); // Limpiar los datos después de la actualización

    } catch (error) {
      setError('Error al actualizar el formulario');
    }
  };

  const handleValueChange = (campo, nuevoValor) => {
    setFormularioData((prevData) => ({
      ...prevData,
      [campo]: nuevoValor,
    }));
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <NuevoVehiculoFormulario />
      <Box component="main" sx={{ flexGrow: 1, p: 3, marginTop: '55px' }}>
        <Typography variant="h5">Buscar Formulario</Typography>
        <TextField
          label="Número de Placa"
          value={placa}
          onChange={handlePlacaChange}
          fullWidth
          sx={{ mt: 2 }}
        />
        <Button onClick={handleSearch} variant="contained" color="primary" sx={{ mt: 2 }}>
          Buscar
        </Button>
        {showDeleteButton && (
          <Button onClick={handleDelete} variant="contained" color="error" sx={{ mt: 2, ml: 2 }}>
            Eliminar
          </Button>
        )}
        <Button onClick={handleUpdate} variant="contained" color="secondary" sx={{ mt: 2, ml: 2 }}>
          Actualizar
        </Button>
        {error && (
          <Typography variant="body1" color="error" sx={{ mt: 2 }}>
            {error}
          </Typography>
        )}
        {formularioData && (
          <div>
            <Typography variant="h6" sx={{ mt: 2 }}>
              Formulario encontrado
            </Typography>
            <TableContainer component={Paper} sx={{ mt: 2 }}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Campo</TableCell>
                    <TableCell>Valor</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {Object.entries(formularioData).map(([campo, valor], index) => (
                    <TableRow key={index}>
                      <TableCell>{campo}</TableCell>
                      <TableCell>
                        <TextField
                          value={valor}
                          onChange={(event) => handleValueChange(campo, event.target.value)}
                          fullWidth
                        />
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        )}
      </Box>
    </Box>
  );
}
