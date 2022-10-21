import { motion } from 'framer-motion';
import * as React from 'react';

interface HorizontalCollapseProps {
  isOpen?: boolean;
  children: React.ReactNode;
}

export default function HorizontalCollapse({ isOpen = false, children }: HorizontalCollapseProps) {
  const [hidden, setHidden] = React.useState(!isOpen);

  return (
    <motion.div
      hidden={hidden}
      initial={false}
      onAnimationStart={() => setHidden(false)}
      onAnimationComplete={() => setHidden(!isOpen)}
      animate={{ width: isOpen ? 300 : 0 }}
    >
      <motion.div
        animate={{ x: isOpen ? 0 : -300 }}
        style={{
          position: 'absolute',
          left: 0,
          height: '100vh',
          top: 0,
          width: 300,
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}
