import { motion } from "framer-motion";
import { memo } from "react";

const Slide = memo(({ active, children, slideNumber }) => {
  return (
    <motion.section
      className={`
        w-screen h-screen flex flex-col bg-white absolute top-0 left-0 overflow-y-auto
        slide-transition
        ${active ? "z-10 opacity-100" : "z-0 opacity-0 pointer-events-none"}
      `}
      initial={{ x: 300, opacity: 0 }}
      animate={active ? { x: 0, opacity: 1 } : { x: -300, opacity: 0 }}
      transition={{ 
        type: "spring", 
        stiffness: 60,
        damping: 20
      }}
      aria-hidden={!active}
      role="region"
      tabIndex={active ? 0 : -1}
      aria-label={active ? `Slide ${slideNumber}` : undefined}
    >
      <motion.div
        className="w-full min-h-full flex flex-col justify-start p-4"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={active ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
        transition={{ 
          delay: active ? 0.2 : 0,
          duration: 0.5 
        }}
      >
        {children}
      </motion.div>
    </motion.section>
  );
});

Slide.displayName = 'Slide';

export default Slide;