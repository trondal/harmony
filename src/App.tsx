import { useTranslation } from 'react-i18next';
import { EnTurService } from './services/EnTurService';

function App() {
  const VITE_ENTUR_API: string = import.meta.env.VITE_ENTUR_API;
  const VITE_APP_NAME: string = import.meta.env.VITE_APP_NAME;
  const { t } = useTranslation();
  const enturService = new EnTurService(
    VITE_ENTUR_API,
    VITE_APP_NAME,
    'NSR:StopPlace:58189'
  );
  void enturService.getRoutes();

  return (
    <div>
      <h1>{t('english')}</h1>
    </div>
  );
}

export default App;
