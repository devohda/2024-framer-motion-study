import { motion } from 'framer-motion';

const InitialTransition = () => {
  const blackBox = {
    initial: { height: '100vh' },
    animate: {
      height: 0,
      transition: {
        duration: 1.5,
        ease: [0.87, 0, 0.13, 1],
      },
    },
  };

  return (
    <div className="initial-transition">
      <motion.div
        initial="initial"
        animate="animate"
        exit="exit"
        variants={blackBox}
      />
    </div>
  );
};

export default InitialTransition;
