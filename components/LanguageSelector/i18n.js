
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import english from './../../store/locales/en.json';
import french from './../../store/locales/fr.json';
import deutsch from './../../store/locales/de.json';


const resources = {
  de: { translation: deutsch },
  fr: { translation: french },
  en: { translation: english },
};

i18n
  .use(LanguageDetector) // Important pour la détection/sauvegarde
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'de',
    lng: 'de', // Langue par défaut
    debug: true, // Pour voir les logs de debug
    
    // Configuration de la détection de langue
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage'], // Sauvegarde dans localStorage
    },

    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;