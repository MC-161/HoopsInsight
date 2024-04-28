import './App.css'
import Home from './Pages/Home'
import TeamsPage from './Pages/Teams';
import PlayersPage from './Pages/Players';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className='App'>
        <NavBar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/players" element={<PlayersPage/>} />
          <Route path="/Teams" element={<TeamsPage/>} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
