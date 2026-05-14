import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CursorGlow from './components/CursorGlow';

// Lazy load pages
const LandingPage = lazy(() => import('./pages/LandingPage'));
const EligibilityForm = lazy(() => import('./pages/EligibilityForm'));
const Dashboard = lazy(() => import('./pages/Dashboard'));
const EMICalculator = lazy(() => import('./pages/EMICalculator'));
const SchemesExplorer = lazy(() => import('./pages/SchemesExplorer'));
const CompareLoans = lazy(() => import('./pages/CompareLoans'));

const PageWrapper = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -10 }}
    transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
    className="w-full"
  >
    {children}
  </motion.div>
);

const AppContent = () => {
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col relative overflow-x-hidden">
      <CursorGlow />
      <Navbar />
      <main className="flex-grow pt-20 sm:pt-24 lg:pt-32">
        <AnimatePresence mode="wait">
          <Suspense fallback={
            <div className="h-[60vh] flex flex-col items-center justify-center bg-background">
              <div className="relative">
                <div className="w-12 h-12 border-2 border-accent/20 rounded-full"></div>
                <div className="absolute top-0 left-0 w-12 h-12 border-2 border-accent border-t-transparent rounded-full animate-spin"></div>
              </div>
              <p className="mt-6 text-[10px] font-bold text-accent uppercase tracking-[0.3em] animate-pulse">Initializing Pilot...</p>
            </div>
          }>
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<PageWrapper><LandingPage /></PageWrapper>} />
              <Route path="/eligibility" element={<PageWrapper><EligibilityForm /></PageWrapper>} />
              <Route path="/dashboard" element={<PageWrapper><Dashboard /></PageWrapper>} />
              <Route path="/calculator" element={<PageWrapper><EMICalculator /></PageWrapper>} />
              <Route path="/schemes" element={<PageWrapper><SchemesExplorer /></PageWrapper>} />
              <Route path="/compare" element={<PageWrapper><CompareLoans /></PageWrapper>} />
            </Routes>
          </Suspense>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
};

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
