import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navbar } from './components/Navbar/Navbar';
import Home from "./pages/Home/Home";
import Legal from "./pages/Legal/Legal";
import PrivacyPolicy from "./pages/Legal/Privacy";
import TermsOfService from "./pages/Legal/Terms";
import PlayerSearch from "@/pages/PlayerSearch/PlayerSearch";
import { checkApiStatus } from "./pages/utils/checkApiStatus";
import Loader from "./pages/utils/LoadingPage";
import { useState, useEffect} from "react";
import PlayerDash from "./pages/PlayerDash/PlayerDash";

const App: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const apiUrl = `${import.meta.env.VITE_BASE_URL}/players`; // Replace with your API endpoint

    const checkApi = async () => {
      try {
        await checkApiStatus(apiUrl);
        setLoading(false);
      } catch (error) {
        console.error('API check error:', error);
        // Optionally handle errors or retry logic
      }
    };

    checkApi();
  }, []);
;

  if (loading) {
    return <Loader message="The service is currently unavailable. Please try again later." />;
  }

  return (
    <Router>
      <div className="main-content h-screen">
        <Navbar />
          <Routes>
          <Route 
              path="/" 
              element={<Home />} 
            />
            <Route path="/legal" element={<Legal />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsOfService />} />
            <Route path="/search/player" element={<PlayerSearch />} />
            <Route path="/player-dash" element={<PlayerDash/>} />
            {/*
            <Route path="/search/team-stats" element={<TeamSearch />} />
            <Route path="/tools/comparison" element={<ComparisonTool />} />
            <Route path="/tools/chatbot" element={<ChatBot />} />
            <Route path="/contact/form" element={<Contact />} />
            <Route path="/contact/support" element={<Contact />} /> */}
          </Routes>
      </div>
    </Router>
  );
}

export default App;
