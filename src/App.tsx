import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/common/Sidebar";
import SummaryPage from "./pages/SummaryPage";
import BoardPage from "./pages/BoardPage";
import AddTaskPage from "./pages/AddTaskPage";
import ContactsPage from "./pages/ContactsPage";
import LegalNoticePage from "./pages/LegalNoticePage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import './App.css';

function App() {
  return (
    <>
    <div className="app">
      <Router>
        <Sidebar />
        <main>
          <Routes>
            <Route path="/" element={<SummaryPage />} />
            <Route path="/board" element={<BoardPage />} />
            <Route path="/add-task" element={<AddTaskPage />} />
            <Route path="/contacts" element={<ContactsPage />} />
            <Route path="/legal-notice" element={<LegalNoticePage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          </Routes>
        </main>
      </Router>
    </div>
    </>
  );
}

export default App;