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
import { Provider } from 'react-redux';
import { store } from './store';
import NotFound from './pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <ResponsiveAppBar />
          <Routes>
            {AppRoutes.map((route) => (
              <Route path={route.path} key={route.key} element={route.element}>
                {route.label}
              </Route>
            ))}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </ThemeProvider>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
