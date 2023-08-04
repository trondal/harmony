import {
    format as formatDate,
    formatDistance,
    formatRelative,
    isDate,
} from 'date-fns';
import { enUS as en, nb } from 'date-fns/locale';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import english from './locales/en/translation.json';
import norwegian from './locales/nb/translation.json';
import LanguageDetector from 'i18next-browser-languagedetector';

const locales: { [index: string]: Locale } = { nb, en };

function isValidDate(arg: unknown): arg is Date {
    return isDate(arg);
}

void i18n
    .use(initReactI18next)
    .use(LanguageDetector)
    .init({
        debug: import.meta.env.MODE === 'development',
        defaultNS: 'translation',
        keySeparator: '.',
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
    });

export default i18n;