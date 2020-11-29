import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import translationEng from "./locales/en/translation.json";
import translationHun from "./locales/hun/translation.json";

i18n.use(LanguageDetector).init({
  lng: 'hun',
  resources: {
    hun:{
      translations: translationHun
  },
    en: {
      translations: translationEng
    }
  },
  fallbackLng: "hun",
  debug: true,

  // have a common namespace used around the full app
  ns: ["translations"],
  defaultNS: "translations",

  keySeparator: false, // we use content as keys

  interpolation: {
    escapeValue: false, // not needed for react!!
    formatSeparator: ","
  },

  react: {
    wait: true
  }
});

export default i18n;