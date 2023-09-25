/* eslint-disable react/function-component-definition */
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import React from 'react';

const GridItem2: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => (
  <Grid
    item
    xs={6}
    sx={{
      border: '1px solid black',
      minHeight: '50px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }}
  >
    <Box sx={{ minHeight: '50px' }}>{children}</Box>
  </Grid>
);

export { GridItem2 };
