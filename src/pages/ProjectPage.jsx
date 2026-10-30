import React from "react";
import { useParams } from "react-router-dom";
import { getProjectBySlug } from "../data/projects";
import { useLanguage } from "../context/LanguageContext";
import { t } from "../i18n/translations";

const ProjectPage = () => {
  const { slug } = useParams();
  const project = getProjectBySlug(slug);
  const { lang } = useLanguage();
  const tr = t(lang);

  if (!project) {
    return (
      <section>
        <h1>{tr.project.notFoundTitle}</h1>
        <p>{tr.project.notFoundBody}</p>
      </section>
    );
  }

  const title = lang === "en" && project.title_en ? project.title_en : project.title;
  const description = lang === "en" && project.description_en ? project.description_en : project.description;

  return (
    <section className="project">
      <h1 className="project__title">{title}</h1>
      <p className="project__description">{description}</p>

      {/* Galería de imágenes */}
      {project.images && project.images.length > 0 && (
        <div className="project__gallery">
          {project.images.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`${title} screenshot ${index + 1}`}
              className="project__image"
            />
          ))}
        </div>
      )}
      {project.links && (
        <div>
          {project.figmaLinks && project.figmaLinks.length > 0 && (
            <div className="project__figma-section">
              <h2 className="project__section-title">{tr.project.prototypesTitle}</h2>
              {project.figmaLinks.map((figma, index) => {
                const figmaTitle = lang === "en" && figma.title_en ? figma.title_en : figma.title;
                const figmaBtn = lang === "en" && figma.botonNameFigma_en ? figma.botonNameFigma_en : figma.botonNameFigma;
                const siteBtn = lang === "en" && figma.botonNameSite_en ? figma.botonNameSite_en : figma.botonNameSite;
                return (
                  <div key={index} className="project__figma-container">
                    <div className="project__figma-header">
                      <h3 className="project__figma-title">{figmaTitle}</h3>
                      <div className="project__figma-buttons">
                        <a
                          href={figma.directUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project__button project__button--figma"
                        >
                          {figmaBtn}
                        </a>

                        {siteBtn && (
                          <a
                            href={figma.linkSate}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="project__button project__button--site"
                          >
                            {siteBtn}
                          </a>
                        )}
                      </div>
                    </div>
                    {figma.embedUrl && (
                      <iframe
                        className="project__figma-embed"
                        src={figma.embedUrl}
                        allowFullScreen
                        title={figmaTitle}
                      />
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </div>
      )}
    </section>
  );
};

export default ProjectPage;
