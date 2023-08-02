import { useTranslation } from 'react-i18next';
import { EnTurService } from './services/EnTurService';
import { z } from 'zod';

const envSchema = z.object({
  VITE_ENTUR_API: z.string(),
  VITE_APP_NAME: z.string(),
  VITE_STOP_NAME: z.string()
});

const result = envSchema.safeParse({
  VITE_ENTUR_API: import.meta.env.VITE_ENTUR_API,
  VITE_APP_NAME: import.meta.env.VITE_APP_NAME,
  VITE_STOP_NAME: import.meta.env.VITE_STOP_PLACE
});

function App() {
  const { t } = useTranslation();

  if (!result.success) {
    return <pre>{JSON.stringify(result.error.issues, null, 2)}</pre>;
  }

  const enturService = new EnTurService(
    import.meta.env.VITE_ENTUR_API,
    import.meta.env.VITE_APP_NAME,
    import.meta.env.VITE_STOP_PLACE
  );
  void enturService.getRoutes();

  return (
    <div>
      <h1>{t('english')}</h1>
    </div>
  );
}

export default App;
