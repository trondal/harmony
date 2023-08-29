import { Outlet } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material';
import { Provider } from 'react-redux';
import { ResponsiveAppBar } from '../components/ResponsiveAppBar';
import { store } from '../store';
import { theme } from '../theme';

function Layout() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <ResponsiveAppBar />
        <Outlet />
      </ThemeProvider>
    </Provider>
  );
}

export { Layout };
