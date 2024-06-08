import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import Main from './pages/Main';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';
import AnimatedLayout from './Layouts/AnimatedLayout';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<AnimatedLayout />}>
      <Route index element={<Main />} />
      <Route path="page1" element={<Page1 />} />
      <Route path="page2" element={<Page2 />} />
    </Route>
  )
);

export default router;
