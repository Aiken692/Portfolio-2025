import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { ViewModeProvider, useViewMode } from './contexts/ViewModeContext';
import Loader from './components/Loader';
import Layout from './components/layout/Layout';
import ScrollToTop from './components/shared/ScrollToTop';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import SinglePage from './pages/SinglePage';

// Main App Content Component
const AppContent = () => {
  const [loading, setLoading] = useState(true);
  const { isSinglePage } = useViewMode();

  useEffect(() => {
    // Simulate loading time for assets
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader key="loader" />;
  }

  if (isSinglePage) {
    // Single Page Mode
    return (
      <div key="single-page" className="relative min-h-screen bg-dark-950">
        <Navigation />
        <main>
          <SinglePage />
        </main>
        <Footer />
      </div>
    );
  }

  // Multi-Page Mode (Router-based)
  return (
    <div key="multi-page">
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="projects" element={<Projects />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </div>
  );
};

function App() {
  return (
    <ViewModeProvider>
      <Router>
        <AnimatePresence mode="wait">
          <AppContent />
        </AnimatePresence>
      </Router>
    </ViewModeProvider>
  );
}

export default App;
