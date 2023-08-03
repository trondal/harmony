import { Typography } from '@mui/material';
import Alert from '@mui/material/Alert';
import { FC } from 'react';

interface Props extends Record<string, unknown> {
  error?: Error;
}
const Error: FC<Props> = ({ error }) => (
  <Alert severity="error">
    <Typography>{error && error.message}</Typography>
    <pre>{error && error.stack}</pre>
  </Alert>
);

export default Error;
