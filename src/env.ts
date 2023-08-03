import { z } from 'zod';

const envSchema = z.object({
    VITE_ENTUR_API: z.string(),
    VITE_APP_NAME: z.string(),
    VITE_STOP_PLACE: z.string()
});

const result = envSchema.safeParse({
    VITE_ENTUR_API: import.meta.env.VITE_ENTUR_API,
    VITE_APP_NAME: import.meta.env.VITE_APP_NAME,
    VITE_STOP_PLACE: import.meta.env.VITE_STOP_PLACE
});

if (!result.success) {
    throw new Error('There is an error with the server environment variables');
}

export const ENV_VARIABLES = result.data;