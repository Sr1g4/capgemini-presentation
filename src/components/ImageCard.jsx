import { motion, AnimatePresence } from "framer-motion";
import { useState, useCallback } from "react";

export default function ImageCard({ 
  src, 
  alt, 
  caption, 
  className = "", 
  variant = "default",
  size = "default",
  interactive = true,
  onClick,
  showFullImage = true
}) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = useCallback(() => {
    if (interactive) {
      setIsExpanded(!isExpanded);
      onClick?.();
    }
  }, [interactive, isExpanded, onClick]);

  const handleKeyDown = useCallback((e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleClick();
    }
  }, [handleClick]);

  const getVariantStyles = () => {
    switch (variant) {
      case "primary":
        return "border-blue-500 bg-blue-50 hover:bg-blue-100";
      case "success":
        return "border-green-500 bg-green-50 hover:bg-green-100";
      case "warning":
        return "border-yellow-500 bg-yellow-50 hover:bg-yellow-100";
      case "danger":
        return "border-red-500 bg-red-50 hover:bg-red-100";
      default:
        return "border-gray-300 bg-white hover:bg-gray-50";
    }
  };

  const getSizeStyles = () => {
    switch (size) {
      case "small":
        return "p-3";
      case "large":
        return "p-6";
      default:
        return "p-4";
    }
  };

  return (
    <>
      {/* Main Image Card */}
      <motion.div
        className={`relative rounded-lg border-2 shadow-md transition-all duration-300 cursor-pointer ${getVariantStyles()} ${getSizeStyles()} ${className}`}
        whileHover={{ scale: interactive ? 1.02 : 1 }}
        whileTap={{ scale: interactive ? 0.98 : 1 }}
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        tabIndex={interactive ? 0 : -1}
        role={interactive ? "button" : "img"}
        aria-label={interactive ? `View ${alt}` : alt}
      >
        {/* Image Container */}
        <div className="relative overflow-hidden rounded-md">
          <img
            src={src}
            alt={alt}
            className={`w-full h-auto object-contain transition-transform duration-300 ${
              isHovered && interactive ? "scale-105" : "scale-100"
            }`}
            style={{ 
              maxHeight: showFullImage ? "none" : "300px",
              minHeight: showFullImage ? "400px" : "auto"
            }}
          />
          
          {/* Interactive Overlay */}
          {interactive && (
            <motion.div
              className="absolute inset-0 bg-black/0 hover:bg-black/10 transition-colors duration-300 flex items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: isHovered ? 1 : 0 }}
            >
              <div className="bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg">
                <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                </svg>
              </div>
            </motion.div>
          )}
        </div>

        {/* Caption */}
        {caption && (
          <motion.div
            className="mt-3 text-center"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <p className="text-sm font-medium text-gray-700">{caption}</p>
          </motion.div>
        )}

        {/* Interactive Indicator */}
        {interactive && (
          <motion.div
            className="absolute top-2 right-2 bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3 }}
          >
            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M3 4a1 1 0 011-1h4a1 1 0 010 2H6.414l2.293 2.293a1 1 0 11-1.414 1.414L5 6.414V8a1 1 0 01-2 0V4zm9 1a1 1 0 010-2h4a1 1 0 011 1v4a1 1 0 01-2 0V6.414l-2.293 2.293a1 1 0 11-1.414-1.414L13.586 5H12z" clipRule="evenodd" />
            </svg>
          </motion.div>
        )}
      </motion.div>

      {/* Full Screen Modal */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsExpanded(false)}
          >
            <motion.div
              className="relative max-w-7xl max-h-full overflow-auto bg-white rounded-lg shadow-2xl"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setIsExpanded(false)}
                className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-lg hover:bg-white transition-colors z-10"
                aria-label="Close image"
              >
                <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Full Image */}
              <div className="p-6">
                <img
                  src={src}
                  alt={alt}
                  className="w-full h-auto object-contain max-h-[80vh]"
                />
                {caption && (
                  <div className="mt-4 text-center">
                    <p className="text-lg font-medium text-gray-700">{caption}</p>
                  </div>
                )}
              </div>

              {/* Navigation Controls */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                <button
                  onClick={() => setIsExpanded(false)}
                  className="bg-white/90 backdrop-blur-sm rounded-lg px-4 py-2 text-sm font-medium text-gray-700 hover:bg-white transition-colors"
                >
                  Close
                </button>
                <button
                  onClick={() => window.open(src, '_blank')}
                  className="bg-blue-500 text-white rounded-lg px-4 py-2 text-sm font-medium hover:bg-blue-600 transition-colors"
                >
                  Open in New Tab
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}