import { motion } from "framer-motion";
import { useCallback } from "react";

export default function MetricCard({ 
  value, 
  label, 
  icon, 
  onClick,
  variant = "success",
  size = "default"
}) {
  const handleClick = useCallback((e) => {
    if (!onClick) return;
    e.preventDefault();
    onClick(e);
  }, [onClick]);

  const handleKeyDown = useCallback((e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleClick(e);
    }
  }, [handleClick]);

  const getVariantStyles = () => {
    switch (variant) {
      case "success":
        return "from-success-400 to-success-700";
      case "warning":
        return "from-warning-400 to-warning-700";
      case "danger":
        return "from-danger-400 to-danger-700";
      case "primary":
        return "from-primary-400 to-primary-700";
      case "info":
        return "from-blue-400 to-blue-700";
      default:
        return "from-success-400 to-success-700";
    }
  };

  const getSizeStyles = () => {
    switch (size) {
      case "small":
        return "p-4 text-center";
      case "large":
        return "p-12 text-center";
      default:
        return "p-8 text-center";
    }
  };

  const getTextSize = () => {
    switch (size) {
      case "small":
        return "text-2xl font-bold mb-1";
      case "large":
        return "text-6xl font-bold mb-3";
      default:
        return "text-4xl font-bold mb-2";
    }
  };

  return (
    <motion.div 
      className={`
        bg-gradient-to-br text-white rounded-2xl shadow-lg hover:scale-105 transition-all duration-300
        ${getVariantStyles()}
        ${getSizeStyles()}
        ${onClick ? 'cursor-pointer' : ''}
      `}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      tabIndex={onClick ? 0 : -1}
      role={onClick ? "button" : "article"}
      aria-label={onClick ? `${label}: ${value}` : undefined}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ 
        duration: 0.3,
        type: "spring",
        stiffness: 200
      }}
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full -translate-y-12 translate-x-12"></div>
      
      {/* Content */}
      <div className="relative z-10">
        {icon && (
          <motion.div 
            className="text-4xl mb-2"
            animate={{ 
              rotate: [0, 5, -5, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              repeatDelay: 3
            }}
          >
            {icon}
          </motion.div>
        )}
        
        <motion.div 
          className={getTextSize()}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          {value}
        </motion.div>
        
        <motion.div 
          className="text-lg opacity-90 font-medium"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          {label}
        </motion.div>
      </div>

      {/* Hover effect overlay */}
      <div className="absolute inset-0 bg-white/10 opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl"></div>
    </motion.div>
  );
}