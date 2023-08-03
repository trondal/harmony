import Card from '@mui/material/Card';
import { useTranslation } from 'react-i18next';

const HomePage = () => {
  const { t } = useTranslation();
  return <Card>HomePage {t('english')}</Card>;
};

export default HomePage;
