/// <reference types="vite/client" />

interface ImportMetaEnvironment {
    readonly VITE_ENTUR_API: string
    readonly VITE_APP_NAME: string
    readonly VITE_STOP_PLACE: string;
    readonly MODE_ENV: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnvironment
}

