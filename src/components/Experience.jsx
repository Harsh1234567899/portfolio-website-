import React from 'react';

const experiences = [
  {
    title: 'Intern',
    company: 'Re-knx Solution Rajkot',
    date: 'Oct-2025 to Mar-2026',
    description:
      'Creating high-performance MERN applications by building intuitive, dynamic UIs, integrating third-party APIs, and managing complex data workflows with optimized MongoDB queries.',
  },
];

const Experience = () => {
  return (
    <div className="p-8 bg-slate-900" id="experience">
      <h2 className="text-3xl font-bold text-center text-white mb-2">Experience</h2>
      <p className="text-center text-slate-400 mb-8">My professional journey and work history.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6 justify-items-center">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="bg-slate-800 border border-slate-700 shadow-lg rounded-2xl p-6 w-full max-w-md transform transition duration-300 hover:scale-105 hover:shadow-purple-900/30 hover:border-purple-700"
          >
            <h3 className="text-xl font-semibold text-white mb-1">
              {exp.title}
            </h3>
            <p className="text-sm text-purple-400 font-medium mb-1">
              {exp.company}
            </p>
            <p className="text-sm text-slate-400 mb-3">{exp.date}</p>
            <p className="text-slate-300 text-sm leading-relaxed">{exp.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
