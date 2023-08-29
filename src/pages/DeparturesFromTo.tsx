import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import { useGetDeparturesFromToQuery } from '../services/EnTurService';
import DepartureItem from '../components/DepartureItem';
import { CARL_BERNER, JERNBANETORGET } from '../constants';

function DeparturesFromTo() {
  const { data: stop, isLoading } = useGetDeparturesFromToQuery(
    { from: CARL_BERNER, to: JERNBANETORGET },
    {
      pollingInterval: 15000
    }
  );
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
}

export default DeparturesFromTo;
