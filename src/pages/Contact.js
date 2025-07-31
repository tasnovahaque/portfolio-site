import React, { useState, useRef, useEffect } from 'react';

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
    } p-6 sm:p-12`}>
      
      {/* Background subtle orbs like homepage */}
      {darkMode && (
        <>
          <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </>
      )}

      {/* Dark Mode Toggle */}
      <div className="flex justify-end mb-8 z-10 relative">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="px-4 py-2 rounded bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold transition"
          aria-label="Toggle Dark Mode"
        >
          {darkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </div>

      <div
        ref={formRef}
        className={`relative z-10 max-w-4xl mx-auto rounded-2xl p-10 shadow-2xl
          transition-opacity duration-1000
          ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
          ${darkMode ? 'bg-slate-800 bg-opacity-80 backdrop-blur-md border border-purple-700' : 'bg-white bg-opacity-90'}
        `}
      >
        <h2 className="text-4xl font-extrabold mb-6 text-center text-purple-400">
          Contact Me
        </h2>

        <p className={`mb-8 text-center ${
          darkMode ? 'text-purple-300' : 'text-gray-700'
        }`}>
          Feel free to reach out for collaborations, questions, or just to say hello!
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block mb-1 font-semibold">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className={`w-full p-3 rounded border focus:outline-none focus:ring-2
                ${darkMode
                  ? 'bg-slate-700 border-purple-600 text-gray-200 focus:ring-purple-500'
                  : 'bg-gray-50 border-gray-300 text-gray-900 focus:ring-purple-600'}
                transition`}
            />
          </div>

          <div>
            <label htmlFor="email" className="block mb-1 font-semibold">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className={`w-full p-3 rounded border focus:outline-none focus:ring-2
                ${darkMode
                  ? 'bg-slate-700 border-purple-600 text-gray-200 focus:ring-purple-500'
                  : 'bg-gray-50 border-gray-300 text-gray-900 focus:ring-purple-600'}
                transition`}
            />
          </div>

          <div>
            <label htmlFor="message" className="block mb-1 font-semibold">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              required
              className={`w-full p-3 rounded border focus:outline-none focus:ring-2
                ${darkMode
                  ? 'bg-slate-700 border-purple-600 text-gray-200 focus:ring-purple-500'
                  : 'bg-gray-50 border-gray-300 text-gray-900 focus:ring-purple-600'}
                transition`}
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white rounded-xl font-semibold transition"
          >
            Send Message
          </button>
        </form>

        <div className="mt-12 text-center">
          <p className={`${darkMode ? 'text-purple-300' : 'text-gray-700'}`}><strong>📧 Email:</strong> tasnovahaque06@gmail.com</p>
          <p className={`${darkMode ? 'text-purple-300' : 'text-gray-700'}`}><strong>📞 Phone:</strong> +8801765294504</p>
          <p className={`${darkMode ? 'text-purple-300' : 'text-gray-700'}`}><strong>🏠 Address:</strong> Dhaka, Bangladesh</p>
          <p className={`mt-4 ${darkMode ? 'text-purple-400' : 'text-purple-600'}`}>
            🔗{' '}
            <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="underline hover:text-purple-300 transition">
              LinkedIn
            </a>{' '}
            |{' '}
            <a href="https://github.com/yourgithub" target="_blank" rel="noopener noreferrer" className="underline hover:text-purple-300 transition">
              GitHub
            </a>{' '}
            |{' '}
            <a href="https://kaggle.com/yourkaggle" target="_blank" rel="noopener noreferrer" className="underline hover:text-purple-300 transition">
              Kaggle
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
