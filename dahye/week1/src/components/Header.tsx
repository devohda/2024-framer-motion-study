import styles from './Header.module.css';
import { RxHamburgerMenu } from 'react-icons/rx';
import { motion, useMotionValueEvent, useScroll } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { useCallback, useState } from 'react';

const TEXT = 'ZERO STUDIOS is an integrated creative agency.';

const Header = () => {
  const { scrollY } = useScroll();
  const [showInfoText, setShowInfoText] = useState(true);

  useMotionValueEvent(scrollY, 'change', (latest) => {
    if (latest > 5) {
      setShowInfoText(false);
    } else {
      setShowInfoText(true);
    }
  });

  const itemVariants = useCallback(
    (index: number): Variants => ({
      show: {
        opacity: 1,
        x: 0,
        transition: {
          type: 'tween',
        },
      },
      hide: {
        opacity: 0,
        x: -index * 1,
        transition: {
          type: 'tween',
        },
      },
    }),
    []
  );

  return (
    <motion.div
      className={styles.header}
      animate={showInfoText ? 'show' : 'hide'}
      variants={{
        show: {
          transition: {
            staggerChildren: 0.008,
          },
        },
        hide: {
          transition: {
            staggerChildren: 0.008,
            staggerDirection: -1,
          },
        },
      }}
    >
      <motion.div className={styles['container']}>
        <motion.div className={styles['info-text-container']}>
          {TEXT.split('').map((char, index) => (
            <motion.span
              layout
              key={index}
              variants={itemVariants(index)}
              style={{
                padding: char === ' ' ? '0 4px' : 0,
              }}
            >
              {char}
            </motion.span>
          ))}
        </motion.div>

        <div className={styles['menu']}>
          <div className={styles['menu-top']}>
            <div className={styles['menu_contact']}>contact</div>
            <RxHamburgerMenu />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Header;
