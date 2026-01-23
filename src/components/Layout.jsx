import React from 'react';
import Header from './Header';
import Footer from './Footer';
import './Layout.css'; // Crearemos este archivo

/**
 * Componente de diseño que incluye el encabezado y pie de página.
 * Recibe como prop el contenido (children) que se mostrará entre ambos.
 */
const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Header />
      <main className="layout__main">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;