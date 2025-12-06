import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './en.json';
import hi from './hi.json';

const resources = {
  en: { translation: en },
  hi: { translation: hi },
};

// Get saved language from localStorage or default to 'en'
const savedLanguage = localStorage.getItem('salon-language') || 'en';

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: savedLanguage,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

// Save language preference when it changes
i18n.on('languageChanged', (lng) => {
  localStorage.setItem('salon-language', lng);
});

export default i18n;
