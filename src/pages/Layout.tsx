import { Outlet } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import ResponsiveAppBar from '../components/ResponsiveAppBar';
import { Provider } from 'react-redux';
import { store } from '../store';
import { ThemeProvider } from '@mui/material';
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

export default Layout;
