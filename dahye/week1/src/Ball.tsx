import { motion, useScroll, useTransform } from 'framer-motion';

const Ball = () => {
  const { scrollY } = useScroll();
  const size = useTransform(scrollY, [0, 700], [200, 20]);

  return (
    <motion.div
      className="sticky top-0 rounded-full"
      style={{
        width: size,
        height: size,
        backgroundColor: '#fff',
      }}
      // animate={{ opacity: 1, scale: 1 }}
      // exit={{ opacity: 0.5, scale: 0.5 }}
      // transition={{
      // 	duration: 0.8,
      // 	delay: 0.5,
      // 	ease: [0, 0.71, 0.2, 1.01],
      // }}
    />
  );
};

export default Ball;
