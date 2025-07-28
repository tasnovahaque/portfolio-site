import React from 'react';

function Projects() {
  const projects = [
    {
      title: "XDetech – TB Detection",
      desc: "Used CNNs (best: ShuffleNet v2) to detect tuberculosis from chest X-rays. Integrated Grad-CAM for interpretability and deployed an interactive diagnostic web app (XDetech).",
    },
    {
      title: "Smart CO₂ Forecasting",
      desc: "Developed a predictive model for vehicle CO₂ emissions; achieved highest accuracy with Random Forest and ensured model transparency using SHAP and LIME.",
    },
    {
      title: "Acoustic Scene Classification",
      desc: "MFCC + DL model for urban environmental sound classification.",
    },
    {
      title: "University Network Design",
      desc: "Built a multi-campus network using OSPF in Cisco Packet Tracer with centralized DHCP and DNS servers for dynamic IP assignment.",
    },
    {
      title: "EWU Portal Replication",
      desc: "Full-stack Laravel system with JWT login & role management.",
    },
    {
      title: "Anemia Diagnosis via CBC-Based Predictive Modeling",
      desc: "Performed statistical analysis (ANOVA, t-tests) on CBC data to select features, followed by ML-based anemia prediction with SHAP for interpretability.",
    },
  ];

  return (
    <section className="mb-10 bg-yellow-200 bg-opacity-60 p-6 rounded-lg shadow-sm">
      <h2 className="text-3xl font-semibold text-yellow-900 mb-6">🛠️ Projects</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((proj, idx) => (
          <div key={idx} className="bg-white p-4 border-l-4 border-yellow-500 rounded shadow-sm">
            <h3 className="font-bold text-lg text-yellow-700 mb-2">{proj.title}</h3>
            <p>{proj.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
