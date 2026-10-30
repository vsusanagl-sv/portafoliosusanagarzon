import React from 'react';
import { Link } from 'react-router-dom';
import { getSectionById } from '../data/projects';
import { useLanguage } from '../context/LanguageContext';
import { t } from '../i18n/translations';

const SectionPage = ({ sectionId }) => {
  const section = getSectionById(sectionId);
  const { lang } = useLanguage();
  const tr = t(lang);
  if (!section) {
    return (
      <section>
        <h1 className="section__title">{tr.section.notFoundTitle}</h1>
        <p className="project__description">{tr.section.notFoundBody}</p>
      </section>
    );
  }
  return (
    <section className="section">
      <h1 className="section__title">{lang === 'en' && section.title_en ? section.title_en : section.title}</h1>
      <p className="project__description">{lang === 'en' && section.description_en ? section.description_en : section.description}</p>
      <div className="section__grid">
        {section.items.map((item) => (
          <div key={item.slug} className="section__card">
            {item.images && (
              <img
                src={item.images}
                className="project__image"
                alt={lang === 'en' && item.title_en ? item.title_en : item.title}
              />
            )}
            <div className="section__card-content">
              <h2 className="section__card-title">{lang === 'en' && item.title_en ? item.title_en : item.title}</h2>
              <Link
                to={`${section.path}/${item.slug}`}
                className="section__button"
              >
                {tr.section.viewProject}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SectionPage;