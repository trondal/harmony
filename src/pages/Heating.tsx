import CardContent from '@mui/material/CardContent';
import Card from '@mui/material/Card';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import CardHeader from '@mui/material/CardHeader';
import Button from '@mui/material/Button';
import { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Grid from '@mui/material/Grid';
// import { AccessToken, useGetContentQuery } from '../services/AdaxService';

function Heating() {
  const { t } = useTranslation();

  const [temperature, setTemperature] = useState(17);

  const increaseTemperature = () => {
    setTemperature(temperature + 1);
  };

  const decreaseTemperature = () => {
    setTemperature(temperature - 1);
  };

  /* if (!localStorage.getItem('adax')) {
    return <Navigate to="/" />;
  } */

  /*   const raw = localStorage.getItem('adax') ?? '{}';

  const token = JSON.parse(raw) as AccessToken;
  // console.warn(token.access_token);

  const info = useGetContentQuery(token.access_token);
  console.warn(info); */
  return (
    <>
      <Grid container spacing={2} sx={{ mt: 1 }}>
        <Grid item xs={3} md={3}>
          <Card sx={{ border: `1px solid black` }}>
            <CardHeader title={t('apartment')} />
            <CardContent>
              <Button
                size="large"
                variant="contained"
                onClick={decreaseTemperature}
              >
                <RemoveIcon />
              </Button>
              <Button size="large" variant="text">
                {temperature}°C
              </Button>
              <Button
                size="large"
                variant="contained"
                onClick={increaseTemperature}
              >
                <AddIcon />
              </Button>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={3} md={3}>
          <Card sx={{ border: `1px solid black` }}>
            <CardHeader title={t('living_room')} />
            <CardContent>
              <Button
                size="large"
                variant="contained"
                onClick={decreaseTemperature}
              >
                <RemoveIcon />
              </Button>
              <Button size="large" variant="text">
                {temperature}°C
              </Button>
              <Button
                size="large"
                variant="contained"
                onClick={increaseTemperature}
              >
                <AddIcon />
              </Button>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={3} md={3}>
          <Card sx={{ border: `1px solid black` }}>
            <CardHeader title={t('bed_room')} />
            <CardContent>
              <Button
                size="large"
                variant="contained"
                onClick={decreaseTemperature}
              >
                <RemoveIcon />
              </Button>
              <Button size="large" variant="text">
                {temperature}°C
              </Button>
              <Button
                size="large"
                variant="contained"
                onClick={increaseTemperature}
              >
                <AddIcon />
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Link to="/lights">Lights</Link>
    </>
  );
}

export { Heating };
