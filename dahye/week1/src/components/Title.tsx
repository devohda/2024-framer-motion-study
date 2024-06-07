import { useState } from 'react';
import Ball from './Ball';
import styles from './Title.module.css';
import { motion, useMotionValueEvent, useScroll } from 'framer-motion';
import type { Variants } from 'framer-motion';

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

  const itemVariants: Variants = {
    up: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'tween',
        stiffness: 500,
        damping: 24,
      },
    },
    down: {
      opacity: 0,
      y: 330,
      transition: {
        type: 'tween',
        stiffness: 500,
        damping: 24,
      },
    },
  };

  return (
    <motion.div
      className={styles['title-container']}
      initial="closed"
      animate={showZeroText ? 'up' : 'down'}
      variants={{
        up: {
          transition: {
            staggerChildren: 0.1,
          },
        },
        down: {
          transition: {
            staggerChildren: 0.1,
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
          <motion.span variants={itemVariants}>Z</motion.span>
          <motion.span variants={itemVariants}>E</motion.span>
          <motion.span variants={itemVariants}>R</motion.span>
          <motion.span variants={itemVariants}>O</motion.span>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Title;
