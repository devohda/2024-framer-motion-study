import { motion } from 'framer-motion';

const BlockTransition = () => {
  return (
    <div className="block-transition">
      {Array.from({ length: 88 }).map((_, i) => (
        <motion.div
          key={i}
          initial={{ scaleY: 1, originY: 0 }}
          animate={{ scaleY: 0, originY: 0 }}
          transition={{
            duration: 0.5,
            delay: (Math.random() * i) * 0.01,
            ease: [0.87, 0, 0.13, 1],
          }}
        />
      ))}
    </div>
  );
};

export default BlockTransition;
