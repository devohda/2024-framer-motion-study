import { Route, Routes, useLocation } from 'react-router-dom';

import { AnimatePresence } from 'framer-motion';

import Home from '../pages/Home';

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <Routes location={location} key={location.pathname}>
        <Route>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
