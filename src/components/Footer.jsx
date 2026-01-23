import React from 'react';
import './Footer.css';

/**
 * Pie de página simple que aparece al final de todas las páginas.  Utiliza
 * estilos discretos y se actualiza automáticamente el año.  Puede ampliarse
 * con enlaces a redes sociales u otra información de contacto.
 */
const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="footer__container">
        <p>
          &copy; {year} Susana Garzón. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;