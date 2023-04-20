import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Missions from './components/Missions';
import Myprofile from './components/myprofile';
import Navbar from './components/Navbar';
import Rockets from './components/Rockets';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="app">
        <Routes>
          <Route path="/" element={<Rockets />} />
          <Route path="/missions" element={<Missions />} />
          <Route path="/myprofile" element={<Myprofile />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
