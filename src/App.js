import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Education from './pages/Education';

function App() {
  return (
    <Router>
      <div className="font-sans min-h-screen bg-gradient-to-br from-[#fdf6f0] via-[#e8f0ff] to-[#f6f0fd] text-gray-800 p-6 md:p-12">

        {/* Contact Info Header */}
        <div className="text-center mb-4 p-4 bg-white bg-opacity-80 rounded shadow-md">
          <p className="text-gray-700 text-sm md:text-base">
            📧 <a href="mailto:tasnovahaque06@gmail.com" className="underline text-blue-600 hover:text-blue-800">tasnovahaque06@gmail.com</a> | 
            📞 <a href="tel:+8801765294504" className="underline text-blue-600 hover:text-blue-800">+8801765294504</a>
          </p>
          <p className="mt-1 text-gray-700 text-sm md:text-base">
            🔗
            <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="underline text-blue-600 hover:text-blue-800 mx-2">LinkedIn</a> | 
            <a href="https://github.com/yourgithub" target="_blank" rel="noopener noreferrer" className="underline text-blue-600 hover:text-blue-800 mx-2">GitHub</a> | 
            <a href="https://kaggle.com/yourkaggle" target="_blank" rel="noopener noreferrer" className="underline text-blue-600 hover:text-blue-800 mx-2">Kaggle</a>
          </p>
        </div>

        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/education" element={<Education />} />
        </Routes>
        
      </div>
    </Router>
  );
}

export default App;
