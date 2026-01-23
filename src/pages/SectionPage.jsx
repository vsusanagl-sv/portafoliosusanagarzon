import React from 'react';
import { Link } from 'react-router-dom';
import { getSectionById } from '../data/projects';

const SectionPage = ({ sectionId }) => {
  const section = getSectionById(sectionId);
  if (!section) {
    return (
      <section>
        <h1 className="section__title">Sección no encontrada</h1>
        <p className="project__description">No existe la sección solicitada.</p>
      </section>
    );
  }
  return (
    <section className="section">
      <h1 className="section__title">{section.title}</h1>
      <p className="project__description">{section.description}</p>
      <div className="section__grid">
        {section.items.map((item) => (
          <div key={item.slug} className="section__card">
            {item.images && (
              <img
                src={item.images}
                className="project__image"
                alt={item.title}
              />
            )}
            <div className="section__card-content">
              <h2 className="section__card-title">{item.title}</h2>
              <Link
                to={`${section.path}/${item.slug}`}
                className="section__button"
              >
                Ver proyecto
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SectionPage;