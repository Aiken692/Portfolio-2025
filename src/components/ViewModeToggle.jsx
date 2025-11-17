import { motion } from 'framer-motion';
import { useViewMode } from '../contexts/ViewModeContext';

const ViewModeToggle = () => {
  const { isSinglePage, toggleViewMode } = useViewMode();

  return (
    <motion.div
      className="flex items-center gap-3"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.3 }}
    >
      <span className="text-sm text-dark-400 hidden sm:block">
        {isSinglePage ? 'Single Page' : 'Multi Page'}
      </span>
      <motion.button
        onClick={toggleViewMode}
        className={`relative w-14 h-7 rounded-full transition-colors duration-300 ${
          isSinglePage 
            ? 'bg-primary-500' 
            : 'bg-dark-700 border border-dark-600'
        }`}
        whileTap={{ scale: 0.95 }}
        title={`Switch to ${isSinglePage ? 'Multi Page' : 'Single Page'} mode`}
      >
        <motion.div
          className={`absolute top-0.5 w-6 h-6 rounded-full transition-colors duration-300 ${
            isSinglePage 
              ? 'bg-white' 
              : 'bg-dark-400'
          }`}
          animate={{
            x: isSinglePage ? 28 : 2,
          }}
          transition={{
            type: "spring",
            stiffness: 500,
            damping: 30
          }}
        />
        
        {/* Icons */}
        <div className="absolute inset-0 flex items-center justify-between px-1.5 pointer-events-none">
          {/* Multi-page icon */}
          <motion.svg
            className={`w-3 h-3 transition-colors duration-300 ${
              !isSinglePage ? 'text-primary-400' : 'text-dark-600'
            }`}
            fill="currentColor"
            viewBox="0 0 20 20"
            animate={{ opacity: !isSinglePage ? 1 : 0.3 }}
          >
            <path fillRule="evenodd" d="M3 4a1 1 0 011-1h4a1 1 0 010 2H6.414l2.293 2.293a1 1 0 01-1.414 1.414L5 6.414V8a1 1 0 01-2 0V4zm9 1a1 1 0 010-2h4a1 1 0 011 1v4a1 1 0 01-2 0V6.414l-2.293 2.293a1 1 0 11-1.414-1.414L13.586 5H12zm-9 7a1 1 0 012 0v1.586l2.293-2.293a1 1 0 111.414 1.414L6.414 15H8a1 1 0 010 2H4a1 1 0 01-1-1v-4zm13-1a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 010-2h1.586l-2.293-2.293a1 1 0 111.414-1.414L15 13.586V12a1 1 0 011-1z" clipRule="evenodd" />
          </motion.svg>
          
          {/* Single-page icon */}
          <motion.svg
            className={`w-3 h-3 transition-colors duration-300 ${
              isSinglePage ? 'text-white' : 'text-dark-600'
            }`}
            fill="currentColor"
            viewBox="0 0 20 20"
            animate={{ opacity: isSinglePage ? 1 : 0.3 }}
          >
            <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v12a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm2 2v8h10V6H5z" clipRule="evenodd" />
          </motion.svg>
        </div>
      </motion.button>
    </motion.div>
  );
};

export default ViewModeToggle;