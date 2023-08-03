import { Typography } from '@mui/material';
import Card from '@mui/material/Card';
import { Link } from 'react-router-dom';

const Lights = () => {
  return (
    <Card>
      <Typography>Lights</Typography>
      <Link to="/heating">Heating</Link>
    </Card>
  );
};

export default Lights;
