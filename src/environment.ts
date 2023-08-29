import { z } from 'zod';

const environmentSchema = z.object({
    VITE_ENTUR_API: z.string(),
    VITE_APP_NAME: z.string(),
    VITE_STOP_PLACE: z.string()
});

const result = environmentSchema.safeParse({
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    VITE_ENTUR_API: import.meta.env.VITE_ENTUR_API,
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    VITE_APP_NAME: import.meta.env.VITE_APP_NAME,
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    VITE_STOP_PLACE: import.meta.env.VITE_STOP_PLACE
});

if (!result.success) {
    throw new Error('There is an error with the server environment variables');
}

export const ENV_VARIABLES = result.data;