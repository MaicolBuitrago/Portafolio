import React, { useState } from 'react';
import React from 'react'
import Sidebar from './components/barra';
import MainContent from './components/contenedorPrincipal';
import './styles/App.css';

function App() {
  const [activeSection, setActiveSection] = useState('sobre-mi');

  const sections = {
    'sobre-mi': 'Sobre Mí',
    'proyectos': 'Mis Proyectos',
    'certificados': 'Certificados'
  };

  return (
    <div className="app">
      <Sidebar />
      <MainContent 
        activeSection={activeSection} 
        setActiveSection={setActiveSection}
        sections={sections} 
      />
    </div>
  );
}

export default App;