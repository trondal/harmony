import {
    format as formatDate,
    formatDistance,
    formatRelative,
    isDate,
} from 'date-fns';
import { enUS as en, nb } from 'date-fns/locale';
import i18next, { InitOptions } from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import english from './locales/en/translation.json';
import norwegian from './locales/nb/translation.json';

const locales: { [index: string]: Locale } = { nb, en };

function isValidDate(v: unknown): v is Date {
    return isDate(v);
}

export const options: InitOptions = {
    debug: false, // import.meta.env.MODE === 'development',
    defaultNS: 'translation',
    keySeparator: '.',
    lng: 'en',
    fallbackLng: 'en',
    resources: {
        en: {
            translation: english
        },
        nb: {
            translation: norwegian
        }
    },
    interpolation: {
        escapeValue: false, // not needed for react as it escapes by default
        format: (value: string, format: string | undefined, lng = 'en') => {
            if (!lng) {
                return value;
            }
            if (!format) {
                return value;
            }
            if (!isValidDate(value)) {
                return value;
            }
            const locale = locales[lng];
            if (format === 'relative') {
                return formatRelative(value, new Date(), { locale });
            }
            if (format === 'ago') {
                return formatDistance(value, new Date(), {
                    locale,
                    addSuffix: true
                });
            }
            return formatDate(value, format, { locale });
        }
    }
}

i18next
    .use(initReactI18next)
    .use(LanguageDetector)
    // eslint-disable-next-line unicorn/prefer-top-level-await
    .init(options).then().catch(() => console.error('Translation error'));