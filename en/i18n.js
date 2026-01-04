import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';

i18n
  .use(initReactI18next)  // passes i18n instance to react-i18next
  .use(LanguageDetector)   // detects user language
  .use(HttpApi)            // loads translations via HTTP (default expects /public/locales resources)
  .init({
    fallbackLng: 'en',
    debug: false,
    interpolation: { escapeValue: false }, // not needed for React (auto escapes)
    backend: {
      loadPath: process.env.PUBLIC_URL + '/locales/{{lng}}/{{ns}}.json'
    }
  });

export default i18n;
