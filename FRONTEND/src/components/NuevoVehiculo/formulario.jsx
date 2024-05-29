import React, { useState } from 'react';
import axios from 'axios';
import NuevoVehiculoFormulario from './NuevoVehiculoFormulario';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';

function Formulario() {
  // Estado para almacenar los datos del formulario
  const [formData, setFormData] = useState({
    cliente: {
      Nombre: '',
      Apellido: '',
      NumeroTelefono: '',
      Nit: '',
      Dirección: '',
    },
    vehiculo: {
      // Aquí puedes agregar más campos si es necesario
      Marca: '',
      Año: '',
      TipoDeVehiculo:'',
      Placa: '',
    },
    formularioVehiculo: {
      // Aquí puedes agregar más campos si es necesario
      FechaDeEntrada: '',
      FechaDeSalida: '',
      AceiteMotorMarca: '',
      AceiteMotorTipo: '',
      AceiteMotorNomenclatura: '',
      AceiteMotorkilometrajedecambio: '',
      AceiteMotorkilometrajeProximoCambio: '',
      AceiteTransMarca: '',
      AceiteTransTipo: '',
      AceiteTransNomenclatura: '',
      AceiteTranskilometrajedeCambio: '',
      AceiteTranskilometrajeProximoCambio: '',
      AceiteDiferencialMarca: '',
      AceiteDiferencialTipo: '',
      AceiteDiferencialNomenclatura: '',
      AceiteDiferencialkilometrajedeCambio: '',
      AceiteDiferencialkilometrajePorximoCambio: '',
      RefrigeranteMarca: '',
      RefrigeranteTipo: '',
      RefrigerantekilometrajeCambio: '',
      RefrigerantekilometrajePorximoCambio: '',
      LiquidoFrenosMarca: '',
      LiquidoFrenosTipo: '',
      LiquidoFrenoskilometrajedeCambio: '',
      LiquidoFrenoskilometrajePorximoCambio: '',
      PastillasUtilidad: '',
      PastillasNumeroDeSerie: '',
      PastillasMarca: '',
      PastillaskilometrajeDeCambio: '',
      PastillaskilometrajePorximoCambio: '',
      FriccionesUtilidad: '',
      FriccionesNumerodeserie: '',
      Friccionesmarca: '',
      FriccioneskilometrajeDeCambio: '',
      FriccioneskilometrajePorximoCambio: '',
      FrenoDeMano: '',
      AmortiguadorDelanteroR: '',
      AmortiguadorDelanteroL: '',
      AmortiguadorTrasaeroR: '',
      AmortiguadorTrasaeroL: '',
      SuspenHueles: '',
      SuspenBases: '',
      SuspenCabezales: '',
      OBSERVACIONES: '',
    },
  });

  // Función para manejar el cambio en los campos del formulario del cliente
  const handleClienteChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      cliente: {
        ...formData.cliente,
        [name]: value,
      },
    });
  };

  // Función para manejar el cambio en los campos del formulario del vehículo
  const handleVehiculoChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      vehiculo: {
        ...formData.vehiculo,
        [name]: value,
      },
    });
  };

  // Función para manejar el cambio en los campos del formulario del vehículo
  const handleFormularioVehiculoChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      formularioVehiculo: {
        ...formData.formularioVehiculo,
        [name]: value,
      },
    });
  };

  // Función para manejar el envío de datos al backend
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/formulario', formData);
      console.log(response.data);
      // Aquí puedes manejar la respuesta del backend si es necesario
    } catch (error) {
      console.error('Error al enviar los datos:', error);
      // Aquí puedes manejar el error si es necesario
    }
  };

  return (
    <Box sx={{ display: 'flex' }}>
      < NuevoVehiculoFormulario />
      <Box component="main" sx={{ flexGrow: 1, p: 5, marginTop: "55px" , marginLeft
      :0}}>
        <Typography variant="h5" gutterBottom>
          Datos del Cliente y del Vehículo
        </Typography>
        <Card variant="outlined" sx={{ width: '800px' }}>
          <CardContent>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                {/* Campos del cliente */}
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Nombre"
                    name="Nombre"
                    value={formData.cliente.Nombre}
                    onChange={handleClienteChange}
                    fullWidth
                    required
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Apellido"
                    name="Apellido"
                    value={formData.cliente.Apellido}
                    onChange={handleClienteChange}
                    fullWidth
                    required
                  />
                </Grid>
                {/* Otros campos del cliente */}
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Número de Teléfono"
                    name="NumeroTelefono"
                    value={formData.cliente.NumeroTelefono}
                    onChange={handleClienteChange}
                    fullWidth
                    required
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="NIT"
                    name="Nit"
                    value={formData.cliente.Nit}
                    onChange={handleClienteChange}
                    fullWidth
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Dirección"
                    name="Dirección"
                    value={formData.cliente.Dirección}
                    onChange={handleClienteChange}
                    fullWidth
                    required
                  />
                </Grid>
                <Divider sx={{ my: 2 }} />
                {/* Campos del vehículo */}
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Marca del Vehículo"
                    name="Marca"
                    value={formData.vehiculo.Marca}
                    onChange={handleVehiculoChange}
                    fullWidth
                    required
                  />
                </Grid>
              
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Tipo de Vehículo"
                    name="TipoDeVehiculo"
                    value={formData.vehiculo.TipoDeVehiculo}
                    onChange={handleVehiculoChange}
                    fullWidth
                    required
                  />
                </Grid>
                {/* Otros campos del vehículo */}
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Año del Vehículo"
                    name="Año"
                    value={formData.vehiculo.Año}
                    onChange={handleVehiculoChange}
                    fullWidth
                    required
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Placa del Vehículo"
                    name="Placa"
                    value={formData.vehiculo.Placa}
                    onChange={handleVehiculoChange}
                    fullWidth
                    required
                  />
                </Grid>

                <Divider sx={{ my: 2 }} />
                {/* Detalles del Formulario del Vehículo */}
                <Typography variant="h5" >
                           Entrada y Salida de  Vehículo
                        </Typography>
                <Card variant="outlined">
                  <CardContent>
                    <form onSubmit={handleSubmit}>
                      <Grid container spacing={4}>
                        {/* Primer conjunto de campos del formularioVehiculo */}
                        <Grid item xs={12} sm={3}>
                          <TextField
                            label="Fecha de Entrada"
                            name="FechaDeEntrada"
                            value={formData.formularioVehiculo.FechaDeEntrada}
                            onChange={handleFormularioVehiculoChange}
                            fullWidth
                            required
                          />
                        </Grid>
                        <Grid item xs={12} sm={3}>
                          <TextField
                            label="Fecha de Salida"
                            name="FechaDeSalida"
                            value={formData.formularioVehiculo.FechaDeSalida}
                            onChange={handleFormularioVehiculoChange}
                            fullWidth
                            required
                          />
                                

                        </Grid>
                        {/* ACEITE MOTOR */}

                        <Card variant="outlined">
                          <CardContent>
                            <Typography variant="h5" gutterBottom>
                              Detalles del Aceite de Motor
                            </Typography>
                            <Grid container spacing={4}>
                              <Grid item xs={12} sm={6}>
                                <TextField
                                  label="Marca"
                                  name="AceiteMotorMarca"
                                  value={formData.formularioVehiculo.AceiteMotorMarca}
                                  onChange={handleFormularioVehiculoChange}
                                  fullWidth
                                  required
                                />
                              </Grid>
                              <Grid item xs={12} sm={6}>
                                <TextField
                                  label="Tipo"
                                  name="AceiteMotorTipo"
                                  value={formData.formularioVehiculo.AceiteMotorTipo}
                                  onChange={handleFormularioVehiculoChange}
                                  fullWidth
                                  required
                                />
                              </Grid>
                              <Grid item xs={12} sm={6}>
                                <TextField
                                  label="Nomenclatura"
                                  name="AceiteMotorNomenclatura"
                                  value={formData.formularioVehiculo.AceiteMotorNomenclatura}
                                  onChange={handleFormularioVehiculoChange}
                                  fullWidth
                                  required
                                />
                              </Grid>
                              <Grid item xs={12} sm={6}>
                                <TextField
                                  label="Kilometraje de Cambio"
                                  name="AceiteMotorkilometrajedecambio"
                                  value={formData.formularioVehiculo.AceiteMotorkilometrajedecambio}
                                  onChange={handleFormularioVehiculoChange}
                                  fullWidth
                                  required
                                />
                              </Grid>
                              <Grid item xs={12} sm={6}>
                                <TextField
                                  label="Kilometraje proximo Cambio"
                                  name="AceiteDiferencialkilometrajePorximoCambio"
                                  value={formData.formularioVehiculo.AceiteDiferencialkilometrajePorximoCambio}
                                  onChange={handleFormularioVehiculoChange}
                                  fullWidth
                                  required
                                />
                              </Grid>
                             
                            </Grid>
                          </CardContent>
                        </Card>

                        {/* Aceite de Transmisión */}
                      <Card variant="outlined">
                      <CardContent>
                        <Typography variant="h5" gutterBottom>
                          Detalles del Aceite de Transmisión
                        </Typography>
                        <Grid container spacing={4}>
                          <Grid item xs={12} sm={6}>
                            <TextField
                              label="Marca"
                              name="AceiteTransMarca"
                              value={formData.formularioVehiculo.AceiteTransMarca}
                              onChange={handleFormularioVehiculoChange}
                              fullWidth
                              required
                            />
                          </Grid>
                          <Grid item xs={12} sm={6}>
                            <TextField
                              label="Tipo"
                              name="AceiteTransTipo"
                              value={formData.formularioVehiculo.AceiteTransTipo}
                              onChange={handleFormularioVehiculoChange}
                              fullWidth
                              required
                            />
                          </Grid>
                          {/* Otros campos relacionados con el aceite de transmisión */}
                          <Grid item xs={12} sm={6}>
                            <TextField
                              label="Nomenclatura"
                              name="AceiteTransNomenclatura"
                              value={formData.formularioVehiculo.AceiteTransNomenclatura}
                              onChange={handleFormularioVehiculoChange}
                              fullWidth
                              required
                            />
                          </Grid>
                          <Grid item xs={12} sm={6}>
                          <TextField
                              label="Kilometraje Proximo Cambio"
                              name="AceiteTranskilometrajeProximoCambio"
                              value={formData.formularioVehiculo.AceiteTranskilometrajeProximoCambio}
                              onChange={handleFormularioVehiculoChange}
                              fullWidth
                              required
                            
                           
                            />
                          </Grid>
                          <Grid item xs={12} sm={6}>
                          <TextField
                              label="Kilometraje de Cambio"
                              name="AceiteTranskilometrajedeCambio"
                              value={formData.formularioVehiculo.AceiteTranskilometrajedeCambio}
                              onChange={handleFormularioVehiculoChange}
                              fullWidth
                              required
                            />
                          </Grid>
                            {/* Agregar más campos si es necesario */}
                          </Grid>
                           </CardContent>
                          </Card>

                          {/* Aceite Diferencial */}
                         <Card variant="outlined">
                         <CardContent>
                        <Typography variant="h5" gutterBottom>
                          Detalles del Aceite Diferencial
                        </Typography>
                        <Grid container spacing={4}>
                          <Grid item xs={12} sm={6}>
                            <TextField
                              label="Marca"
                              name="AceiteDiferencialMarca"
                              value={formData.formularioVehiculo.AceiteDiferencialMarca}
                              onChange={handleFormularioVehiculoChange}
                              fullWidth
                              required
                            />
                          </Grid>
                          <Grid item xs={12} sm={6}>
                            <TextField
                              label="Tipo"
                              name="AceiteDiferencialTipo"
                              value={formData.formularioVehiculo.AceiteDiferencialTipo}
                              onChange={handleFormularioVehiculoChange}
                              fullWidth
                              required
                            />
                          </Grid>
                          {/* Otros campos relacionados con el aceite diferencial */}
                          <Grid item xs={12} sm={6}>
                            <TextField
                              label="Nomenclatura"
                              name="AceiteDiferencialNomenclatura"
                              value={formData.formularioVehiculo.AceiteDiferencialNomenclatura}
                              onChange={handleFormularioVehiculoChange}
                              fullWidth
                              required
                            />
                          </Grid>
                          <Grid item xs={12} sm={6}>
                            <TextField
                              label="Kilometraje de Cambio"
                              name="AceiteDiferencialkilometrajedeCambio"
                              value={formData.formularioVehiculo.AceiteDiferencialkilometrajedeCambio}
                              onChange={handleFormularioVehiculoChange}
                              fullWidth
                              required
                            />
                          </Grid>
                          <Grid item xs={12} sm={6}>
                          <TextField
                              label="Kilometraje Próximo de Cambio del Aceite Diferencial"
                              name="AceiteDiferencialkilometrajePorximoCambio"
                              value={formData.formularioVehiculo.AceiteDiferencialkilometrajePorximoCambio}
                              onChange={handleFormularioVehiculoChange}
                              fullWidth
                              required
                              />
                              </Grid>
                              {/* Agregar más campos si es necesario */}
                            </Grid>
                          </CardContent>
                        </Card>

                             {/* Refrigerante*/}
                                                         <Card variant="outlined">
                                    <CardContent>
                                      <Typography variant="h5" gutterBottom>
                                        Detalles del Refrigerante
                                      </Typography>
                                      <Grid container spacing={4}>
                                        <Grid item xs={12} sm={6}>
                                          <TextField
                                            label="Marca"
                                            name="RefrigeranteMarca"
                                            value={formData.formularioVehiculo.RefrigeranteMarca}
                                            onChange={handleFormularioVehiculoChange}
                                            fullWidth
                                            required
                                          />
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                          <TextField
                                            label="Tipo"
                                            name="RefrigeranteTipo"
                                            value={formData.formularioVehiculo.RefrigeranteTipo}
                                            onChange={handleFormularioVehiculoChange}
                                            fullWidth
                                            required
                                          />
                                        </Grid>
                                        {/* Otros campos relacionados con el refrigerante */}
                                        <Grid item xs={12} sm={6}>
                                          <TextField
                                            label="Kilometraje de Cambio"
                                            name="RefrigerantekilometrajeCambio"
                                            value={formData.formularioVehiculo.RefrigerantekilometrajeCambio}
                                            onChange={handleFormularioVehiculoChange}
                                            fullWidth
                                            required
                                          />
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                          <TextField
                                            label="Kilometraje Próximo Cambio"
                                            name="RefrigerantekilometrajePorximoCambio"
                                            value={formData.formularioVehiculo.RefrigerantekilometrajePorximoCambio}
                                            onChange={handleFormularioVehiculoChange}
                                            fullWidth
                                            required
                                          />
                                        </Grid>
                                        {/* Agregar más campos si es necesario */}
                                      </Grid>
                                    </CardContent>
                                  </Card>

                                            {  /* Líquido de Frenos */}

                                            <Card variant="outlined">
                                          <CardContent>
                                            <Typography variant="h5" gutterBottom>
                                              Detalles del Líquido de Frenos
                                            </Typography>
                                            <Grid container spacing={4}>
                                              <Grid item xs={12} sm={6}>
                                                <TextField
                                                  label="Marca"
                                                  name="LiquidoFrenosMarca"
                                                  value={formData.formularioVehiculo.LiquidoFrenosMarca}
                                                  onChange={handleFormularioVehiculoChange}
                                                  fullWidth
                                                  required
                                                />
                                              </Grid>
                                              <Grid item xs={12} sm={6}>
                                                <TextField
                                                  label="Tipo"
                                                  name="LiquidoFrenosTipo"
                                                  value={formData.formularioVehiculo.LiquidoFrenosTipo}
                                                  onChange={handleFormularioVehiculoChange}
                                                  fullWidth
                                                  required
                                                />
                                              </Grid>
                                              {/* Otros campos relacionados con el líquido de frenos */}
                                              <Grid item xs={12} sm={6}>
                                                <TextField
                                                  label="Kilometraje de Cambio"
                                                  name="LiquidoFrenoskilometrajedeCambio"
                                                  value={formData.formularioVehiculo.LiquidoFrenoskilometrajedeCambio}
                                                  onChange={handleFormularioVehiculoChange}
                                                  fullWidth
                                                  required
                                                />
                                              </Grid>
                                              <Grid item xs={12} sm={6}>
                                                <TextField
                                                  label="Kilometraje Próximo Cambio"
                                                  name="LiquidoFrenoskilometrajePorximoCambio"
                                                  value={formData.formularioVehiculo.LiquidoFrenoskilometrajePorximoCambio}
                                                  onChange={handleFormularioVehiculoChange}
                                                  fullWidth
                                                  required
                                                />
                                              </Grid>
                                              {/* Agregar más campos si es necesario */}
                                            </Grid>
                                          </CardContent>
                                        </Card>

                                                        {  /* Pastillas DE FRENO*/}
                                      <Card variant="outlined">
                                      <CardContent>
                                        <Typography variant="h5" gutterBottom>
                                          Detalles de Pastillas y Fricciones
                                        </Typography>
                                     
                                        <Grid container spacing={4}>
                                          <Grid item xs={12} sm={6}>
                                            <TextField
                                              label="Utilidad de Pastillas"
                                              name="PastillasUtilidad"
                                              value={formData.formularioVehiculo.PastillasUtilidad}
                                              onChange={handleFormularioVehiculoChange}
                                              fullWidth
                                              required
                                            />
                                          </Grid>
                                          <Grid item xs={12} sm={6}>
                                            <TextField
                                              label="Número de Serie de Pastillas"
                                              name="PastillasNumeroDeSerie"
                                              value={formData.formularioVehiculo.PastillasNumeroDeSerie}
                                              onChange={handleFormularioVehiculoChange}
                                              fullWidth
                                              required
                                            />
                                          </Grid>
                                          <Grid item xs={12} sm={6}>
                                            <TextField
                                              label="Marca de Pastillas"
                                              name="PastillasMarca"
                                              value={formData.formularioVehiculo.PastillasMarca}
                                              onChange={handleFormularioVehiculoChange}
                                              fullWidth
                                              required
                                            />
                                          </Grid>
                                          <Grid item xs={12} sm={6}>
                                            <TextField
                                              label="Kilometraje de Cambio de Pastillas"
                                              name="PastillaskilometrajeDeCambio"
                                              value={formData.formularioVehiculo.PastillaskilometrajeDeCambio}
                                              onChange={handleFormularioVehiculoChange}
                                              fullWidth
                                              required
                                            />
                                          </Grid>
                                          <Grid item xs={12} sm={6}>
                                            <TextField
                                              label="Kilometraje Próximo Cambio de Pastillas"
                                              name="PastillaskilometrajePorximoCambio"
                                              value={formData.formularioVehiculo.PastillaskilometrajePorximoCambio}
                                              onChange={handleFormularioVehiculoChange}
                                              fullWidth
                                              required
                                            />
                                          </Grid>
                                        </Grid>
                                        {/* Campos relacionados con las fricciones */}
                                        <Grid container spacing={4}>
                                          <Grid item xs={12} sm={6}>
                                            <TextField
                                              label="Utilidad de Fricciones"
                                              name="FriccionesUtilidad"
                                              value={formData.formularioVehiculo.FriccionesUtilidad}
                                              onChange={handleFormularioVehiculoChange}
                                              fullWidth
                                              required
                                            />
                                          </Grid>
                                          <Grid item xs={12} sm={6}>
                                            <TextField
                                              label="Número de Serie de Fricciones"
                                              name="FriccionesNumerodeserie"
                                              value={formData.formularioVehiculo.FriccionesNumerodeserie}
                                              onChange={handleFormularioVehiculoChange}
                                              fullWidth
                                              required
                                            />
                                          </Grid>
                                          <Grid item xs={12} sm={6}>
                                            <TextField
                                              label="Marca de Fricciones"
                                              name="Friccionesmarca"
                                              value={formData.formularioVehiculo.Friccionesmarca}
                                              onChange={handleFormularioVehiculoChange}
                                              fullWidth
                                              required
                                            />
                                          </Grid>
                                          <Grid item xs={12} sm={6}>
                                            <TextField
                                              label="Kilometraje de Cambio de Fricciones"
                                              name="FriccioneskilometrajeDeCambio"
                                              value={formData.formularioVehiculo.FriccioneskilometrajeDeCambio}
                                              onChange={handleFormularioVehiculoChange}
                                              fullWidth
                                              required
                                            />
                                          </Grid>
                                          <Grid item xs={12} sm={6}>
                                            <TextField
                                              label="Kilometraje Próximo Cambio de Fricciones"
                                              name="FriccioneskilometrajePorximoCambio"
                                              value={formData.formularioVehiculo.FriccioneskilometrajePorximoCambio}
                                              onChange={handleFormularioVehiculoChange}
                                              fullWidth
                                              required
                                            />
                                          </Grid>
                                          <Grid item xs={12} sm={6}>
                                            <TextField
                                              label="Freno de Mano"
                                              name="FrenoDeMano"
                                              value={formData.formularioVehiculo.FrenoDeMano}
                                              onChange={handleFormularioVehiculoChange}
                                              fullWidth
                                              required
                                            />
                                          </Grid>
                                        </Grid>
                                      </CardContent>
                                    </Card>

                              {  /* SUSPENSION*/}

                              <Card variant="outlined">
                              <CardContent>
                                <Typography variant="h5" gutterBottom>
                                  Suspensión y Amortiguadores
                                </Typography>
                                <form onSubmit={handleSubmit}>
                                  <Grid container spacing={2}>
                                    <Grid item xs={12} sm={6}>
                                      <TextField
                                        label="Amortiguador Delantero R"
                                        name="AmortiguadorDelanteroR"
                                        value={formData.formularioVehiculo.AmortiguadorDelanteroR}
                                        onChange={handleFormularioVehiculoChange}
                                        fullWidth
                                      />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                      <TextField
                                        label="Amortiguador Delantero L"
                                        name="AmortiguadorDelanteroL"
                                        value={formData.formularioVehiculo.AmortiguadorDelanteroL}
                                        onChange={handleFormularioVehiculoChange}
                                        fullWidth
                                      />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                      <TextField
                                        label="Amortiguador Trasero R"
                                        name="AmortiguadorTrasaeroR"
                                        value={formData.formularioVehiculo.AmortiguadorTrasaeroR}
                                        onChange={handleFormularioVehiculoChange}
                                        fullWidth
                                      />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                      <TextField
                                        label="Amortiguador Trasero L"
                                        name="AmortiguadorTrasaeroL"
                                        value={formData.formularioVehiculo.AmortiguadorTrasaeroL}
                                        onChange={handleFormularioVehiculoChange}
                                        fullWidth
                                      />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                      <TextField
                                        label="Suspensión Hueles"
                                        name="SuspenHueles"
                                        value={formData.formularioVehiculo.SuspenHueles}
                                        onChange={handleFormularioVehiculoChange}
                                        fullWidth
                                      />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                      <TextField
                                        label="Suspensión Bases"
                                        name="SuspenBases"
                                        value={formData.formularioVehiculo.SuspenBases}
                                        onChange={handleFormularioVehiculoChange}
                                        fullWidth
                                      />
                                    </Grid>
                                    <Grid item xs={12}>
                                      <TextField
                                        label="Suspensión Cabezales"
                                        name="SuspenCabezales"
                                        value={formData.formularioVehiculo.SuspenCabezales}
                                        onChange={handleFormularioVehiculoChange}
                                        fullWidth
                                      />
                                    </Grid>
                                    <Grid item xs={12}>
                                      <TextField
                                        label="Observaciones"
                                        name="OBSERVACIONES"
                                        value={formData.formularioVehiculo.OBSERVACIONES}
                                        onChange={handleFormularioVehiculoChange}
                                        fullWidth
                                        multiline
                                        rows={4}
                                      />
                                    </Grid>
                                  </Grid>
                                </form>
                              </CardContent>
                            </Card>

                      </Grid>
                    </form>
                  </CardContent>
                </Card>
              </Grid>
              <Divider sx={{ my: 2 }} />
              <Button type="submit" variant="contained" color="primary">
                Enviar
              </Button>
            </form>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
}

export default Formulario;
