import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Rocket from './components/views/rocket';
import Mission from './components/views/mission';
import MyProfile from './components/views/myprofile';

function App() {
  return (
    <Router>
      <header>
        <div>
          <Navbar />
        </div>

        <Routes>
          <Route path="/" element={<Rocket />} />
          <Route path="/Missions" element={<Mission />} />
          <Route path="/MyProfile" element={<MyProfile />} />
        </Routes>

      </header>
    </Router>
  );
}

export default App;
