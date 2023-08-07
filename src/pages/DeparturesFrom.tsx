import { useGetDeparturesFromQuery } from '../services/EnTurService';
import DepartureItem from '../components/DepartureItem';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import { CARL_BERNER } from '../constants';

const TransportFrom = () => {
  const { data: stop, isLoading } = useGetDeparturesFromQuery(CARL_BERNER, {
    pollingInterval: 15000
  });
  if (isLoading) return <div>Loading...</div>;

  return (
    <TableContainer>
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

export default TransportFrom;
