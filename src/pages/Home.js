import React, { useState, useEffect } from 'react';
import { ChevronDown, Mail, Github, Linkedin, Download, Menu, X } from 'lucide-react';

// Import your actual photo here
// const myphoto = '../assets/myphoto.jpg';  // Uncomment and use this line with your actual photo path
import myphoto from '../assets/myphoto.jpg';
// Temporary placeholder - replace with your actual photo import
//const myphoto = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160' viewBox='0 0 160 160'%3E%3Crect width='160' height='160' fill='%23e5e7eb'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='Arial, sans-serif' font-size='14' fill='%236b7280'%3EYour Photo%3C/text%3E%3C/svg%3E";

const titles = [
  "Machine Learning Engineer",
  "Data Scientist",
  "AI Research Enthusiast",
  "CSE Graduate"
];

function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentTitle, setCurrentTitle] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px] hidden sm:block"></div>
      
      {/* Floating Orbs */}
      <div className="absolute top-16 left-4 w-32 h-32 sm:w-40 sm:h-40 md:top-20 md:left-20 md:w-72 md:h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-16 right-4 w-40 h-40 sm:w-48 sm:h-48 md:bottom-20 md:right-20 md:w-96 md:h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      <div className="relative z-10 min-h-screen flex flex-col">
        
        {/* Professional Header/Navigation */}
        <header className="w-full py-4 sm:py-6 px-4 sm:px-6 lg:px-12">
          <nav className="max-w-6xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm sm:text-lg">TM</span>
              </div>
              <span className="text-white font-semibold text-base sm:text-lg">Tasnova Mazumder</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex gap-2 lg:gap-4">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About" },
                { href: "/experience", label: "Experience" },
                { href: "/projects", label: "Projects" },
                { href: "/Skills", label: "Skills and Interest" },
                { href: "/contact", label: "Contact", special: true },
              ].map(({ href, label, special }) => (
                <a
                  key={href}
                  href={href}
                  className={
                    special
                      ? "px-3 py-2 lg:px-4 lg:py-2 bg-blue-600 hover:bg-blue-900 text-white rounded-lg transition-all duration-200 font-medium text-xs lg:text-sm"
                      : "px-3 py-2 lg:px-4 lg:py-2 text-gray-300 hover:text-white hover:bg-gray-900 rounded-lg transition-all duration-200 font-medium text-xs lg:text-sm"
                  }
                >
                  {label}
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2 text-white hover:bg-white/10 rounded-lg transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </nav>

          {/* Mobile Navigation Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden fixed inset-0 z-50">
              {/* Backdrop */}
              <div className="absolute inset-0 bg-black/70 backdrop-blur-md" onClick={() => setIsMobileMenuOpen(false)}></div>
              
              {/* Slide-out Menu */}
              <div className="absolute right-0 top-0 h-full w-80 sm:w-96 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 backdrop-blur-xl shadow-2xl border-l border-white/10 transform transition-all duration-300 ease-out">
                <div className="flex flex-col h-full relative">
                  {/* Decorative gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-blue-500/5 pointer-events-none"></div>
                  
                  {/* Mobile Menu Header */}
                  <div className="relative flex items-center justify-between p-6 sm:p-8 border-b border-white/10">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                        <span className="text-white font-bold text-sm">TM</span>
                      </div>
                      <div>
                        <h3 className="text-white font-semibold text-lg">Navigation</h3>
                        <p className="text-gray-400 text-xs">Tasnova's Portfolio</p>
                      </div>
                    </div>
                    <button 
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="p-2.5 text-gray-400 hover:text-white hover:bg-white/10 rounded-xl transition-all duration-200"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>

                  {/* Mobile Menu Items */}
                  <div className="relative flex-1 px-6 sm:px-8 py-8">
                    <div className="space-y-4">
                      {[
                        { href: "/", label: "Home", icon: "🏠" },
                        { href: "/about", label: "About", icon: "👤" },
                        { href: "/experience", label: "Experience", icon: "💼" },
                        { href: "/projects", label: "Projects", icon: "🚀" },
                        { href: "/Skills", label: "Skills & Interests", icon: "⚡" },
                        { href: "/contact", label: "Contact", icon: "📧", special: true },
                      ].map(({ href, label, icon, special }) => (
                        <a
                          key={href}
                          href={href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className={
                            special
                              ? "group flex items-center gap-4 w-full px-5 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-2xl transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-[1.02]"
                              : "group flex items-center gap-4 w-full px-5 py-4 text-gray-300 hover:text-white hover:bg-white/10 rounded-2xl transition-all duration-300 font-medium text-lg hover:transform hover:scale-[1.02]"
                          }
                        >
                          <span className="text-2xl">{icon}</span>
                          <span className="flex-1">{label}</span>
                          <ChevronDown className="w-4 h-4 opacity-50 group-hover:opacity-100 transition-opacity transform rotate-[-90deg]" />
                        </a>
                      ))}
                    </div>
                    
                    {/* Quick Actions */}
                    <div className="mt-8 pt-6 border-t border-white/10">
                      <h4 className="text-gray-400 font-medium text-sm uppercase tracking-wider mb-4">Quick Actions</h4>
                      <div className="space-y-3">
                        <a
                          href="/resume.pdf"
                          download
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="flex items-center gap-3 px-4 py-3 bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-400 hover:text-emerald-300 rounded-xl transition-all duration-200 font-medium"
                        >
                          <Download className="w-5 h-5" />
                          <span>Download Resume</span>
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Mobile Menu Footer */}
                  <div className="relative p-6 sm:p-8 border-t border-white/10">
                    <div className="text-center mb-6">
                      <h4 className="text-gray-400 font-medium text-sm uppercase tracking-wider mb-4">Connect With Me</h4>
                      <div className="flex justify-center gap-4">
                        <a 
                          href="mailto:tasnovahaque06@gmail.com" 
                          className="group p-4 bg-white/5 hover:bg-white/10 rounded-2xl transition-all duration-300 hover:scale-105"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          <Mail className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors" />
                        </a>
                        <a 
                          href="https://github.com/tasnovahaque" 
                          className="group p-4 bg-white/5 hover:bg-white/10 rounded-2xl transition-all duration-300 hover:scale-105"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          <Github className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors" />
                        </a>
                        <a 
                          href="https://www.linkedin.com/in/tasnova-haque-86318a2b3/" 
                          className="group p-4 bg-white/5 hover:bg-white/10 rounded-2xl transition-all duration-300 hover:scale-105"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          <Linkedin className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors" />
                        </a>
                      </div>
                    </div>
                    
                    {/* Professional Footer Text */}
                    <div className="text-center">
                      <p className="text-gray-500 text-xs leading-relaxed">
                        © 2025 Tasnova Mazumder<br />
                        Machine Learning Engineer
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </header>

        {/* Main Content */}
        <main className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-12 py-6 sm:py-8 lg:py-12">
          <div className={`max-w-5xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            
            {/* Hero Section */}
            <div className="text-center mb-8 sm:mb-12 lg:mb-16">
              {/* Professional Photo */}
              <div className="relative inline-block mb-4 sm:mb-6 lg:mb-8">
                <div className="relative">
                  <img
                    src={myphoto}
                    alt="Tasnova Haque Mazumder"
                    className="w-24 h-24 xs:w-28 xs:h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 lg:w-40 lg:h-40 rounded-full object-cover border-4 border-gray-700 shadow-xl mx-auto"
                  />
                  <div className="absolute -bottom-1 -right-1 w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 bg-green-500 rounded-full border-2 border-gray-900"></div>
                </div>
              </div>

              {/* Name */}
              <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-bold text-white mb-3 sm:mb-4 text-center tracking-tight px-2">
                <span className="bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent">
                  Tasnova Haque
                </span>
                <br />
                <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent text-2xl xs:text-3xl sm:text-4xl md:text-4xl lg:text-5xl">
                  Mazumder
                </span>
              </h1>

              {/* Dynamic Title */}
              <div className="h-8 sm:h-10 lg:h-12 mb-4 sm:mb-6 lg:mb-8 flex items-center justify-center px-2">
                <p className="text-purple-300 text-base sm:text-lg lg:text-xl font-semibold tracking-wide transition-all duration-500 text-center">
                  {titles[currentTitle]}
                </p>
              </div>

              {/* Description */}
              <div className="flex justify-center w-full px-4 sm:px-6">
                <p className="max-w-xs xs:max-w-sm sm:max-w-lg md:max-w-2xl lg:max-w-3xl text-center text-gray-300 text-sm sm:text-base lg:text-lg mb-6 sm:mb-8 lg:mb-12 leading-relaxed">
                  Transforming complex data into actionable insights through{' '}
                  <span className="text-purple-400 font-semibold bg-purple-400/10 px-2 py-1 rounded">Machine Learning</span>,{' '}
                  <span className="text-blue-400 font-semibold bg-blue-400/10 px-2 py-1 rounded">Explainable AI</span>, and{' '}
                  <span className="text-indigo-400 font-semibold bg-indigo-400/10 px-2 py-1 rounded">Data Analysis</span>.
                  <br className="hidden sm:block" />
                  <span className="block sm:inline mt-2 sm:mt-0 lg:mt-0">
                    I'm passionate about building accessible and impactful AI systems for medical diagnosis, decision support, and real-world automation.
                  </span>
                  <br className="hidden md:block" />
                  <span className="hidden md:inline">
                    My journey blends deep learning, interpretability tools like SHAP and LIME, and a love for solving real-world problems with smart code.
                  </span>
                </p>
              </div>

              {/* Stats Section */}
              <div className="grid grid-cols-3 gap-3 sm:gap-4 lg:gap-6 mb-6 sm:mb-8 lg:mb-12 max-w-xs sm:max-w-md lg:max-w-xl mx-auto px-2">
                <div className="text-center">
                  <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-1 sm:mb-2">10+</div>
                  <div className="text-purple-300 text-xs sm:text-sm">Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-1 sm:mb-2">2025</div>
                  <div className="text-purple-300 text-xs sm:text-sm">Graduate</div>
                </div>
                <div className="text-center">
                  <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-1 sm:mb-2">AI/ML</div>
                  <div className="text-purple-300 text-xs sm:text-sm">Focus</div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col xs:flex-row gap-3 sm:gap-3 lg:gap-4 mb-6 sm:mb-8 lg:mb-12 justify-center items-center px-4">
                <a
                  href="/about"
                  className="group w-full xs:w-auto px-5 sm:px-6 lg:px-8 py-3 lg:py-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 font-semibold text-center text-sm sm:text-base flex items-center justify-center gap-2"
                >
                  Discover My Journey
                </a>
                <a
                  href="/projects"
                  className="w-full xs:w-auto px-5 sm:px-6 lg:px-8 py-3 lg:py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 font-semibold text-center text-sm sm:text-base"
                >
                  View My Work
                </a>
                <a
                  href="/resume.pdf"
                  download
                  className="w-full xs:w-auto px-5 sm:px-6 lg:px-8 py-3 lg:py-4 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 font-semibold text-center text-sm sm:text-base flex items-center justify-center gap-2"
                >
                  <Download className="w-4 h-4 sm:w-5 sm:h-5" />
                  Resume
                </a>
              </div>

              {/* Social Links */}
              <div className="flex gap-3 sm:gap-4 lg:gap-6 mb-6 sm:mb-8 lg:mb-12 justify-center">
                <a href="mailto:tasnovahaque06@gmail.com" className="group p-2.5 sm:p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all duration-300">
                  <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-white group-hover:scale-110 transition-transform" />
                </a>
                <a href="https://github.com/tasnovahaque" className="group p-2.5 sm:p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all duration-300">
                  <Github className="w-5 h-5 sm:w-6 sm:h-6 text-white group-hover:scale-110 transition-transform" />
                </a>
                <a href="https://www.linkedin.com/in/tasnova-haque-86318a2b3/" className="group p-2.5 sm:p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all duration-300">
                  <Linkedin className="w-5 h-5 sm:w-6 sm:h-6 text-white group-hover:scale-110 transition-transform" />
                </a>
              </div>

              {/* Scroll Indicator */}
              <div className="animate-bounce flex justify-center">
                <ChevronDown className="w-6 h-6 sm:w-8 sm:h-8 text-purple-400" />
              </div>
            </div>
          </div>
        </main>

        {/* Specialty Areas Section */}
        <div className="relative z-10 py-6 sm:py-8 lg:py-12 px-4 sm:px-6 lg:px-20 max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white text-center mb-6 sm:mb-8 lg:mb-12 px-2">
            Areas of <span className="text-purple-400">Expertise</span>
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            <div className="group p-4 sm:p-6 lg:p-8 bg-white/5 backdrop-blur-sm rounded-2xl hover:bg-white/10 transition-all duration-300">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg mb-4 sm:mb-6 flex items-center justify-center">
                <div className="w-5 h-5 sm:w-6 sm:h-6 bg-white rounded-sm"></div>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">Machine Learning</h3>
              <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                Developing intelligent systems that learn from data, with expertise in supervised, unsupervised, and deep learning techniques.
              </p>
            </div>
            
            <div className="group p-4 sm:p-6 lg:p-8 bg-white/5 backdrop-blur-sm rounded-2xl hover:bg-white/10 transition-all duration-300">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-lg mb-4 sm:mb-6 flex items-center justify-center">
                <div className="w-5 h-5 sm:w-6 sm:h-6 bg-white rounded-sm"></div>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">Explainable AI</h3>
              <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                Making AI decisions transparent and interpretable, ensuring trust and understanding in machine learning models.
              </p>
            </div>
            
            <div className="group p-4 sm:p-6 lg:p-8 bg-white/5 backdrop-blur-sm rounded-2xl hover:bg-white/10 transition-all duration-300 sm:col-span-2 lg:col-span-1">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg mb-4 sm:mb-6 flex items-center justify-center">
                <div className="w-5 h-5 sm:w-6 sm:h-6 bg-white rounded-sm"></div>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">Data Analysis</h3>
              <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
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