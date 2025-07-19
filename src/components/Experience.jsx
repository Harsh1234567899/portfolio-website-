// src/Experience.jsx
import React from 'react';

const experiences = [
  {
    title: 'Fresher',
    company: '',
    date: '',
    description:
      '',
  },
];

const Experience = () => {
  return (
    <div className="p-8 bg-white" id="experience">
      <h2 className="text-3xl font-bold text-center mb-6">Experience</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6 justify-items-center">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-2xl p-6 w-full max-w-md transform transition duration-300 hover:scale-105"
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-1">
              {exp.title}
            </h3>
            <p className="text-sm text-purple-600 font-medium mb-1">
              {exp.company}
            </p>
            <p className="text-sm text-gray-500 mb-3">{exp.date}</p>
            <p className="text-gray-600 text-sm leading-relaxed">{exp.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
