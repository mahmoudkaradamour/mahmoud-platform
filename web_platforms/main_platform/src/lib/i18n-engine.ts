import ar from '../../../shared/i18n/ar.json';
import en from '../../../shared/i18n/en.json';

/**
 * Enterprise Single Source of Truth I18n Engine.
 * Centralizes all platform strings to a unified dictionary.
 */
const dictionaries: any = { ar, en };

export const getTranslation = (lang: string, key: string) => {
  const keys = key.split('.');
  let result = dictionaries[lang] || dictionaries['en'];

  for (const k of keys) {
    result = result?.[k];
  }

  return result || key;
};
