import { Outlet } from 'react-router-dom';
import Navigator from '../components/Navigator';
import { motion } from 'framer-motion';

const FadeLayout = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Navigator />

      <Outlet />
    </motion.div>
  );
};

export default FadeLayout;
