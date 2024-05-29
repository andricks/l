import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CssBaseline, Container } from '@mui/material';
import Login from './components/Login';
import firebase from './CONFDataBase/firebaseConfig';
import Inicio from './components/Inicio/Inicio';
import NuevoVehiculoFormulario from './components/NuevoVehiculo/NuevoVehiculoFormulario';
import ServicioPreventivo from './components/ServicioPreventivo/ServicioPreventivo';
import Cliente from './components/NuevoVehiculo/cliente';
import Vehiculo from './components/NuevoVehiculo/vehiculo';
import Formulario from './components/NuevoVehiculo/formulario';
import BuscarFormulario from './components/NuevoVehiculo/BuscarFormulario';
import Usuario from './components/Usuarios/Usuario';
import MenuTarjetas from './components/MenuTarjetas';

function App() {
  const [user, setUser] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [showInicio, setShowInicio] = useState(true);

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      setUser(user);
      if (user) {
        setShowForm(true);
        const { claims } = user;
        console.log('Claims del usuario:', claims);
      }
    });
    return () => unsubscribe();
  }, []);

  function handleLogout() {
    firebase.auth().signOut();
  }

  function handleLoginClick() {
    setShowInicio(false);
  }

  return (
    <Router>
      <CssBaseline />
      <Container maxWidth="md">
        <Routes>
          <Route
            path="/"
            element={
              showInicio ? (
                <Inicio onLoginClick={handleLoginClick} />
              ) : user && showForm ? (
                <MenuTarjetas handleLogout={handleLogout} />
              ) : (
                <Login />
              )
            }
          />
          <Route path="/nuevo-vehiculo" element={<NuevoVehiculoFormulario />} />
          <Route path="/Mantenimiento-vehiculo" element={<ServicioPreventivo />} />
          <Route path="/cliente" element={<Cliente />} />
          <Route path="/vehiculo" element={<Vehiculo />} />
          <Route path="/formulario" element={<Formulario />} />
          <Route path="/BuscarFormulario" element={<BuscarFormulario />} />
          <Route path="/Usuario" element={<Usuario />} />
          
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
