import { Typography } from '@mui/material';
import Card from '@mui/material/Card';
import { Link } from 'react-router-dom';

const Heating = () => {
  return (
    <Card>
      <Typography>Heating</Typography>
      <Link to="/lights">Lights</Link>
    </Card>
  );
};

export default Heating;
