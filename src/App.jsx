import { useState, useEffect, useCallback, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import slides from "./data/slides";
import Slide from "./components/Slide";
import EnhancedNavigation from "./components/EnhancedNavigation";
import SmoothScroll from "./components/SmoothScroll";
import ProgressBar from "./components/ProgressBar";
import landingBackground from "./assets/images/landing-background.png";

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showWelcome, setShowWelcome] = useState(true);

  // Loading state management
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  // Error boundary for slides
  useEffect(() => {
    try {
      if (!Array.isArray(slides) || slides.length === 0) {
        throw new Error("Invalid slides data");
      }
    } catch (err) {
      setError(err.message);
    }
  }, []);

  const goNext = useCallback(() => {
    setCurrentSlide(prev => Math.min(prev + 1, slides.length - 1));
  }, []);

  const goPrev = useCallback(() => {
    setCurrentSlide(prev => Math.max(prev - 1, 0));
  }, []);

  const goToSlide = useCallback((slideIndex) => {
    setCurrentSlide(Math.max(0, Math.min(slideIndex, slides.length - 1)));
  }, []);

  // Enhanced keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.target.tagName === "INPUT" || e.target.tagName === "TEXTAREA") return;
      
      switch (e.key) {
        case "ArrowRight":
        case " ":
          e.preventDefault();
          goNext();
          break;
        case "ArrowLeft":
          e.preventDefault();
          goPrev();
          break;
        case "Home":
          e.preventDefault();
          setCurrentSlide(0);
          break;
        case "End":
          e.preventDefault();
          setCurrentSlide(slides.length - 1);
          break;
        case "Escape":
          e.preventDefault();
          setCurrentSlide(0);
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [goNext, goPrev]);

  // Enhanced touch/swipe navigation
  useEffect(() => {
    let startX = 0;
    let startY = 0;
    let isSwiping = false;

    const handleTouchStart = (e) => {
      startX = e.touches[0].clientX;
      startY = e.touches[0].clientY;
      isSwiping = false;
    };

    const handleTouchMove = (e) => {
      if (!startX || !startY) return;

      const currentX = e.touches[0].clientX;
      const currentY = e.touches[0].clientY;
      const diffX = startX - currentX;
      const diffY = startY - currentY;

      if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 50) {
        isSwiping = true;
        e.preventDefault();
      }
    };

    const handleTouchEnd = (e) => {
      if (!isSwiping) return;

      const currentX = e.changedTouches[0].clientX;
      const diffX = startX - currentX;

      if (Math.abs(diffX) > 50) {
        if (diffX > 0) {
          goNext();
        } else {
          goPrev();
        }
      }

      startX = 0;
      startY = 0;
      isSwiping = false;
    };

    document.addEventListener("touchstart", handleTouchStart, { passive: true });
    document.addEventListener("touchmove", handleTouchMove, { passive: false });
    document.addEventListener("touchend", handleTouchEnd, { passive: true });

    return () => {
      document.removeEventListener("touchstart", handleTouchStart);
      document.removeEventListener("touchmove", handleTouchMove);
      document.removeEventListener("touchend", handleTouchEnd);
    };
  }, [goNext, goPrev]);

  // Memoized slide rendering
  const currentSlideContent = useMemo(() => {
    if (!slides[currentSlide]) {
      return null;
    }
    return slides[currentSlide].content;
  }, [currentSlide]);

  if (error) {
    return (
      <div className="w-screen h-screen flex items-center justify-center bg-gradient-to-br from-red-50 to-red-100">
        <div className="text-center p-8">
          <h1 className="text-2xl font-bold text-red-800 mb-4">Presentation Error</h1>
          <p className="text-red-600 mb-4">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors"
          >
            Reload Presentation
          </button>
        </div>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="w-screen h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-blue-800 to-orange-600">
        <div className="text-center text-white">
          {/* Capgemini Logo */}
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full mb-6">
              <svg className="w-10 h-10 text-white" viewBox="0 0 32 32" fill="currentColor">
                <path d="M16 2 L20 8 L18 12 L22 16 L20 20 L16 24 L12 20 L10 16 L14 12 L12 8 Z"/>
                <rect x="15" y="24" width="2" height="8"/>
              </svg>
            </div>
          </div>
          
          {/* Loading Spinner */}
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-orange-400 mx-auto mb-4"></div>
          <h2 className="text-white text-xl font-semibold mb-2">Loading Capgemini Presentation...</h2>
          <p className="text-orange-200 text-sm">Enterprise Contact Center AI Solution</p>
        </div>
      </div>
    );
  }

  return (
    <SmoothScroll>
      <div className="relative min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
        {/* Welcome Screen */}
        <AnimatePresence>
          {showWelcome && (
            <motion.div
              className="fixed inset-0 flex items-center justify-center z-50 overflow-hidden"
              style={{
                backgroundImage: `linear-gradient(rgba(30, 58, 138, 0.8), rgba(245, 158, 11, 0.6)), url(${landingBackground})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
              }}
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              
              {/* Floating Capgemini Elements */}
              <div className="absolute inset-0 overflow-hidden">
                <motion.div
                  className="absolute top-20 left-20 w-16 h-16 bg-white/10 rounded-full"
                  animate={{ 
                    y: [0, -20, 0],
                    opacity: [0.3, 0.6, 0.3]
                  }}
                  transition={{ 
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <motion.div
                  className="absolute top-40 right-32 w-12 h-12 bg-orange-400/20 rounded-full"
                  animate={{ 
                    y: [0, 15, 0],
                    opacity: [0.2, 0.5, 0.2]
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                  }}
                />
                <motion.div
                  className="absolute bottom-32 left-1/4 w-20 h-20 bg-blue-400/15 rounded-full"
                  animate={{ 
                    y: [0, -25, 0],
                    opacity: [0.2, 0.4, 0.2]
                  }}
                  transition={{ 
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2
                  }}
                />
              </div>

              <motion.div
                className="text-center text-white p-8 relative z-10"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                {/* Capgemini Logo */}
                <motion.div
                  className="mb-8"
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <div className="inline-flex items-center justify-center w-24 h-24 bg-white/10 backdrop-blur-sm rounded-full mb-6">
                    <svg className="w-12 h-12 text-white" viewBox="0 0 32 32" fill="currentColor">
                      <path d="M16 2 L20 8 L18 12 L22 16 L20 20 L16 24 L12 20 L10 16 L14 12 L12 8 Z"/>
                      <rect x="15" y="24" width="2" height="8"/>
                    </svg>
                  </div>
                </motion.div>

                <motion.h1 
                  className="text-5xl font-bold mb-4 bg-gradient-to-r from-white to-orange-200 bg-clip-text text-transparent"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  Enterprise Contact Center AI
                </motion.h1>
                
                <motion.p 
                  className="text-2xl mb-2 opacity-90"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  Transforming Billion-Dollar Enterprises
                </motion.p>
                
                <motion.p 
                  className="text-lg mb-8 opacity-75"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  Capgemini's Intelligent Contact Center Platform
                </motion.p>

                <motion.button
                  type="button"
                  onClick={() => setShowWelcome(false)}
                  className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-12 py-4 rounded-xl text-xl font-semibold hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  Start Presentation
                </motion.button>

                <motion.div
                  className="mt-8 flex items-center justify-center space-x-6 text-sm opacity-75"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.7 }}
                >
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse"></div>
                    <span>Press Space or → to navigate</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse"></div>
                    <span>Enterprise Security • Multi-Cloud • Compliance Ready</span>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Main Presentation Content - Only show when welcome is dismissed */}
        {!showWelcome && (
          <>
            {/* Progress Bar */}
            <ProgressBar current={currentSlide + 1} total={slides.length} />

            {/* Slides */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="min-h-screen"
              >
                <Slide slideNumber={currentSlide + 1} active={true}>
                  {currentSlideContent}
                </Slide>
              </motion.div>
            </AnimatePresence>

            {/* Enhanced Navigation */}
            <EnhancedNavigation
              currentSlide={currentSlide}
              totalSlides={slides.length}
              onNext={goNext}
              onPrev={goPrev}
              onGoToSlide={goToSlide}
            />

            {/* Keyboard Shortcuts Hint */}
            <motion.div
              className="fixed top-4 right-4 text-xs text-gray-400 bg-white/60 backdrop-blur-sm px-3 py-1 rounded-full opacity-0 hover:opacity-100 transition-opacity duration-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ delay: 2 }}
            >
              Press ? for shortcuts
            </motion.div>
          </>
        )}
      </div>
    </SmoothScroll>
  );
}

export default App;