import { Route, Routes, useLocation } from 'react-router-dom';

import { AnimatePresence } from 'framer-motion';
import AnimatedLayout from '../Layouts/AnimatedLayout';
import Main from '../pages/Main';
import Page1 from '../pages/Page1';
import Page2 from '../pages/Page2';

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route element={<AnimatedLayout />}>
          <Route index element={<Main />} />
          <Route path="page1" element={<Page1 />} />
          <Route path="page2" element={<Page2 />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
