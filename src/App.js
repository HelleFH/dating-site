import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes, Outlet } from 'react-router-dom';
import Home from './pages';
import About from './pages/about';
import ProfilePage from './pages/profile';
import SignUp from './pages/signup';
import Favorites from './pages/favorites';
import MatchProfile from './pages/matchProfile';
import FindMatches from './pages/FindMatches';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/about' element={<About />} />
        <Route path='/findmatches' element={<FindMatches />} />
        <Route path='/profile' element={<ProfilePage />} />
        <Route path='/favorites' element={<Favorites />} />
        <Route path="/matchProfiles/:id" element={<MatchProfile />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/' element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
