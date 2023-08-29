import { Typography } from '@mui/material';
import Alert from '@mui/material/Alert';

function ErrorAlert({ message, stack }: Error) {
  return (
    <Alert severity="error">
      <Typography>{message && message}</Typography>
      <pre>{stack && stack}</pre>
    </Alert>
  );
}

export { ErrorAlert };
