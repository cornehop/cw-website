import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translations_en from "./Assets/Translations/en/translations.json";
import translations_nl from "./Assets/Translations/nl/translations.json";
import { defaultLanguage, languageLocalStorageKey } from "./Domain/LanguageCodes";

const getCurrentLanguage = () => {
  const item = window.localStorage.getItem(languageLocalStorageKey);
  return item ? JSON.parse(item) : defaultLanguage;
};

const resources = {
  en: {
    translation: translations_en
  },
  nl: {
    translation: translations_nl
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: getCurrentLanguage(),

    keySeparator: false,

    interpolation: {
      escapeValue: false
    }
  });

export default i18n;