import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TermsOfService from './pages/legal/TermsOfService';
import PrivacyPolicy from './pages/legal/PrivacyPolicy';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;
