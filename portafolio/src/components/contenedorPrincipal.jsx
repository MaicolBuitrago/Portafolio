import React from 'react';
import ProjectCard from './tarjetaProyecto';
import { 
  FaUser, 
  FaRocket, 
  FaCertificate, 
  FaTools,
  FaGraduationCap,
  FaAws
} from 'react-icons/fa';
import { 
  SiReact, 
  SiJavascript, 
  SiHtml5, 
  SiCss3,
  SiNodedotjs,
  SiExpress,
  SiSupabase,
  SiRender,
  SiNetlify,
  SiPython  
} from 'react-icons/si';

const MainContent = ({ activeSection, setActiveSection, sections }) => {
  const projects = [
    {
      id: 1,
      title: "Almacén Dulce Hogar - E-commerce",
      description: "Plataforma de comercio electrónico completa para almacén de electrodomésticos y cosas para el hogar con carrito de compras, gestión de inventario y panel administrativo.",
      technologies: ["React", "Node.js", "Supabase", "JWT", "Render", "Netlify"],
      githubUrl: "https://github.com/VictorPersonal/proyectoalmacen",
      demoUrl: "https://dulchehogar.netlify.app"
    },
    {
      id: 2,
      title: "Sistema de Comandas para Restaurante",
      description: "Sistema completo de gestión para restaurante con login para 3 tipos de usuarios (registrador, mesero, cocinero). Permite gestionar platos, comandas, clientes, genera informes diarios y tiene dashboard integrado.",
      technologies: ["Python", "MySQL", "PowerBy"],
      githubUrl: "https://github.com/MaicolBuitrago/Sistema-de-restaurante",
      features: [
        "Sistema de autenticación triple (registrador/mesero/cocinero)",
        "Gestión completa de comandas y pedidos",
        "Dashboard con reportes diarios",
        "Arquitectura MVC",
        "Base de datos Mysql"
      ]
    },
    {
      id: 3,
      title: "Sistema de Gestión de Personas - Registraduría",
      description: "Sistema para gestión de registros de personas, con catálogos de países, departamentos y ciudades. Implementa CRUD completo",
      technologies: ["React", "Supabase", "CSS ", "Netlify", "Render"],
      githubUrl: "https://github.com/MaicolBuitrago/R-registraduria",
      demoUrl: "https://registraduria-r.netlify.app"
    },
    {
      id: 4,
      title: "Sistema de Parqueadero - Control de Vehículos",
      description: "Aplicación para gestionar el ingreso y salida de vehículos en un parqueadero.",
      technologies: ["React", "Node.js", "Supabase", "Render", "Netlify"],
      githubUrl: "https://github.com/MaicolBuitrago/R-parqueadero",
      demoUrl: "https://parqueadero-r.netlify.app"
    }
  ];

  const certificates = [
    {
      name: "AWS Academy Graduate - Cloud Security Foundations",
      institution: "Amazon Web Services (AWS)",
      date: "Noviembre 2025",
      hours: "20 horas",
      badgeUrl: "https://drive.google.com/file/d/1Vv-GRC6nMvaQWffKUmwqLgI4iaoUhY9a/view?usp=sharing",
      credentialId: "AWS Security Foundations",
      icon: <FaAws className="certificate-icon aws" />
    }
  ];

  const renderContent = () => {
    switch (activeSection) {
      case 'sobre-mi':
        return (
          <div className="section-content">
            <h2>Hola, soy Maicol 👋</h2>
            <p className="about-text">
              Aún no tengo experiencia laboral formal, pero sí experiencia práctica desarrollando 
              aplicaciones completas. He construido sistemas funcionales usando React, Node.js, 
              PostgreSQL.
            </p>
            
            <h3><FaTools className="section-icon" /> Habilidades Técnicas</h3>
            <div className="skills-grid">
              <div className="skill-category">
                <h4>Frontend</h4>
                <ul>
                  <li><SiReact className="skill-icon" /> React.js</li>
                  <li><SiJavascript className="skill-icon" /> JavaScript (ES6+)</li>
                  <li><SiHtml5 className="skill-icon" /> HTML5</li>
                  <li><SiCss3 className="skill-icon" /> CSS3</li>
                </ul>
              </div>
              
              <div className="skill-category">
                <h4>Backend & APIs</h4>
                <ul>
                  <li><SiPython className="skill-icon" /> Python</li>
                  <li><SiNodedotjs className="skill-icon" /> Node.js & Express</li>
                  <li><SiSupabase className="skill-icon" /> Supabase</li>
                  <li><SiExpress className="skill-icon" /> REST APIs</li>
                </ul>
              </div>

              <div className="skill-category">
                <h4>DevOps & Cloud</h4>
                <ul>
                  <li><FaAws className="skill-icon" /> AWS</li>
                  <li><SiRender className="skill-icon" /> Render</li>
                  <li><SiNetlify className="skill-icon" /> Netlify</li>
                </ul>
              </div>
            </div>
          </div>
        );

      case 'proyectos':
        return (
          <div className="section-content">
            <div className="projects-grid">
              {projects.map(project => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        );

      case 'certificados':
        return (
          <div className="section-content">
            <h2><FaGraduationCap className="section-icon" /> Certificados y Cursos</h2>
            <div className="certificates-list">
              {certificates.map((cert, index) => (
                <div key={index} className={`certificate-card ${index === 0 ? 'aws-certificate' : ''}`}>
                  <div className="certificate-header">
                    <div className="certificate-title">
                      {index === 0 && <FaAws className="certificate-icon aws" />}
                      <h3>{cert.name}</h3>
                    </div>
                    <FaCertificate className="certificate-badge" />
                  </div>
                  <div className="certificate-details">
                    <p><strong>Institución:</strong> {cert.institution}</p>
                    <p><strong>Fecha:</strong> {cert.date}</p>
                    <p><strong>Duración:</strong> {cert.hours}</p>
                    {cert.credentialId && <p><strong>Credencial:</strong> {cert.credentialId}</p>}
                  </div>
                  <a 
                    href={cert.badgeUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="certificate-link"
                  >
                    Ver Credencial <FaRocket className="link-icon" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        );

      default:
        return <div>Selecciona una sección</div>;
    }
  };

  return (
    <div className="main-content">
      {/* Navegación Superior */}
      <nav className="top-navigation">
        <button 
          className={`nav-tab ${activeSection === 'sobre-mi' ? 'active' : ''}`}
          onClick={() => setActiveSection('sobre-mi')}
        >
          <FaUser className="nav-icon" />
          Sobre Mí
        </button>
        <button 
          className={`nav-tab ${activeSection === 'proyectos' ? 'active' : ''}`}
          onClick={() => setActiveSection('proyectos')}
        >
          <FaRocket className="nav-icon" />
          Proyectos
        </button>
        <button 
          className={`nav-tab ${activeSection === 'certificados' ? 'active' : ''}`}
          onClick={() => setActiveSection('certificados')}
        >
          <FaCertificate className="nav-icon" />
          Certificados
        </button>
      </nav>

      {/* Contenido Principal */}
      <div className="content-area">
        <header className="content-header">
          <h1>{sections[activeSection]}</h1>
        </header>
        {renderContent()}
      </div>
    </div>
  );
};

export default MainContent;