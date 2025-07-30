import { motion, AnimatePresence } from "framer-motion";
import { memo, useCallback, useEffect, useState } from "react";

const EnhancedNavigation = memo(({ 
  currentSlide, 
  totalSlides, 
  onNext, 
  onPrev, 
  onGoToSlide,
  className = "" 
}) => {
  const [showShortcuts, setShowShortcuts] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Auto-hide navigation on scroll and inactivity
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsVisible(currentScrollY < lastScrollY || currentScrollY < 100);
      setLastScrollY(currentScrollY);
    };

    const handleMouseMove = () => {
      setIsVisible(true);
    };

    const handleInactivity = () => {
      if (!isHovered) {
        setIsVisible(false);
      }
    };

    let inactivityTimer;
    const resetInactivityTimer = () => {
      clearTimeout(inactivityTimer);
      inactivityTimer = setTimeout(handleInactivity, 3000);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousemove", resetInactivityTimer);
    
    resetInactivityTimer();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousemove", resetInactivityTimer);
      clearTimeout(inactivityTimer);
    };
  }, [lastScrollY, isHovered]);

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.target.tagName === "INPUT" || e.target.tagName === "TEXTAREA") return;
      
      switch (e.key) {
        case "ArrowRight":
        case " ":
          e.preventDefault();
          onNext();
          break;
        case "ArrowLeft":
          e.preventDefault();
          onPrev();
          break;
        case "Home":
          e.preventDefault();
          onGoToSlide(0);
          break;
        case "End":
          e.preventDefault();
          onGoToSlide(totalSlides - 1);
          break;
        case "?":
          e.preventDefault();
          setShowShortcuts(!showShortcuts);
          break;
        case "Escape":
          setShowShortcuts(false);
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onNext, onPrev, onGoToSlide, totalSlides, showShortcuts]);

  const handleSlideClick = useCallback((slideIndex) => {
    onGoToSlide(slideIndex);
  }, [onGoToSlide]);

  const handleNext = useCallback(() => {
    onNext();
  }, [onNext]);

  const handlePrev = useCallback(() => {
    onPrev();
  }, [onPrev]);

  return (
    <>
      {/* Main Navigation - More subtle and auto-hiding */}
      <AnimatePresence>
        {isVisible && (
          <motion.nav
            className={`fixed bottom-8 left-1/2 transform -translate-x-1/2 bg-white/80 backdrop-blur-md rounded-full shadow-xl border border-white/20 p-2 z-50 ${className}`}
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className="flex items-center space-x-2">
              {/* Previous Button */}
              <motion.button
                onClick={handlePrev}
                disabled={currentSlide === 0}
                className="p-2 rounded-full bg-white/60 hover:bg-white/80 disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-200 shadow-sm"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                title="Previous (←)"
              >
                <svg className="w-4 h-4 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </motion.button>

              {/* Slide Indicators - More compact */}
              <div className="flex space-x-1 px-2">
                {Array.from({ length: totalSlides }, (_, index) => (
                  <motion.button
                    key={index}
                    onClick={() => handleSlideClick(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-200 ${
                      index === currentSlide 
                        ? "bg-blue-500 scale-125" 
                        : "bg-gray-300 hover:bg-gray-400 hover:scale-110"
                    }`}
                    whileHover={{ scale: 1.3 }}
                    whileTap={{ scale: 0.8 }}
                    title={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>

              {/* Next Button */}
              <motion.button
                onClick={handleNext}
                disabled={currentSlide === totalSlides - 1}
                className="p-2 rounded-full bg-white/60 hover:bg-white/80 disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-200 shadow-sm"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                title="Next (→)"
              >
                <svg className="w-4 h-4 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </motion.button>

              {/* Help Button - Smaller and more subtle */}
              <motion.button
                onClick={() => setShowShortcuts(!showShortcuts)}
                className="p-2 rounded-full bg-blue-50 hover:bg-blue-100 text-blue-600 transition-all duration-200 shadow-sm"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                title="Keyboard shortcuts (?)"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </motion.button>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>

      {/* Keyboard Shortcuts Help */}
      <AnimatePresence>
        {showShortcuts && (
          <motion.div
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowShortcuts(false)}
          >
            <motion.div
              className="bg-white rounded-2xl p-6 max-w-md mx-4 shadow-2xl"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="text-lg font-semibold mb-4">Keyboard Shortcuts</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Next slide:</span>
                  <kbd className="px-2 py-1 bg-gray-100 rounded text-xs">→</kbd>
                </div>
                <div className="flex justify-between">
                  <span>Previous slide:</span>
                  <kbd className="px-2 py-1 bg-gray-100 rounded text-xs">←</kbd>
                </div>
                <div className="flex justify-between">
                  <span>First slide:</span>
                  <kbd className="px-2 py-1 bg-gray-100 rounded text-xs">Home</kbd>
                </div>
                <div className="flex justify-between">
                  <span>Last slide:</span>
                  <kbd className="px-2 py-1 bg-gray-100 rounded text-xs">End</kbd>
                </div>
                <div className="flex justify-between">
                  <span>Space:</span>
                  <kbd className="px-2 py-1 bg-gray-100 rounded text-xs">Next</kbd>
                </div>
                <div className="flex justify-between">
                  <span>Close help:</span>
                  <kbd className="px-2 py-1 bg-gray-100 rounded text-xs">Esc</kbd>
                </div>
              </div>
              <button
                onClick={() => setShowShortcuts(false)}
                className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Got it
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
});

EnhancedNavigation.displayName = 'EnhancedNavigation';
export default EnhancedNavigation;