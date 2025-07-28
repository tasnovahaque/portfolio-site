import React from 'react';
import myphoto from '../assets/myphoto.jpg';  // make sure this path is correct

function Home() {
  return (
    <section className="flex flex-col items-center justify-center min-h-[70vh] bg-gradient-to-r from-purple-300 via-pink-300 to-red-300 rounded-lg p-10 shadow-lg text-center text-white">

      {/* Profile Image */}
      <img
        src={myphoto}
        alt="Tasnova Haque Mazumder"
        className="w-48 h-48 rounded-full border-4 border-white mb-6 shadow-lg object-cover"
      />

      {/* Welcome Heading */}
      <h1 className="text-5xl font-extrabold mb-4 drop-shadow-md">
        Welcome to My Portfolio!
      </h1>

      {/* Intro paragraph */}
      <p className="max-w-xl text-lg sm:text-xl font-medium leading-relaxed mb-6 drop-shadow-md">
        Hi, I’m <span className="font-bold underline decoration-yellow-300">Tasnova Haque Mazumder</span>, a passionate Computer Science & Engineering graduate focused on <span className="italic">Machine Learning, Explainable AI, and Data Analysis</span>. I love turning complex data into insightful solutions and mentoring future tech leaders.
      </p>

      
      {/* Call to Action Buttons */}
      <div className="flex space-x-6">
        <a
          href="/about"
          className="bg-yellow-400 hover:bg-yellow-500 text-purple-900 font-semibold py-3 px-6 rounded-lg shadow-md transition duration-300"
        >
          Learn More About Me
        </a>
        <a
          href="/projects"
          className="bg-purple-700 hover:bg-purple-800 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition duration-300"
        >
          See My Projects
        </a>
      </div>
    </section>
  );
}

export default Home;
