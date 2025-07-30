import { motion } from "framer-motion";
import { useCallback } from "react";

export default function FeatureCard({ 
  icon, 
  title, 
  description, 
  onClick, 
  className = "",
  variant = "default",
  disabled = false 
}) {
  const handleClick = useCallback((e) => {
    if (disabled || !onClick) return;
    e.preventDefault();
    onClick(e);
  }, [onClick, disabled]);

  const handleKeyDown = useCallback((e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleClick(e);
    }
  }, [handleClick]);

  const getVariantStyles = () => {
    switch (variant) {
      case "success":
        return "border-success-200 hover:border-success-400 bg-gradient-to-br from-success-50 to-success-100";
      case "warning":
        return "border-warning-200 hover:border-warning-400 bg-gradient-to-br from-warning-50 to-warning-100";
      case "danger":
        return "border-danger-200 hover:border-danger-400 bg-gradient-to-br from-danger-50 to-danger-100";
      case "primary":
        return "border-primary-200 hover:border-primary-400 bg-gradient-to-br from-primary-50 to-primary-100";
      default:
        return "border-slate-200 hover:border-blue-400 bg-gradient-to-br from-slate-50 to-slate-200";
    }
  };

  return (
    <motion.div
      className={`
        rounded-2xl p-8 border-2 shadow-lg transition-all duration-300 relative overflow-hidden 
        ${getVariantStyles()}
        ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer interactive-element'}
        ${className}
      `}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      whileHover={!disabled ? { scale: 1.02, y: -5 } : {}}
      whileTap={!disabled ? { scale: 0.98 } : {}}
      tabIndex={disabled ? -1 : 0}
      role={onClick ? "button" : "article"}
      aria-pressed={onClick ? "false" : undefined}
      aria-disabled={disabled}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-transparent to-white/10 rounded-full -translate-y-16 translate-x-16"></div>
      
      {/* Content */}
      <div className="relative z-10">
        {icon && (
          <div className="text-4xl mb-4 text-blue-900 animate-bounce-gentle">
            {icon}
          </div>
        )}
        
        <h3 className="text-xl font-semibold text-blue-900 mb-2 leading-tight">
          {title}
        </h3>
        
        <div className="text-gray-600 leading-relaxed">
          {typeof description === 'string' ? (
            <p>{description}</p>
          ) : (
            description
          )}
        </div>
      </div>

      {/* Hover effect overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-blue-500/5 opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
    </motion.div>
  );
}