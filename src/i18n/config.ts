/* import {
    format as formatDate,
    formatDistance,
    formatRelative,
    isDate
} from 'date-fns'; */
// import { enUS as en, nb } from 'date-fns/locale';
import i18n from 'i18next';
//import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import english from './locales/en/translation.json';
import norwegian from './locales/nb/translation.json';

// const locales: { [index: string]: Locale } = { nb, en };


void i18n
    .use(initReactI18next)
    .init({
        //ignoreJSONStructure: false,
        fallbackLng: 'en',
        debug: true, //process.env.NODE_ENV === 'development',
        defaultNS: 'translation',
        keySeparator: '.',
        lng: 'nb',
        resources: {
            en: {
                translation: english
            },
            nb: {
                translation: norwegian
            }
        },
        /* interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
            format: (value, format, lng = 'en') => {
                if (!lng) {
                    return value;
                }
                if (!format) {
                    return value;
                }
                if (isDate(value)) {
                    const locale = locales[lng];
                    if (format === 'relative')
                        return formatRelative(value, new Date(), { locale });
                    if (format === 'ago')
                        return formatDistance(value, new Date(), {
                            locale,
                            addSuffix: true
                        });
                    return formatDate(value, format, { locale });
                }
                return value;
            }
        } */
    });

export default i18n;