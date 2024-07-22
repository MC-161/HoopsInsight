import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {Navbar} from './components/Navbar/Navbar'
import Home from "./pages/Home/Home";


function App() {
  return (
    <Router>
      <div className="main-content h-screen">
        {/* Add class for spacing */}
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home />} />
          {/*
          <Route path="/search/player-stats" element={<PlayerSearch />} />
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
