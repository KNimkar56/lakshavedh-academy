import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Courses from './pages/Courses';
import Math from './pages/Courses/Math';
import Science from './pages/Courses/Science';
import English from './pages/Courses/English';

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/courses" element={<Courses />} />

        {/* ✅ Course Detail Pages */}
        <Route path="/courses/math" element={<Math />} />
        <Route path="/courses/science" element={<Science />} />
        <Route path="/courses/english" element={<English />} />

        {/* Optional: 404 route */}
        <Route path="*" element={<h1 className="text-center mt-5">404 - Page Not Found</h1>} />
      </Routes>
    </>
  );
}

export default App;
