import { Outlet } from 'react-router-dom';
import ColorFadeNavigator from '../components/ColorFadeNavigator';
import { Variants, motion } from 'framer-motion';
import styles from './ColorFadeLayout.module.css';
import { useState } from 'react';

const Color: Record<string, string> = {
  '/color/page1': 'yellow',
  '/color/page2': 'pink',
  '/color/page3': 'white',
};

const ColorFadeLayout = () => {
  const [selectedPage, setSelectedPage] = useState('/color/page1');

  const anim = (variants: Variants) => {
    return {
      initial: 'initial',
      animate: 'animate',
      exit: 'exit',
      variants,
    };
  };

  const pageAnim: Variants = {
    initial: { opacity: 1 },
    animate: { opacity: 1 },
    exit: { opacity: 1 },
  };

  const coverAnim: Variants = {
    initial: {
      opacity: 0,
      scale: 0,
    },
    animate: {
      opacity: 1,
      scale: 0,
    },
    exit: {
      backgroundColor: Color[selectedPage],
      scale: '200%',
      transition: {
        duration: 1,
        ease: 'easeInOut',
      },
      opacity: 1,
    },
  };

  return (
    <>
      <motion.div {...anim(pageAnim)}>
        <ColorFadeNavigator onClickLink={setSelectedPage} />

        <Outlet />
      </motion.div>

      <motion.div className={styles.cover} {...anim(coverAnim)} />
    </>
  );
};

export default ColorFadeLayout;
