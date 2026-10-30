import { createContext, useContext, useState, useEffect } from "react";

const LanguageContext = createContext();

// Orden de prioridad para decidir el idioma inicial:
// 1) parámetro ?lang=es|en en la URL (forzado por quien comparte el link)
// 2) elección explícita guardada (la persona ya usó el botón antes)
// 3) idioma del navegador de quien entra
// 4) español por defecto
const detectInitialLang = () => {
  try {
    const params = new URLSearchParams(window.location.search);
    const urlLang = params.get("lang");
    if (urlLang === "en" || urlLang === "es") return urlLang;
  } catch (e) {}

  try {
    const isExplicit = window.localStorage.getItem("site-lang-explicit") === "true";
    const stored = window.localStorage.getItem("site-lang");
    if (isExplicit && (stored === "en" || stored === "es")) return stored;
  } catch (e) {}

  try {
    const browserLang = (navigator.language || navigator.userLanguage || "es").toLowerCase();
    if (browserLang.startsWith("en")) return "en";
  } catch (e) {}

  return "es";
};

export const LanguageProvider = ({ children }) => {
  const [lang, setLangState] = useState(() => detectInitialLang());

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  // explicit=true marca que la persona eligió el idioma a propósito
  // (botón o link con ?lang=), para que esa elección tenga prioridad
  // la próxima vez que entre, por encima de la detección automática.
  const setLang = (newLang, { explicit = true } = {}) => {
    setLangState(newLang);
    try {
      window.localStorage.setItem("site-lang", newLang);
      if (explicit) {
        window.localStorage.setItem("site-lang-explicit", "true");
      }
    } catch (e) {}
  };

  const toggleLang = () => setLang(lang === "es" ? "en" : "es");

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
