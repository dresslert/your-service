import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './pages/Home/Home';
import Services from './pages/Services/Services';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import LoginPage from './pages/Login/LoginPage';
import RegisterUser from './pages/Register/RegisterUser';
import Dashboard from './pages/Dashboard/Dashboard';

import LegalConsultation from './pages/Services/LegalConsultations/LegalConsultations'; 



import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterUser />} />
            
            <Route path="/services/legal-consultation" element={<LegalConsultation />} />

            <Route path="/dashboard" element={<Dashboard />} />

          </Routes>
          <ToastContainer />
        </main>

      </div>
    </Router>
  );
}

export default App;
