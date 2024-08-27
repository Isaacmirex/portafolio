import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import globalEN from './traslations/en/global.json'; // Ajusta la ruta si es necesario
import globalES from './traslations/es/global.json'; // Ajusta la ruta si es necesario

const resources = {
  en: {
    translation: globalEN,
  },
  es: {
    translation: globalES,
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en', // Idioma predeterminado
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;


