import React from 'react';

function Experience() {
  return (
    <section className="mb-10 bg-green-200 bg-opacity-60 p-6 rounded-lg shadow-sm">
      <h2 className="text-3xl font-semibold text-green-900 mb-6">💼 Experience</h2>
      
      <div className="mb-6">
        <h3 className="text-xl font-bold text-green-800">Graduate Teaching Assistant</h3>
        <p className="italic text-gray-700">East West University — Jun 2025 – Present</p>
        <ul className="list-disc list-inside mt-2 text-lg text-gray-800">
          <li>Conduct advanced lab sessions in core computing courses.</li>
          <li>Mentor final-year students on research and thesis development.</li>
        </ul>
      </div>

      <div>
        <h3 className="text-xl font-bold text-green-800">Undergraduate Teaching Assistant</h3>
        <p className="italic text-gray-700">East West University — Sep 2023 – Jan 2025</p>
        <ul className="list-disc list-inside mt-2 text-lg text-gray-800">
          <li>Tutored students in Mathematics and Statistics.</li>
          <li>Provided academic mentoring and hands-on lab guidance.</li>
        </ul>
      </div>
    </section>
  );
}

export default Experience;
