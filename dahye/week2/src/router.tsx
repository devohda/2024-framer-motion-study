import { createBrowserRouter } from 'react-router-dom';
import Main from './pages/Main';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
  },
  {
    path: '/page1',
    element: <Page1 />,
  },
  {
    path: '/page2',
    element: <Page2 />,
  },
]);

export default router;
