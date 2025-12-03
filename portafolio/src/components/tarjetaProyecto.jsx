

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      <div className="project-header">
        <h3 className="project-title">{project.title}</h3>
        <div className="project-links">
          <a 
            href={project.githubUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="project-link"
            title="Código en GitHub"
          >
            <span>📂</span>
          </a>
          <a 
            href={project.demoUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="project-link demo"
            title="Ver Demo"
          >
            <span>🌐</span>
          </a>
        </div>
      </div>
      
      <p className="project-description">{project.description}</p>
      
      <div className="project-technologies">
        {project.technologies.map((tech, index) => (
          <span key={index} className="tech-tag">{tech}</span>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;