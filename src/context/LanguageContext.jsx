import { createContext, useContext, useState, useEffect } from "react";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState(() => {
    try {
      const stored = window.localStorage.getItem("site-lang");
      if (stored === "en" || stored === "es") return stored;
    } catch (e) {}
    return "es";
  });

  useEffect(() => {
    try {
      window.localStorage.setItem("site-lang", lang);
    } catch (e) {}
    document.documentElement.lang = lang;
  }, [lang]);

  const toggleLang = () => setLang((prev) => (prev === "es" ? "en" : "es"));

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
