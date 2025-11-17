import { motion } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';

const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      className={`relative w-14 h-7 rounded-full transition-colors duration-300 ${
        isDarkMode 
          ? 'bg-dark-700 border border-dark-600' 
          : 'bg-gray-200 border border-gray-300'
      }`}
      whileTap={{ scale: 0.95 }}
      title={`Switch to ${isDarkMode ? 'Light' : 'Dark'} mode`}
    >
      <motion.div
        className={`absolute top-0.5 w-6 h-6 rounded-full transition-colors duration-300 flex items-center justify-center ${
          isDarkMode 
            ? 'bg-dark-400' 
            : 'bg-white shadow-md'
        }`}
        animate={{
          x: isDarkMode ? 2 : 28,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 30
        }}
      >
        {/* Theme Icons */}
        <motion.div
          animate={{ 
            opacity: isDarkMode ? 1 : 0,
            rotate: isDarkMode ? 0 : 180
          }}
          transition={{ duration: 0.3 }}
          className="absolute"
        >
          {/* Moon Icon */}
          <svg
            className="w-3 h-3 text-yellow-400"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path fillRule="evenodd" d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" clipRule="evenodd" />
          </svg>
        </motion.div>
        
        <motion.div
          animate={{ 
            opacity: isDarkMode ? 0 : 1,
            rotate: isDarkMode ? -180 : 0
          }}
          transition={{ duration: 0.3 }}
          className="absolute"
        >
          {/* Sun Icon */}
          <svg
            className="w-3 h-3 text-yellow-500"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
          </svg>
        </motion.div>
      </motion.div>

      {/* Background Icons */}
      <div className="absolute inset-0 flex items-center justify-between px-1.5 pointer-events-none">
        {/* Left side - Moon */}
        <motion.svg
          className={`w-3 h-3 transition-colors duration-300 ${
            isDarkMode ? 'text-yellow-400' : 'text-gray-400'
          }`}
          fill="currentColor"
          viewBox="0 0 20 20"
          animate={{ opacity: isDarkMode ? 0.3 : 1 }}
        >
          <path fillRule="evenodd" d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" clipRule="evenodd" />
        </motion.svg>
        
        {/* Right side - Sun */}
        <motion.svg
          className={`w-3 h-3 transition-colors duration-300 ${
            isDarkMode ? 'text-gray-600' : 'text-yellow-500'
          }`}
          fill="currentColor"
          viewBox="0 0 20 20"
          animate={{ opacity: isDarkMode ? 1 : 0.3 }}
        >
          <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
        </motion.svg>
      </div>
    </motion.button>
  );
};

export default ThemeToggle;