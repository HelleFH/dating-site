import React from 'react';
import './css/App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Index from './pages/home';
import UserProfile from './pages/viewMyProfile';
import CreateProfile from './pages/CreateProfile';
import SignUp from './pages/signup';
import Favorites from './pages/favorites';
import FavoriteProfile from './pages/favoriteProfile';
import FindMatches from './pages/FindMatches';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/viewMyProfile" element={<UserProfile />} />
        <Route path='/findmatches' element={<FindMatches />} />
        <Route path='/CreateProfile' element={<CreateProfile />} />
        <Route path='/favorites' element={<Favorites />} />
        <Route path="/favoriteProfiles/:id" element={<FavoriteProfile />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/home' element={<Home />} />
        <Route path='/' element={<Home />} />

      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
