import { motion, useInView, useAnimation } from 'framer-motion';
import { useEffect, useRef } from 'react';

export const Reveal = ({ children, width = '100%' }) => {
  const myStyles = {
    position: 'relative',
    width,
    overflow: 'hidden',
  };

  const revealRef = useRef(null);
  const isInView = useInView(revealRef, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start('visible');
    }
  }, [isInView, mainControls]);

  return (
    <div ref={revealRef} style={myStyles}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        {children}
      </motion.div>
    </div>
  );
};
