import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Home from './pages/Home';
import About from './pages/About';
import WhoWeServe from './pages/WhoWeServe';
import Mentorship from './pages/Mentorship';
import Courses from './pages/Courses';
import CareerDevelopment from './pages/CareerDevelopment';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';
import './App.css';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="app">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/who-we-serve" element={<WhoWeServe />} />
            <Route path="/mentorship" element={<Mentorship />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/career-development" element={<CareerDevelopment />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
