import { Typography } from '@mui/material';
import Alert from '@mui/material/Alert';
import { FC } from 'react';

interface Properties extends Record<string, unknown> {
  error?: Error;
}
const ErrorAlert: FC<Properties> = ({ error }) => (
  <Alert severity="error">
    <Typography>{error && error.message}</Typography>
    <pre>{error && error.stack}</pre>
  </Alert>
);

export { ErrorAlert };
