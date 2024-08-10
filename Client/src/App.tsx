import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navbar } from './components/Navbar/Navbar';
import Home from "./pages/Home/Home";
import Legal from "./pages/Legal/Legal";
import PrivacyPolicy from "./pages/Legal/Privacy";
import TermsOfService from "./pages/Legal/Terms";
import PlayerSearch from "@/pages/PlayerSearch/PlayerSearch";
import { checkApiStatus } from "./pages/utils/checkApiStatus";
import Loader from "./pages/utils/LoadingPage";
import { useState, useEffect, Suspense } from "react";

const App: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [homeLoaded, setHomeLoaded] = useState<boolean>(false);

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

  const handleHomeLoad = () => {
    setHomeLoaded(true);
  };

  if (loading) {
    return <Loader message="The service is currently unavailable. Please try again later." />;
  }

  return (
    <Router>
      <div className="main-content h-screen">
        <Navbar />
        <Suspense fallback={<Loader message="Loading home page..." />}>
          <Routes>
            <Route 
              path="/" 
              element={<Home onLoad={handleHomeLoad} />} 
            />
            <Route path="/legal" element={<Legal />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsOfService />} />
            <Route path="/search/player" element={<PlayerSearch />} />
            <Route path="/playerDash/:id" element={<TermsOfService />} />
            {/*
            <Route path="/search/team-stats" element={<TeamSearch />} />
            <Route path="/tools/comparison" element={<ComparisonTool />} />
            <Route path="/tools/chatbot" element={<ChatBot />} />
            <Route path="/contact/form" element={<Contact />} />
            <Route path="/contact/support" element={<Contact />} /> */}
          </Routes>
        </Suspense>
        {!homeLoaded && <Loader message="Home page is loading, please wait..." />}
      </div>
    </Router>
  );
}

export default App;
