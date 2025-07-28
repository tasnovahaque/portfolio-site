import React from 'react';

function Education() {
  return (
    <section className="mb-10 bg-blue-200 bg-opacity-60 p-6 rounded-lg shadow-sm">
      <h2 className="text-3xl font-semibold text-blue-900 mb-6">🎓 Education</h2>
      <div className="max-w-xl mx-auto text-lg space-y-6">
        
        {/* University */}
        <div>
          <h3 className="font-bold text-xl mb-2">B.Sc. in Computer Science and Engineering</h3>
          <p><strong>East West University, Dhaka</strong> — 2021 – 2025</p>
          <p>CGPA: 3.81 / 4.00</p>
          <p className="mt-2">
            <strong>Honors:</strong> 100% Tuition-Free Merit Scholarship (2023–2024)
          </p>
          <p className="mt-4"><strong>Relevant Coursework:</strong></p>
          <ul className="list-disc list-inside ml-4">
            <li>Machine Learning</li>
            <li>Deep Learning</li>
            <li>Data Structures & Algorithms</li>
            <li>Artificial Intelligence</li>
            <li>Software Engineering</li>
            <li>Database Systems</li>
            <li>Network Design</li>
          </ul>
        </div>

        {/* HSC */}
        <div>
          <h3 className="font-bold text-xl mb-2">Higher Secondary Certificate (HSC)</h3>
          <p><strong>Institution Name (You can replace this)</strong> — Year</p>
          <p>Group: Science</p>
          <p>Grade / GPA: (Add your grade or GPA here)</p>
        </div>
      </div>
    </section>
  );
}

export default Education;
