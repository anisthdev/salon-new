import { useTranslation } from 'react-i18next';

export const useLanguage = () => {
  const { i18n, t } = useTranslation();

  const toggleLanguage = () => {
    const newLng = i18n.language === 'en' ? 'hi' : 'en';
    i18n.changeLanguage(newLng);
  };

  const currentLanguage = i18n.language;

  return {
    t,
    toggleLanguage,
    currentLanguage,
  };
};
