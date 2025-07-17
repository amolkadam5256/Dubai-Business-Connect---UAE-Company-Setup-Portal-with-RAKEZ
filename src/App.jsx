import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import WhatsAppFloatingButton from './components/WhatsAppFloatingButton ';

import Home from './pages/Home';
import About from './pages/About';
import StartBusiness from './pages/StartBusiness';
import Services from './pages/Services';
import ContactUs from './pages/ContactUs';
import Topbar from './components/Topbar';
import Footer from './components/Footer';
import FloatingSocialMenu from './components/FloatingSocialMenu';

const App = () => {
  return (
    <Router>
      <Topbar/>
      <Navbar />
      <main className="">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/start-business" element={<StartBusiness />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </main>
        <WhatsAppFloatingButton />
      {/* <FloatingSocialMenu/> */}
      <Footer />
    </Router>
  );
};

export default App;
