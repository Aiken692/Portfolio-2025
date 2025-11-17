import { createContext, useContext, useState, useEffect } from 'react';

const ViewModeContext = createContext();

export const useViewMode = () => {
  const context = useContext(ViewModeContext);
  if (!context) {
    throw new Error('useViewMode must be used within a ViewModeProvider');
  }
  return context;
};

export const ViewModeProvider = ({ children }) => {
  const [isSinglePage, setIsSinglePage] = useState(() => {
    // Check localStorage for saved preference
    const saved = localStorage.getItem('portfolioViewMode');
    return saved ? JSON.parse(saved) : false;
  });

  useEffect(() => {
    // Save preference to localStorage
    localStorage.setItem('portfolioViewMode', JSON.stringify(isSinglePage));
  }, [isSinglePage]);

  const toggleViewMode = () => {
    setIsSinglePage(prev => !prev);
  };

  const value = {
    isSinglePage,
    setIsSinglePage,
    toggleViewMode,
  };

  return (
    <ViewModeContext.Provider value={value}>
      {children}
    </ViewModeContext.Provider>
  );
};