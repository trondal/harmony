import { Typography } from '@mui/material';
import { BusIcon, MetroIcon, TramIcon } from '@entur/icons';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';

import { t } from 'i18next';
import { EstimatedDeparture } from '../types/Entur';

interface Properties {
  data: EstimatedDeparture;
}

function DepartureItem({ data }: Properties) {
  const info = data.serviceJourney.line;

  return (
    <TableRow>
      <TableCell sx={{ display: 'flex', alignItems: 'center' }}>
        {info.transportMode === 'bus' && <BusIcon />}
        {info.transportMode === 'metro' && <MetroIcon />}
        {info.transportMode === 'tram' && <TramIcon />}
        <Typography sx={{ ml: 1 }}>{info.publicCode}</Typography>
        <Typography sx={{ ml: 1 }}>
          {data.destinationDisplay.frontText}
        </Typography>
      </TableCell>
      <TableCell>
        {t('date.ago', { date: new Date(data.expectedDepartureTime) })}
      </TableCell>
      <TableCell>{data.quay.publicCode}</TableCell>
    </TableRow>
  );
}

export { DepartureItem };
