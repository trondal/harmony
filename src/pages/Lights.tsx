import { Typography } from '@mui/material';
import Card from '@mui/material/Card';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

function Lights() {
  const { t } = useTranslation();
  return (
    <Card>
      <Typography>{t('lights')}</Typography>
      <Link to="/heating">Heating</Link>
      <Link to="/bobbo">NotFound example</Link>
    </Card>
  );
}

export { Lights };
