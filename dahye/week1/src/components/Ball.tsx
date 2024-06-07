import { motion, useScroll, useTransform } from 'framer-motion';

const Ball = () => {
  const { scrollY } = useScroll();
  const size = useTransform(scrollY, [60, 500], [338, 40]);

  return (
    <motion.div
      style={{
        borderRadius: '50%',
        width: size,
        height: size,
        backgroundColor: '#fff',
      }}
    />
  );
};

export default Ball;
