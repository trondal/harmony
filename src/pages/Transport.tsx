import Grid from '@mui/material/Grid'; // Grid version 1
import CardHeader from '@mui/material/CardHeader';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import DeparturesFromTo from './DeparturesFromTo';
import DeparturesFrom from './DeparturesFrom';

function Transport() {
  return (
    <Grid container spacing={2} sx={{ mt: 1 }}>
      <Grid item xs={12} md={6}>
        <Card>
          <CardHeader
            sx={{ textAlign: 'center' }}
            title="From Carl Berner to Jernbanetorget"
          />
          <CardContent>
            <DeparturesFromTo />
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} md={6}>
        <Card>
          <CardHeader
            sx={{ textAlign: 'center' }}
            title="From Carl Berner to wherever"
          />
          <CardContent>
            <DeparturesFrom />
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}

export default Transport;
