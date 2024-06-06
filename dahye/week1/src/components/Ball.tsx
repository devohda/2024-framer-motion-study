import { motion, useScroll, useTransform } from 'framer-motion';

const Ball = () => {
  const { scrollY } = useScroll();
  const size = useTransform(scrollY, [0, 700], [200, 20]);

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
