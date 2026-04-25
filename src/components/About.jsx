import React from "react";
import theme from "../theme";

const About = ({ downloadResume }) => {
  return (
    <section
      id="about"
      className={`${theme.sectionGray} px-6 md:px-20 py-12 flex flex-col-reverse md:flex-row items-center justify-between`}
    >
      {/* Left Side — Text */}
      <div className={`max-w-2xl text-sm leading-relaxed ${theme.textOnSecondary}`}>
        <h2 className={`text-3xl font-semibold mb-4 ${theme.textOnSecondary}`}>About Me</h2>
        <p>
          I'm <strong className={theme.textHighlight}>Harsh Pankhaniya</strong>, a passionate Full Stack Developer with a Bachelor's degree in Information Technology from{' '}
          <strong className={theme.textHighlight}>Marwadi University</strong> (2021–2024).
          <br /><br />
          I specialize in building dynamic, responsive web applications using the{' '}
          <strong className={theme.textHighlight}>MERN stack</strong>, with expertise in{' '}
          <strong className={theme.textHighlight}>React.js, Node.js, Express.js</strong>.
        </p>
        <ul className={`list-disc list-inside mt-4 mb-4 ${theme.textSubAccent}`}>
          <li>Real-time features with <strong className={theme.textHighlight}>Socket.IO</strong></li>
          <li>Secure authentication using <strong className={theme.textHighlight}>JWT</strong> and <strong className={theme.textHighlight}>OTP</strong></li>
          <li>UI/UX design with <strong className={theme.textHighlight}>Bootstrap</strong> and modern JS (ES6+)</li>
        </ul>
        <ul className={`list-disc list-inside mt-2 ${theme.textSubAccent}`}>
          <li><strong className={theme.textOnSecondary}>Portfolio Website</strong> – Allow recruiters or collaborators to view/download your resume and contact you.</li>
          <li><strong className={theme.textOnSecondary}>Calculator</strong> – For My Practice</li>
        </ul>

        <button
          onClick={downloadResume}
          className={`mt-6 px-6 py-2 rounded-xl shadow ${theme.btnPrimary}`}
        >
          Download Resume
        </button>
      </div>

      {/* Right Side — Profile Image */}
      <div className="mb-8 md:mb-0">
        <img
          src="/photo1.jpg"
          alt="Profile"
          className={`w-64 h-64 object-cover rounded-full shadow-lg ${theme.imgBorder}`}
        />
      </div>
    </section>
  );
};

export default About;
