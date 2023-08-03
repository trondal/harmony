import Heating from '../pages/Heating';
import HomePage from '../pages/HomePage';
import Lights from '../pages/Lights';
import Transport from '../pages/Transport';

interface IRoute {
  label: string;
  key: string | number;
  path: string;
  element: React.ReactNode;
}

export const AppRoutes: IRoute[] = [
  { label: 'Home', key: 'home', path: '/', element: <HomePage /> },
  {
    label: 'Transport',
    key: 'transport',
    path: 'transport',
    element: <Transport />
  },
  {
    label: 'Ligths',
    key: '/lights',
    path: 'lights',
    element: <Lights />
  },
  {
    label: 'Heating',
    key: 'heating',
    path: 'heating',
    element: <Heating />
  }
];
