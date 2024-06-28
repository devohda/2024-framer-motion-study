import { useState, useCallback } from 'react';
import Ball from './Ball';
import styles from './Title.module.css';
import { motion, useMotionValueEvent, useScroll } from 'framer-motion';
import type { Variants } from 'framer-motion';

const TEXT = 'ZERO';

const Title = () => {
  const { scrollY } = useScroll();
  const [showZeroText, setShowZeroText] = useState(true);

  useMotionValueEvent(scrollY, 'change', (latest) => {
    if (latest > 5) {
      setShowZeroText(false);
    } else {
      setShowZeroText(true);
    }
  });

  const itemVariants = useCallback(
    (index: number): Variants => ({
      up: {
        opacity: 1,
        y: 0,
        transition: {
          type: 'tween',
          stiffness: 500,
          damping: 24,
          delay: index * 0.05,
        },
      },
      down: {
        opacity: 0,
        y: 330,
        transition: {
          type: 'tween',
          ease: [0.7, 0, 1, 0.65],
          delay: (TEXT.length - index) * 0.1,
        },
      },
    }),
    []
  );

  return (
    <motion.div
      className={styles['title-container']}
      animate={showZeroText ? 'up' : 'down'}
      variants={{
        up: {
          transition: {},
        },
        down: {
          transition: {
            staggerDirection: -1,
          },
        },
      }}
    >
      <div className={styles['content-container']}>
        <div className={styles['ball-container']}>
          <Ball />
        </div>

        <motion.div className={styles['zero-container']}>
          {TEXT.split('').map((char, index) => (
            <motion.span key={index} variants={itemVariants(index)}>
              {char}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Title;
