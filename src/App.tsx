import './App.css';
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Sidebar from './components/common/Sidebar';
import SummaryPage from './pages/SummaryPage';
import BoardPage from './pages/BoardPage';
import AddTaskPage from './pages/AddTaskPage';
import ContactsPage from './pages/ContactsPage';
import LegalNoticePage from './pages/LegalNoticePage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import Header from './components/common/Header';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';

const PageTransition = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.175 }}
    >
      {children}
    </motion.div>
  );
};

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/login" element={<PageTransition><LoginPage /></PageTransition>} />
        <Route path="/signup" element={<PageTransition><SignUpPage /></PageTransition>} />
        <Route path="/summary" element={<PageTransition><SummaryPage /></PageTransition>} />
        <Route path="/board" element={<PageTransition><BoardPage /></PageTransition>} />
        <Route path="/add-task" element={<PageTransition><AddTaskPage /></PageTransition>} />
        <Route path="/contacts" element={<PageTransition><ContactsPage /></PageTransition>} />
        <Route path="/legal-notice" element={<PageTransition><LegalNoticePage /></PageTransition>} />
        <Route path="/privacy-policy" element={<PageTransition><PrivacyPolicyPage /></PageTransition>} />
        <Route path="/" element={<PageTransition><Navigate to="/login" replace /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  return (
    <div className="app">
      <Router>
        <Sidebar />
        <main>
          <Header />
          <AnimatedRoutes />
        </main>
      </Router>
    </div>
  );
}

export default App;