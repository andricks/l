// SRC/components/Inicio.js
import React from 'react';
import './MainContent.css';
import './Footer.css';
import './Header.css';
const Inicio = ({ onLoginClick }) => {
  return (
    <div className="main-content">
       <header className="header">
      <nav className="navbar">
        <div className="navbar-brand">
          <a href="/">PORSA Solution’s</a>
        </div>
        <ul className="nav-links">
          <li><a href="/">Inicio</a></li>
          <li><a href="/nuestras-marcas">Nuestras Marcas</a></li>
          <li><a href="/talleres">Talleres</a></li>
          <li><a href="/repuestos">Repuestos</a></li>
       
          <li><a href="/about">Acerca de Nosotros</a></li>
        </ul>
        <div className="nav-buttons">
        <button  className="btn btn-primary" onClick={onLoginClick}>Iniciar Sesión</button>
         
          
        </div>
      </nav>
    </header>
    <section className="hero-section"  >
      <div className="hero-content">
        <h1>PORSA Solution’s </h1>
        <p>Historial de Registro automotriz</p>
        <div className="cta-buttons">
          <a href="/Usuario" className="btn btn-primary">Ingrese Numero de placa</a>
       
      
        </div>
      </div>
      
    </section>
    <footer className="footer">
  <div className="footer-content" style={{ display: 'flex', justifyContent: 'space-between' }}>
    <div className="footer-column" style={{ flex: '1', marginRight: '20px' }}>
      <div className="footer-section">
        <h4>Enlaces Rápidos</h4>
        <ul>
          <li><a href="/">Inicio</a></li>
          <li><a href="/Facebook">Facebook</a></li>
          <li><a href="/Instagram">Instagram</a></li>
          <li><a href="/repuestos">Repuestos</a></li>
          <li><a href="/about">Acerca de Nosotros</a></li>
        </ul>
      </div>
      <div className="footer-section">
        <h4>Síguenos</h4>
        <ul className="social-links">
          <li><a href="https://www.facebook.com"><i className="fab fa-facebook"></i></a></li>
          <li><a href="https://www.instagram.com"><i className="fab fa-instagram"></i></a></li>
          <li><a href="https://www.youtube.com"><i className="fab fa-youtube"></i></a></li>
          <li><a href="https://www.linkedin.com"><i className="fab fa-linkedin"></i></a></li>
        </ul>
      </div>
    </div>
    <div className="footer-column" style={{ flex: '1' }}>
      <div className="footer-section">
        <h4>Contáctanos</h4>
        <p>Dirección: Calle Principal, Ciudad, País</p>
        <p>Teléfono: +1 123 456 7890</p>
        <p>Email: info@PORSA Solution’s.com</p>
      </div>
    </div>
  </div>
  <div className="footer-bottom">
    <p>&copy; {new Date().getFullYear()} PORSA Solution’s. Todos los derechos reservados.</p>
  </div>
</footer>

  </div>
  );
};

export default Inicio;
