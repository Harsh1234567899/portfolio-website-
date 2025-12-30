import React from "react";


const About = ({ downloadResume }) => {
  return (
    <section
      id="about"
      className=" bg-slate-900 px-6 md:px-20 py-12 flex flex-col-reverse md:flex-row items-center justify-between text-white"
    >
      {/* Left Side - Text Content */}
      <div className="max-w-2xl text-sm leading-relaxed">
        <h2 className="text-3xl font-semibold mb-4">About Me</h2>
        <p>
          I'm <strong>Harsh Pankhaniya</strong>, a passionate Full Stack Developer with a Bachelor’s degree in Information Technology from <strong>Marwadi University</strong> (2021–2024).
          <br /><br />
          I specialize in building dynamic, responsive web applications using the <strong>MERN stack</strong>, with expertise in <strong>React.js, Node.js, Express.js</strong>.
        </p>
        <ul className="list-disc list-inside mt-4 mb-4">
          <li>Real-time features with <strong>Socket.IO</strong></li>
          <li>Secure authentication using <strong>JWT</strong> and <strong>OTP</strong></li>
          <li>UI/UX design with <strong>Bootstrap</strong> and modern JS (ES6+)</li>
        </ul>
        {/* <p>
          <strong>Current Role:</strong> Full Stack Development Intern at <strong>Hexagon Infosoft Solution Pvt. Ltd.</strong> (Jan 2025 – Present) — building web apps, integrating APIs, and optimizing dashboards.
        </p> */}
        <br />
        {/* <p>
          <strong>Key Projects:</strong>
        </p> */}
        <ul className="list-disc list-inside mt-2">
          <li><strong>Porfolio Website</strong> – Allow recruiters or collaborators to view/download your resume and contact you.</li>
          <li><strong>Calculator</strong> – Foe My Practice </li>
        </ul>

        {/* Resume Button */}
        <button
          onClick={downloadResume}
          className="mt-6 bg-blue-600 text-white px-6 py-2 rounded-xl hover:bg-blue-700 transition"
        >
          Download Resume
        </button>
      </div>

      {/* Right Side - Profile Image */}
      <div className="mb-8 md:mb-0">
        <img
          src="/photo1.jpg"
          alt="Profile"
          className="w-64 h-64 object-cover rounded-full shadow-lg border-4 border-blue-400"
        />
      </div>
    </section>
  );
};

export default About;
