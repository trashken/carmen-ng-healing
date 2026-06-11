import en from './en';
import jp from './jp';
import zh from './zh';

export const dictionaries = { en, jp, zh } as const;

export type Locale = keyof typeof dictionaries;
export const locales: Locale[] = ['en', 'jp', 'zh'];
export const defaultLocale: Locale = 'en';

export function getDictionary(locale: Locale) {
  return dictionaries[locale] ?? dictionaries[defaultLocale];
}

export function isLocale(value: string): value is Locale {
  return value in dictionaries;
}
