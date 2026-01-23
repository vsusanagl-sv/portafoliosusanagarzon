import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import SectionPage from './pages/SectionPage';
import ProjectPage from './pages/ProjectPage';
import Portfolio from "./pages/Portfolio";

/**
 * Componente principal de la aplicación.
 * Define el enrutamiento y envuelve todas las páginas con el layout que incluye
 * el encabezado y el pie de página.  Las rutas usan parámetros dinámicos para
 * cargar secciones y proyectos específicos.
 */
function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* Secciones principales */}
          <Route
            path="/ux-ui"
            element={<SectionPage sectionId="ux-ui" />}
          />
          <Route
            path="/redes-sociales"
            element={<SectionPage sectionId="redes-sociales" />}
          />
          <Route
            path="/impresion"
            element={<SectionPage sectionId="impresion" />}
          />
          {/* Páginas de proyecto dentro de cada sección */}
          <Route
            path="/ux-ui/:slug"
            element={<ProjectPage sectionId="ux-ui" />}
          />
          <Route
            path="/redes-sociales/:slug"
            element={<ProjectPage sectionId="redes-sociales" />}
          />
          <Route
            path="/impresion/:slug"
            element={<ProjectPage sectionId="impresion" />}
          />
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;