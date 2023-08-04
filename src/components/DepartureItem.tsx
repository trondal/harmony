import { Typography } from '@mui/material';
import { EstimatedDeparture } from '../types/Entur';
import { BusIcon, MetroIcon, TramIcon } from '@entur/icons';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';

import { t } from 'i18next';

interface Props {
  data: EstimatedDeparture;
}

function DepartureItem(props: Props) {
  const info = props.data.serviceJourney.line;

  return (
    <TableRow>
      <TableCell sx={{ display: 'flex', alignItems: 'center' }}>
        {info.transportMode === 'bus' && <BusIcon />}
        {info.transportMode === 'metro' && <MetroIcon />}
        {info.transportMode === 'tram' && <TramIcon />}
        <Typography sx={{ ml: 1 }}>{info.publicCode}</Typography>
        <Typography sx={{ ml: 1 }}>
          {props.data.destinationDisplay.frontText}
        </Typography>
      </TableCell>
      <TableCell>
        {t('date.ago', { date: new Date(props.data.expectedDepartureTime) })}
      </TableCell>
      <TableCell>{props.data.quay.publicCode}</TableCell>
    </TableRow>
  );
}

export default DepartureItem;
