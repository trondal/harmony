import "i18next";
// import all namespaces (for the default language, only)
import enNs1 from "../i18n/locales/en/translation.json";

declare module "i18next" {
    interface CustomTypeOptions {
        defaultNS: "translation",
        resources: {
            translation: typeof enNs1;
        };
    }
}