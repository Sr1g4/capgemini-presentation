import { motion } from "framer-motion";
import { memo } from "react";

const IconGrid = memo(({ icons, columns = 4, className = "" }) => {
  const getGridClasses = () => {
    switch (columns) {
      case 2: return "grid-cols-2";
      case 3: return "grid-cols-3";
      case 4: return "grid-cols-4";
      case 5: return "grid-cols-5";
      case 6: return "grid-cols-6";
      default: return "grid-cols-4";
    }
  };

  return (
    <div className={`grid ${getGridClasses()} gap-6 ${className}`}>
      {icons.map((icon, index) => (
        <motion.div
          key={index}
          className="flex flex-col items-center p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow"
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
        >
          <div className="w-16 h-16 mb-3 flex items-center justify-center text-3xl">
            {icon.icon}
          </div>
          <span className="text-sm font-medium text-gray-700 text-center">
            {icon.name}
          </span>
          {icon.description && (
            <span className="text-xs text-gray-500 text-center mt-1">
              {icon.description}
            </span>
          )}
        </motion.div>
      ))}
    </div>
  );
});

IconGrid.displayName = 'IconGrid';

export default IconGrid;