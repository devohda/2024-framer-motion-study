import { Outlet } from 'react-router-dom';
import Navigator from '../components/Navigator';
import { motion } from 'framer-motion';

const AnimatedLayout = () => {
  return (
    <motion.div initial={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <Navigator />

      <Outlet />
    </motion.div>
  );
};

export default AnimatedLayout;
