import React from 'react';
import { Grid, Card, CardContent, CardActions, Button, Typography, Box, CardMedia } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const MenuTarjetas = ({ handleLogout }) => {
  const navigate = useNavigate();

  return (
    <Box sx={{ flexGrow: 1, mt: 3 }}>
      <Typography variant="h4" gutterBottom>
        Menú Principal
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={4}>
          <Card sx={{ maxWidth: 345, minHeight: 300 }}>
            <CardMedia
              component="img"
              height="140"
              image="" // Reemplaza con la URL de tu imagen
              alt="Nuevo Vehículo"
            />
            <CardContent>
              <Typography variant="h5" component="div">
                Nuevo Vehículo
              </Typography>
              <Typography sx={{ mt: 1.5 }} color="text.secondary">
                Registrar un nuevo vehículo
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" onClick={() => navigate('/nuevo-vehiculo')}>
                Ir
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card sx={{ maxWidth: 345, minHeight: 300 }}>
            <CardMedia
              component="img"
              height="140"
              image="" // Reemplaza con la URL de tu imagen
              alt="Servicio Preventivo"
            />
            <CardContent>
              <Typography variant="h5" component="div">
                Servicio Preventivo
              </Typography>
              <Typography sx={{ mt: 1.5 }} color="text.secondary">
                Gestionar servicios preventivos
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" onClick={() => navigate('/Mantenimiento-vehiculo')}>
                Ir
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card sx={{ maxWidth: 345, minHeight: 300 }}>
            <CardMedia
              component="img"
              height="140"
              image="https://via.placeholder.com/140" // Reemplaza con la URL de tu imagen
              alt="Buscar Formulario"
            />
            <CardContent>
              <Typography variant="h5" component="div">
                Menu
              </Typography>
              <Typography sx={{ mt: 1.5 }} color="text.secondary">
                Buscar y gestionar formularios
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" onClick={() => navigate('/')}>
                Ir
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
      <Box sx={{ mt: 3 }}>
        <Button variant="contained" color="error" onClick={handleLogout}>
          Cerrar sesión
        </Button>
      </Box>
    </Box>
  );
};

export default MenuTarjetas;
