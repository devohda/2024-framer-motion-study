import { NavLink, Outlet, useLocation } from 'react-router-dom';
import './App.css';
// import Scene from './components/Scene';
import { AnimatePresence, motion } from 'framer-motion';
import BlockTransition from './components/BlockTransition';

const App = () => {
  const location = useLocation();

  return (
    <>
      <ul
        className="menu"
        style={{ display: 'flex', gap: 16, listStyle: 'none' }}
      >
        <li>
          <NavLink
            style={({ isActive }) => ({
              textDecoration: isActive ? 'underline' : 'none',
            })}
            to="/about"
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            style={({ isActive }) => ({
              textDecoration: isActive ? 'underline' : 'none',
            })}
            to="/team"
          >
            Team
          </NavLink>
        </li>
      </ul>
      <div style={{ height: '100vh'}}>
        {/* <Scene /> */}
        <AnimatePresence mode="wait">
          <motion.div key={location.pathname} exit={{ opacity: 0 }}>
            <Outlet />
            {/* <InitialTransition /> */}
          </motion.div>
          <BlockTransition />
        </AnimatePresence>
      </div>
    </>
  );
};

export default App;
