import { motion } from "framer-motion";
import { memo, useCallback } from "react";

const Navigation = memo(({ current, total, onPrev, onNext }) => {
  const handlePrev = useCallback((e) => {
    e.preventDefault();
    onPrev();
  }, [onPrev]);

  const handleNext = useCallback((e) => {
    e.preventDefault();
    onNext();
  }, [onNext]);

  const handleKeyDown = useCallback((e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      if (e.target.getAttribute('data-action') === 'prev') {
        handlePrev(e);
      } else if (e.target.getAttribute('data-action') === 'next') {
        handleNext(e);
      }
    }
  }, [handlePrev, handleNext]);

  return (
    <nav 
      className="fixed bottom-8 left-1/2 -translate-x-1/2 flex gap-6 z-50"
      role="navigation"
      aria-label="Presentation navigation"
    >
      <motion.button
        className="
          bg-white/90 px-6 py-3 rounded-full font-bold text-blue-900 shadow-lg 
          hover:bg-blue-900 hover:text-white transition-all duration-300 
          disabled:opacity-50 disabled:cursor-not-allowed
          focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
        "
        onClick={handlePrev}
        onKeyDown={handleKeyDown}
        disabled={current === 1}
        data-action="prev"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Go to previous slide"
        title="Previous slide (←)"
      >
        <span className="flex items-center gap-2">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Previous
        </span>
      </motion.button>

      <motion.button
        className="
          bg-white/90 px-6 py-3 rounded-full font-bold text-blue-900 shadow-lg 
          hover:bg-blue-900 hover:text-white transition-all duration-300 
          disabled:opacity-50 disabled:cursor-not-allowed
          focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
        "
        onClick={handleNext}
        onKeyDown={handleKeyDown}
        disabled={current === total}
        data-action="next"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Go to next slide"
        title="Next slide (→)"
      >
        <span className="flex items-center gap-2">
          Next
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </span>
      </motion.button>

      {/* Slide indicator dots */}
      <div className="flex items-center gap-2">
        {Array.from({ length: total }, (_, i) => (
          <motion.button
            key={i}
            className={`
              w-3 h-3 rounded-full transition-all duration-300
              ${current === i + 1 
                ? 'bg-blue-900 scale-125' 
                : 'bg-white/50 hover:bg-white/80'
              }
            `}
            onClick={() => {
              // This would need to be implemented in the parent component
              // For now, it's just a visual indicator
            }}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            aria-label={`Go to slide ${i + 1}`}
            title={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </nav>
  );
});

Navigation.displayName = 'Navigation';

export default Navigation;