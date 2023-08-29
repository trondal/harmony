import { Typography } from '@mui/material';
import Card from '@mui/material/Card';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

function Heating() {
  const { t } = useTranslation();
  return (
    <Card>
      <Typography>{t('heating')}</Typography>
      <Link to="/lights">Lights</Link>
    </Card>
  );
}

export default Heating;
