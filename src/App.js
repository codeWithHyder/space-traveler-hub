import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Missions from './Components/Missions';
import Myprofile from './Components/Myprofile';
import Navbar from './Components/Navbar';
import Rockets from './Components/Rockets';

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
