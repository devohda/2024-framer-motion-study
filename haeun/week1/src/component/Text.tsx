import { motion, useAnimation } from "framer-motion";
import { PropsWithChildren, useEffect } from "react";

const Text = ({ children, delay }: PropsWithChildren<{delay: number}>) => {
  const animate = useAnimation();

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        animate.start({
          y: 200,
          transition: { ease: "easeInOut", duration: 0.3, delay }
        });
      }else {
        animate.start({
          y: 0,
          transition: { ease: "easeInOut", duration: 0.3, delay }
        });
      }
    })
  }, [animate, delay]);

  return (
    <motion.div
      className='text'
      initial={{ y: 0 }}
      animate={animate}
    >
      {children}
    </motion.div>
  );
}

export default Text;