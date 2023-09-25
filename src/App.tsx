import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider
} from 'react-router-dom';
import { z } from 'zod';
import { Layout } from './pages/Layout';
import { Lights } from './pages/Lights';
import { Transport } from './pages/Transport';
import { Heating } from './pages/Heating';
import { HomePage } from './pages/HomePage';

const envVariables = z.object({
  VITE_ENTUR_API: z.string(),
  VITE_APP_NAME: z.string(),
  VITE_STOP_PLACE: z.string(),
  VITE_BACKEND_URL: z.string()
});

envVariables.parse(import.meta.env);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<HomePage />} />
      <Route path="transport" element={<Transport />} />
      <Route path="lights" element={<Lights />} />
      <Route path="heating" element={<Heating />} />
    </Route>
  )
);

if (import.meta.hot) {
  import.meta.hot.dispose(() => router.dispose());
}

function App() {
  return <RouterProvider router={router} />;
}

export { App };
