import { z } from 'zod';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import CssBaseline from '@mui/material/CssBaseline';
import ResponsiveAppBar from './ResponsiveAppBar';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { AppRoutes } from './services/RouteService';
import { ThemeProvider } from '@mui/material';
import { theme } from './theme';

const envSchema = z.object({
  VITE_ENTUR_API: z.string(),
  VITE_APP_NAME: z.string(),
  VITE_STOP_NAME: z.string()
});

const result = envSchema.safeParse({
  VITE_ENTUR_API: import.meta.env.VITE_ENTUR_API,
  VITE_APP_NAME: import.meta.env.VITE_APP_NAME,
  VITE_STOP_NAME: import.meta.env.VITE_STOP_PLACE
});

function App() {
  if (!result.success) {
    return <pre>{JSON.stringify(result.error.issues, null, 2)}</pre>;
  }

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <ResponsiveAppBar />
        <Routes>
          {AppRoutes.map((route) => (
            <Route path={route.path} key={route.key} element={route.element}>
              {route.label}
            </Route>
          ))}
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
