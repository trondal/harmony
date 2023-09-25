import Grid from '@mui/material/Grid';
// import CircularProgress from '@mui/material/CircularProgress';
// import { useGetTokenQuery } from '../services/AdaxService';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import DirectionsTransitFilledSharpIcon from '@mui/icons-material/DirectionsTransitFilledSharp';
import LightModeSharpIcon from '@mui/icons-material/LightModeSharp';
import DeviceThermostatIcon from '@mui/icons-material/DeviceThermostat';
import Button from '@mui/material/Button';
import { GridItem2 } from '../components/GridItem';

function HomePage() {
  /* const { data, isFetching, isLoading } = useGetTokenQuery();

  if (isLoading) return <CircularProgress />;
  if (isFetching) return <CircularProgress />;
  if (!data) return <CircularProgress />;

  localStorage.setItem('adax', JSON.stringify(data)); */

  /*   const cards = [
    { name: 'Heating', link: '/heating' },
    { name: 'Lights', link: '/lights' },
    { name: 'Transport', link: '/transport' },
    { name: 'Lock door', link: '/locks' }
  ]; */

  /*  if (!data) {
    return <CircularProgress />;
  } */
  return (
    <Grid container sx={{ flexGrow: 1, height: '85vh' }}>
      <GridItem2>
        <Button variant="contained" sx={{ border: '1px solid blue' }}>
          <DirectionsTransitFilledSharpIcon />
        </Button>
      </GridItem2>
      <GridItem2>
        <Button variant="contained" sx={{ border: '1px solid blue' }}>
          <LightModeSharpIcon />
        </Button>
      </GridItem2>
      <GridItem2>
        <Button variant="contained" sx={{ border: '1px solid blue' }}>
          <DeviceThermostatIcon />
        </Button>
      </GridItem2>
      <GridItem2>
        <Button variant="contained" sx={{ border: '1px solid blue' }}>
          <VpnKeyIcon />
        </Button>
      </GridItem2>
    </Grid>
  );
  /*   return (
    <Grid container>
      {cards.map((card) => (
        <Grid item key={card.name}>
          <Box sx={{ m: 1 }}>
            <Fab variant="extended">
              <Link to={card.link}>{card.name}</Link>
              <ArrowForwardIosIcon sx={{ mr: 1 }} />
              {card.name}
            </Fab>
          </Box>
        </Grid>
      ))}
    </Grid>
  ); */
}

export { HomePage };
