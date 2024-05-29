import React, { useState } from 'react';
import axios from 'axios';
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
  const [vehiculoData, setVehiculoData] = useState(null);
  const [clienteData, setClienteData] = useState(null);
  const [error, setError] = useState('');

  const handlePlacaChange = (event) => {
    setPlaca(event.target.value);
  };

  const handleSearch = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/formularioCompleto/${placa}`);
      setFormularioData(response.data.formularioData);
      setVehiculoData(response.data.vehiculo);
      setClienteData(response.data.cliente);
      setError('');
    } catch (error) {
      setError('No se encontró ningún formulario para la placa proporcionada');
      setFormularioData(null);
      setVehiculoData(null);
      setClienteData(null);
    }
  };

  return (
    <Box sx={{ display: 'flex' }}>
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
                      <TableCell>{valor}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        )}
        {vehiculoData && (
          <div>
            <Typography variant="h6" sx={{ mt: 2 }}>
              Datos del Vehículo
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
                  {Object.entries(vehiculoData).map(([campo, valor], index) => (
                    <TableRow key={index}>
                      <TableCell>{campo}</TableCell>
                      <TableCell>{valor}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        )}
        {clienteData && (
          <div>
            <Typography variant="h6" sx={{ mt: 2 }}>
              Datos del Cliente
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
                  {Object.entries(clienteData).map(([campo, valor], index) => (
                    <TableRow key={index}>
                      <TableCell>{campo}</TableCell>
                      <TableCell>{valor}</TableCell>
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
