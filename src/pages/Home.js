import React, { useState, useEffect } from 'react';
import { ChevronDown, Mail, Github, Linkedin, Download } from 'lucide-react';
import myphoto from '../assets/myphoto.jpg'; // Your local photo

const titles = [
  "Machine Learning Engineer",
  "Data Scientist",
  "AI Research Enthusiast",
  "CSE Graduate"
];

function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentTitle, setCurrentTitle] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentTitle((prev) => (prev + 1) % titles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-500/10 via-transparent to-transparent"></div>
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]"></div>
      
      {/* Floating Orbs */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6 sm:px-20">

        {/* Profile Photo with Nav Buttons Beside */}
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="relative mb-8 flex flex-col items-center sm:flex-row sm:items-center sm:gap-10">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full blur-md opacity-75 animate-pulse"></div>
              <img
                src={myphoto}
                alt="Tasnova Haque Mazumder"
                className="relative w-48 h-48 rounded-full shadow-2xl border-4 border-white/20 backdrop-blur-sm object-cover"
              />
              
              <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-green-500 rounded-full border-2 border-white animate-pulse"></div>
            </div>

            {/* Navigation Buttons */}
            <nav className="flex flex-wrap justify-center gap-4 mt-6 sm:mt-0">
              <a
                href="/"
                className="px-6 py-3 bg-transparent hover:bg-purple-700 text-white rounded-lg shadow-none font-semibold transition"
              >
                Home
              </a>
              <a
                href="/about"
                className="px-6 py-3 bg-transparent hover:bg-purple-700 text-white rounded-lg shadow-none font-semibold transition"
              >
                About Me
              </a>
              <a
                href="/education"
                className="px-6 py-3 bg-transparent hover:bg-purple-700 text-white rounded-lg shadow-none font-semibold transition"
              >
                Education
              </a>
              <a
                href="/experience"
                className="px-6 py-3 bg-transparent hover:bg-purple-700 text-white rounded-lg shadow-none font-semibold transition"
              >
                Experience
              </a>
              <a
                href="/projects"
                className="px-6 py-3 bg-transparent hover:bg-purple-700 text-white rounded-lg shadow-none font-semibold transition"
              >
                Projects
              </a>
              <a
                href="/skills"
                className="px-6 py-3 bg-transparent hover:bg-purple-700 text-white rounded-lg shadow-none font-semibold transition"
              >
                Skills & Interests
              </a>
              <a
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-pink-600 to-red-600 hover:from-pink-700 hover:to-red-700 text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 font-semibold text-center"
              >
                Contact
              </a>
            </nav>
          </div>

          {/* Name */}
          <h1 className="text-5xl sm:text-7xl font-bold text-white mb-4 text-center tracking-tight">
            <span className="bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent">
              Tasnova Haque
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent text-4xl sm:text-6xl">
              Mazumder
            </span>
          </h1>

          {/* Dynamic Title */}
          <div className="h-12 mb-8 flex items-center justify-center">
            <p className="text-purple-300 text-xl sm:text-2xl font-semibold tracking-wide transition-all duration-500">
              {titles[currentTitle]}
            </p>
          </div>

          {/* Description */}
          <div className="flex justify-center w-full px-4">
            <p className="max-w-3xl text-center text-gray-300 text-lg sm:text-xl mb-12 leading-relaxed">
              Transforming complex data into actionable insights through{' '}
              <span className="text-purple-400 font-semibold bg-purple-400/10 px-2 py-1 rounded">Machine Learning</span>,{' '}
              <span className="text-blue-400 font-semibold bg-blue-400/10 px-2 py-1 rounded">Explainable AI</span>, and{' '}
              <span className="text-indigo-400 font-semibold bg-indigo-400/10 px-2 py-1 rounded">Data Analysis</span>.
              <br className="hidden sm:block" />
              I'm passionate about building accessible and impactful AI systems for medical diagnosis, decision support, and real-world automation.
              <br className="hidden sm:block" />
              My journey blends deep learning, interpretability tools like SHAP and LIME, and a love for solving real-world problems with smart code.
            </p>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-3 gap-8 mb-12 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">5+</div>
              <div className="text-purple-300 text-sm">Projects</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">2024</div>
              <div className="text-purple-300 text-sm">Graduate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">AI/ML</div>
              <div className="text-purple-300 text-sm">Focus</div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12 justify-center">
            <a
              href="/about"
              className="group px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 font-semibold text-center flex items-center justify-center gap-2"
            >
              Discover My Journey
            </a>
            <a
              href="/projects"
              className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 font-semibold text-center"
            >
              View My Work
            </a>
            <a
              href="/resume.pdf"
              className="px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 font-semibold text-center flex items-center justify-center gap-2"
            >
              <Download className="w-5 h-5" />
              Resume
            </a>
          </div>

          {/* Social Links */}
          <div className="flex gap-6 mb-12 justify-center">
            <a href="mailto:tasnovahaque06@gmail.com" className="group p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all duration-300">
              <Mail className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
            </a>
            <a href="https://github.com/yourusername" className="group p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all duration-300">
              <Github className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
            </a>
            <a href="https://linkedin.com/in/yourusername" className="group p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all duration-300">
              <Linkedin className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
            </a>
          </div>

          {/* Scroll Indicator */}
          <div className="animate-bounce flex justify-center">
            <ChevronDown className="w-8 h-8 text-purple-400" />
          </div>
        </div>
      </div>

      {/* Specialty Areas Section */}
      <div className="relative z-10 py-20 px-6 sm:px-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-16">
            Areas of <span className="text-purple-400">Expertise</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="group p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg mb-6 flex items-center justify-center">
                <div className="w-6 h-6 bg-white rounded-sm"></div>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Machine Learning</h3>
              <p className="text-gray-300 leading-relaxed">
                Developing intelligent systems that learn from data, with expertise in supervised, unsupervised, and deep learning techniques.
              </p>
            </div>
            
            <div className="group p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-lg mb-6 flex items-center justify-center">
                <div className="w-6 h-6 bg-white rounded-sm"></div>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Explainable AI</h3>
              <p className="text-gray-300 leading-relaxed">
                Making AI decisions transparent and interpretable, ensuring trust and understanding in machine learning models.
              </p>
            </div>
            
            <div className="group p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg mb-6 flex items-center justify-center">
                <div className="w-6 h-6 bg-white rounded-sm"></div>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Data Analysis</h3>
              <p className="text-gray-300 leading-relaxed">
                Extracting meaningful insights from complex datasets using statistical methods and visualization techniques.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;