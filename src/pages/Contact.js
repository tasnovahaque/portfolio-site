import React, { useState, useRef, useEffect} from 'react';
import { 
   
  ArrowLeft,

  
} from 'lucide-react';

function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const formRef = useRef(null);

  // Dark mode state
  const [darkMode, setDarkMode] = useState(true); // default true to match homepage

  useEffect(() => {
    const currentForm = formRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );
    if (currentForm) observer.observe(currentForm);
    return () => {
      if (currentForm) observer.unobserve(currentForm);
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message!');
    e.target.reset();
  };

  return (
    <div className={`min-h-screen relative overflow-hidden transition-colors duration-700 ${
      darkMode
        ? 'bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-gray-200'
        : 'bg-gradient-to-br from-[#fdf6f0] via-[#e8f0ff] to-[#f6f0fd] text-gray-900'
    } p-4 sm:p-6 lg:p-12`}>
      
      {/* Background subtle orbs like homepage */}
      {darkMode && (
        <>
          <div className="absolute top-16 left-4 w-32 h-32 sm:w-40 sm:h-40 md:top-20 md:left-20 md:w-72 md:h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-16 right-4 w-40 h-40 sm:w-48 sm:h-48 md:bottom-20 md:right-20 md:w-96 md:h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </>
      )}

      {/* Dark Mode Toggle */}
      <div className="flex justify-end mb-6 sm:mb-8 z-10 relative">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="px-3 py-2 sm:px-4 sm:py-2 text-sm sm:text-base rounded bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold transition"
          aria-label="Toggle Dark Mode"
        >
          {darkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </div>

      <div
        ref={formRef}
        className={`relative z-10 max-w-4xl mx-auto rounded-2xl p-4 sm:p-6 lg:p-10 shadow-2xl
          transition-opacity duration-1000
          ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
          ${darkMode ? 'bg-slate-800 bg-opacity-80 backdrop-blur-md border border-purple-700' : 'bg-white bg-opacity-90'}
        `}
      >
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold mb-4 sm:mb-6 text-center text-purple-400">
          Contact Me
        </h2>
{/* Back Button */}
          <button
            onClick={() => window.history.back()}
            className="flex items-center gap-2 px-3 py-2 sm:px-4 sm:py-2 mb-6 sm:mb-8 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white hover:bg-white/20 transition-all duration-300 group text-sm sm:text-base"
          >
            <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 group-hover:-translate-x-1 transition-transform duration-300" />
            <span className="font-medium">Back</span>
          </button>
        <p className={`mb-6 sm:mb-8 text-center text-sm sm:text-base ${
          darkMode ? 'text-purple-300' : 'text-gray-700'
        }`}>
          Feel free to reach out for collaborations, questions, or just to say hello!
        </p>

        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
          <div>
            <label htmlFor="name" className="block mb-1 font-semibold text-sm sm:text-base">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className={`w-full p-2 sm:p-3 text-sm sm:text-base rounded border focus:outline-none focus:ring-2
                ${darkMode
                  ? 'bg-slate-700 border-purple-600 text-gray-200 focus:ring-purple-500'
                  : 'bg-gray-50 border-gray-300 text-gray-900 focus:ring-purple-600'}
                transition`}
            />
          </div>

          <div>
            <label htmlFor="email" className="block mb-1 font-semibold text-sm sm:text-base">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className={`w-full p-2 sm:p-3 text-sm sm:text-base rounded border focus:outline-none focus:ring-2
                ${darkMode
                  ? 'bg-slate-700 border-purple-600 text-gray-200 focus:ring-purple-500'
                  : 'bg-gray-50 border-gray-300 text-gray-900 focus:ring-purple-600'}
                transition`}
            />
          </div>
 
          <div>
            <label htmlFor="message" className="block mb-1 font-semibold text-sm sm:text-base">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              required
              className={`w-full p-2 sm:p-3 text-sm sm:text-base rounded border focus:outline-none focus:ring-2
                ${darkMode
                  ? 'bg-slate-700 border-purple-600 text-gray-200 focus:ring-purple-500'
                  : 'bg-gray-50 border-gray-300 text-gray-900 focus:ring-purple-600'}
                transition`}
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-2 sm:py-3 text-sm sm:text-base bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white rounded-xl font-semibold transition"
          >
            Send Message
          </button>
        </form>

        <div className="mt-8 sm:mt-12 text-center space-y-2">
          <p className={`text-sm sm:text-base ${darkMode ? 'text-purple-300' : 'text-gray-700'}`}><strong>📧 Email:</strong> tasnovahaque06@gmail.com</p>
          <p className={`text-sm sm:text-base ${darkMode ? 'text-purple-300' : 'text-gray-700'}`}><strong>📞 Phone:</strong> +8801765294504</p>
          <p className={`text-sm sm:text-base ${darkMode ? 'text-purple-300' : 'text-gray-700'}`}><strong>🏠 Address:</strong> Dhaka, Bangladesh</p>
          <p className={`mt-4 text-sm sm:text-base ${darkMode ? 'text-purple-400' : 'text-purple-600'}`}>
            🔗{' '}
            <a href="https://www.linkedin.com/in/tasnova-haque-nova/" target="_blank" rel="noopener noreferrer" className="underline hover:text-purple-300 transition">
              LinkedIn
            </a>{' '}
            |{' '}
            <a href="https://github.com/tasnovahaque" target="_blank" rel="noopener noreferrer" className="underline hover:text-purple-300 transition">
              GitHub
            </a>{' '}
            |{' '}
            
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
