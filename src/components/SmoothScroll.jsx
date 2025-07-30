import { motion, useScroll, useSpring } from "framer-motion";
import { memo, useEffect, useState } from "react";

const SmoothScroll = memo(({ children, className = "" }) => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const [isScrolling, setIsScrolling] = useState(false);
  const [scrollDirection, setScrollDirection] = useState("down");
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    let timeoutId;
    
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const direction = currentScrollY > lastScrollY ? "down" : "up";
      
      setScrollDirection(direction);
      setLastScrollY(currentScrollY);
      setIsScrolling(true);
      
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setIsScrolling(false);
      }, 150);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timeoutId);
    };
  }, [lastScrollY]);

  return (
    <div className={`relative ${className}`}>
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-600 origin-left z-50"
        style={{ scaleX }}
      />
      
      {/* Scroll Indicator */}
      <motion.div
        className="fixed right-6 bottom-6 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg border border-gray-200 flex items-center justify-center z-40"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ 
          opacity: isScrolling ? 1 : 0,
          scale: isScrolling ? 1 : 0.8
        }}
        transition={{ duration: 0.2 }}
      >
        <motion.div
          className="w-4 h-4 text-gray-600"
          animate={{ 
            rotate: scrollDirection === "down" ? 180 : 0,
            y: scrollDirection === "down" ? 2 : -2
          }}
          transition={{ duration: 0.3 }}
        >
          <svg fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </motion.div>
      </motion.div>

      {/* Smooth Scroll Container */}
      <motion.div
        className="min-h-screen"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {children}
      </motion.div>
    </div>
  );
});

SmoothScroll.displayName = 'SmoothScroll';
export default SmoothScroll;