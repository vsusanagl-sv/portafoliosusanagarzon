import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { t } from '../i18n/translations';
import './Footer.css';

/**
 * Pie de página simple que aparece al final de todas las páginas.  Utiliza
 * estilos discretos y se actualiza automáticamente el año.  Puede ampliarse
 * con enlaces a redes sociales u otra información de contacto.
 */
const Footer = () => {
  const year = new Date().getFullYear();
  const { lang } = useLanguage();
  const tr = t(lang);
  return (
    <footer className="footer">
      <div className="footer__container">
        <p>
          &copy; {year} Susana Garzón. {tr.footer.rights}
        </p>
      </div>
    </footer>
  );
};

export default Footer;