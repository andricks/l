import React from 'react';
import { Box, List, ListItem, ListItemButton, ListItemText, Drawer, AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const drawerWidth = 240;

const Dashboard = ({ children, handleLogout }) => {
  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Dashboard
          </Typography>
          <Button color="inherit" onClick={handleLogout} sx={{ marginLeft: 'auto' }}>
            Cerrar sesión
          </Button>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: 'auto' }}>
          <List>
            <ListItemButton component={Link} to="/nuevo-vehiculo">
              <ListItemText primary="Nuevo Vehículo" />
            </ListItemButton>
            <ListItemButton component={Link} to="/Mantenimiento-vehiculo">
              <ListItemText primary="Servicio Preventivo" />
            </ListItemButton>
            {/* Agrega más opciones aquí según sea necesario */}
          </List>
        </Box>
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
      >
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
};

export default Dashboard;
