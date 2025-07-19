// src/Skills.jsx
import React from 'react';

const skills = [
  { name: 'JavaScript', icon: './js.png', color: '#f7df1e', progress: 90 },
  { name: 'React.js', icon: './react.png', color: '#61dafb', progress: 85 },
  { name: 'Node.js', icon: './node.png', color: '#3c873a', progress: 80 },
  { name: 'Express.js', icon: './express.png', color: '#000', progress: 80 },
  { name: 'MongoDB', icon: './mongodb.png', color: '#47A248', progress: 80 },
  { name: 'Git', icon: './git.png', color: '#f14e32', progress: 85 },
  { name: 'GitHub', icon: './github.png', color: '#f14e32', progress: 85 },
  { name: 'CSS', icon: './css.png', color: '#f14e32', progress: 85 },
];

const Skills = () => {
  return (
    <div className="p-8 bg-white" id="skills">
      <h2 className="text-3xl font-bold text-center mb-2">My Skills</h2>  
      <p className="text-center text-gray-500 mb-8">
        My technical skill set and current proficiency levels.
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 justify-items-center">
        {skills.map((skill, index) => {
          const radius = 36;
          const circumference = 2 * Math.PI * radius;
          const offset = circumference - (skill.progress / 100) * circumference;

          return (
            <div
              key={index}
              className="bg-white shadow-md rounded-2xl p-4 flex flex-col items-center w-40 
                         transition-transform duration-300 hover:scale-110 hover:shadow-lg"
            >
              <div className="relative w-20 h-20 mb-3">
                <svg className="absolute top-0 left-0 w-full h-full">
                  <circle
                    cx="40"
                    cy="40"
                    r={radius}
                    stroke="#e5e7eb" // Gray background circle
                    strokeWidth="6"
                    fill="none"
                  />
                  <circle
                    cx="40"
                    cy="40"
                    r={radius}
                    stroke={skill.color}
                    strokeWidth="6"
                    fill="none"
                    strokeDasharray={circumference}
                    strokeDashoffset={offset}
                    strokeLinecap="round"
                    className="transition-all duration-700"
                  />
                </svg>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <img src={skill.icon} alt={skill.name} className="w-10 h-10" />
                </div>
              </div>
              <p className="font-semibold text-center">{skill.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
