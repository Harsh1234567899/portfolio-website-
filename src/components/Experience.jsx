import React from 'react';
import theme from '../theme';

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
    <div className="p-8 " id="experience">
      {/* Headings on gray-600 bg → white text */}
      <h2 className={`text-3xl font-bold text-center ${theme.textOnSecondary} mb-2`}>Experience</h2>
      <p className={`text-center ${theme.textSubAccent} mb-8`}>My professional journey and work history.</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 justify-items-center">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className={`${theme.cardOnGray} rounded-2xl p-6 w-full max-w-md ${theme.cardHoverGray} `}
          >
            <h3 className={`text-xl font-semibold ${theme.textHeading} mb-1`}>
              {exp.title}
            </h3>
            <p className={`text-sm font-semibold ${theme.textAccent} mb-1`}>
              {exp.company}
            </p>
            <p className={`text-sm ${theme.textMuted} mb-3`}>{exp.date}</p>
            <p className={`${theme.textBody} text-sm leading-relaxed`}>{exp.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
