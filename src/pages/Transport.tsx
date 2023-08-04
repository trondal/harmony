import { useGetAllQuery } from '../services/EnTurService';
import DepartureItem from '../components/DepartureItem';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import Paper from '@mui/material/Paper';
import TableContainer from '@mui/material/TableContainer';

const Transport = () => {
  const { data: stop, isLoading } = useGetAllQuery();
  if (isLoading) return <div>Loading...</div>;

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableBody>
          {stop &&
            stop.estimatedCalls.map((departure, index) => (
              <DepartureItem key={index} data={departure} />
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Transport;
