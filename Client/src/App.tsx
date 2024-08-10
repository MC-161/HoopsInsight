import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {Navbar} from './components/Navbar/Navbar'
import Home from "./pages/Home/Home";
import Legal from "./pages/Legal/Legal";
import PrivacyPolicy from "./pages/Legal/Privacy";
import TermsOfService from "./pages/Legal/Terms";
import PlayerSearch from "@/pages/PlayerSearch/PlayerSearch";

function App() {
  return (
    <Router>
      <div className="main-content h-screen">
        {/* Add class for spacing */}
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home />} />
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
      </div>
    </Router>
  );
}

export default App;
