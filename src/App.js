import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route }
    from 'react-router-dom';
import Home from './pages';
import About from './pages/about';
import ProfilePage from './pages/profile';
import SignUp from './pages/signup';
import Favorites from './pages/favorites';

import Contact from './pages/FindMatches';
document.head.appendChild(styleElement);
 
function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path='/about' element={<About />} />
                <Route path='/findmatches' element={<Contact />} />
                <Route path='/profile' element={<ProfilePage />} />
                <Route path='/favorites' element={<Favorites />} />

                <Route path='/sign-up' element={<SignUp />} />
            </Routes>
        </Router>
    );
}
 
export default App;