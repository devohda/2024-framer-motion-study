import { motion, useAnimation } from "framer-motion";
import { PropsWithChildren, useEffect } from "react";

const SlideText = ({ position, children }: PropsWithChildren<{ position: number }>) => {
  const animate = useAnimation();

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        animate.start({
          x: -position * 20,
          opacity: 0,
        });
      }else {
        animate.start({
          x: 0,
          opacity: 1,
        });
      }
    })
  }, [animate, position]);

  return (
    <motion.div
      className='slideText'
      animate={animate}
      initial={{ x: 0, opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.3 }}
    >
      <span style={{ whiteSpace: 'break-spaces'}}>{children}</span>
    </motion.div>
  );
}

export default SlideText;