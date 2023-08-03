// import { useTranslation } from 'react-i18next';
import { EnTurService } from '../services/EnTurService';
import Card from '@mui/material/Card';

const Transport = () => {
  const enturService = new EnTurService(
    import.meta.env.VITE_ENTUR_API,
    import.meta.env.VITE_APP_NAME,
    import.meta.env.VITE_STOP_PLACE
  );
  void enturService.getRoutes();
  // const { t } = useTranslation();
  return <Card>Transport</Card>;
};

export default Transport;
