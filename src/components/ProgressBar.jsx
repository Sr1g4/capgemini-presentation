import { motion } from "framer-motion";
import { memo } from "react";

const ProgressBar = memo(({ current, total }) => {
  const percent = (current / total) * 100;
  
  return (
    <div 
      className="fixed top-0 left-0 w-full h-1 bg-white/20 z-50"
      role="progressbar"
      aria-valuenow={current}
      aria-valuemin={1}
      aria-valuemax={total}
      aria-label={`Slide ${current} of ${total}`}
    >
      <motion.div
        className="h-full bg-gradient-to-r from-blue-900 via-blue-400 to-yellow-400 relative overflow-hidden"
        initial={{ width: 0 }}
        animate={{ width: `${percent}%` }}
        transition={{ 
          duration: 0.5, 
          ease: "easeInOut",
          type: "spring",
          stiffness: 100
        }}
      >
        {/* Animated shimmer effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
          animate={{
            x: ['-100%', '100%']
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </motion.div>
      
      {/* Progress text for screen readers */}
      <span className="sr-only">
        Progress: {current} of {total} slides ({Math.round(percent)}%)
      </span>
    </div>
  );
});

ProgressBar.displayName = 'ProgressBar';

export default ProgressBar;