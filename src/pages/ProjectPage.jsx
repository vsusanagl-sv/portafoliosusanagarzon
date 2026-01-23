import React from "react";
import { useParams } from "react-router-dom";
import { getProjectBySlug } from "../data/projects";

const ProjectPage = () => {
  const { slug } = useParams();
  const project = getProjectBySlug(slug);

  if (!project) {
    return (
      <section>
        <h1>Proyecto no encontrado</h1>
        <p>No se encontraron datos para el proyecto solicitado.</p>
      </section>
    );
  }

  return (
    <section className="project">
      <h1 className="project__title">{project.title}</h1>
      <p className="project__description">{project.description}</p>

      {/* Galería de imágenes */}
      {project.images && project.images.length > 0 && (
        <div className="project__gallery">
          {project.images.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`${project.title} screenshot ${index + 1}`}
              className="project__image"
            />
          ))}
        </div>
      )}
      {project.links && (
        <div>
          {project.figmaLinks && project.figmaLinks.length > 0 && (
            <div className="project__figma-section">
              <h2 className="project__section-title">Prototipos Interactivos</h2>
              {project.figmaLinks.map((figma, index) => (
                <div key={index} className="project__figma-container">
                  <div className="project__figma-header">
                    <h3 className="project__figma-title">{figma.title}</h3>
                    <div className="project__figma-buttons">
                      <a
                        href={figma.directUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project__button project__button--figma"
                      >
                        {figma.botonNameFigma}
                      </a>

                      {figma.botonNameSite && (
                        <a
                          href={figma.linkSate}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project__button project__button--site"
                        >
                          {figma.botonNameSite}
                        </a>
                      )}
                    </div>
                  </div>
                  {figma.embedUrl && (
                    <iframe
                      className="project__figma-embed"
                      src={figma.embedUrl}
                      allowFullScreen
                      title={figma.title}
                    />
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </section>
  );
};

export default ProjectPage;
