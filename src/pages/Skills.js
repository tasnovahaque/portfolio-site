import React from 'react';

function Skills() {
  return (
    <section className="mb-10 bg-indigo-200 bg-opacity-70 p-6 rounded-lg shadow-md">
      <h2 className="text-3xl font-semibold text-indigo-900 mb-4">Skills & Interests</h2>
      <div className="text-gray-900 text-lg space-y-6">
        <div>
          <h3 className="font-bold text-xl mb-2">Skills</h3>
          <ul className="list-disc list-inside space-y-1">
            <li><span className="font-semibold">Programming Languages:</span> Python, C, C++, HTML, PHP, MATLAB</li>
            <li><span className="font-semibold">Machine Learning & AI:</span> Explainable AI, SHAP, LIME, CNNs, YOLO, Random Forest</li>
            <li><span className="font-semibold">Tools & Technologies:</span> Git, Google Colab, MySQL, Excel, Linux, Figma</li>
            <li><span className="font-semibold">Other:</span> Research, Academic Writing, Public Speaking, Statistical Analysis</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-xl mb-2">Interests</h3>
          <p>
            I am deeply interested in Data Analysis, Machine Learning, and Artificial Intelligence, with a strong commitment to leveraging these fields to develop innovative and impactful solutions.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Skills;
