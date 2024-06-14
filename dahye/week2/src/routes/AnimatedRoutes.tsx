import { Route, Routes, useLocation } from 'react-router-dom';

import { AnimatePresence } from 'framer-motion';
import FadeLayout from '../Layouts/FadeLayout';
import FlipLayout from '../Layouts/FlipLayout';
import Main from '../pages/Main';
import Page1 from '../pages/Page1';
import Page2 from '../pages/Page2';
import Page3 from '../pages/Page3';
import Page4 from '../pages/Page4';

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <Routes location={location} key={location.pathname}>
        <Route element={<FadeLayout />}>
          <Route index element={<Main />} />
          <Route path="page1" element={<Page1 />} />
          <Route path="page2" element={<Page2 />} />
        </Route>
        <Route element={<FlipLayout />}>
          <Route path="page3" element={<Page3 />} />
          <Route path="page4" element={<Page4 />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
