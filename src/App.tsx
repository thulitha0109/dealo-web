import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Trading from './pages/solutions/Trading';
import Freight from './pages/solutions/Freight';
import Clearence from './pages/solutions/Clearence';
import CargoInsurance from './pages/solutions/Cargo';
import RacingSolutions from './pages/solutions/Racing';
import Tech from './pages/Tech';
import Partnerships from './pages/Partnerships';
import Contact from './pages/Contact';

import './App.css';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path='/trading-solutions' element={<Trading />} />
                <Route path='/freight-forwarding-solutions' element={<Freight />} />
                <Route path='/clearance-solutions' element={<Clearence />} />
                <Route path='/cargo-insurance-solutions' element={<CargoInsurance />} />
                <Route path='/racing-solutions' element={<RacingSolutions />} />
                <Route path='/dealo-tech' element={<Tech />} />
                <Route path='/partnerships' element={<Partnerships />} />
                <Route path='/contact' element={<Contact />} />
                {/* Add a catch-all route for 404 pages */}
                <Route path="*" element={<div>404 - Page Not Found</div>} />
            </Routes>
        </Router>
    );
}

export default App;