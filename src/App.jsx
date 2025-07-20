import React, { useState } from 'react';
import { personalInfo } from './data';
import Contact from './components/Contact';
import Skills from './components/Skills';
import Experience from './components/Experience';
import About from './components/About';
import Projects from './components/Projects';

const downloadResume = () => {
  fetch('/Harsh_Pankhaniya.pdf')
    .then(res => res.blob())
    .then(blob => {
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'Harsh_Pankhaniya.pdf';
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(url);
    })
    .catch(error => console.error('Error downloading resume:', error));
};

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="font-sans text-gray-800">
      {/* Navbar */}
      <header className="bg-white shadow-md p-4 flex items-center justify-between md:px-12">
        <h1 className="text-xl font-bold text-blue-700">{personalInfo.name}</h1>
        <nav className="hidden md:flex flex-1 justify-center space-x-8 text-gray-700 font-medium">
          <a href="#home">Home</a>
          <a href="#projects">Projects</a>
          {/* <a href="#Experience">Experience</a> */}
          <a href="#skills">Skills</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
        <div className="hidden md:block">
          <button
            onClick={downloadResume}
            className="bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700 transition"
          >
            Resume Download
          </button>
        </div>
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-2xl text-blue-600">☰</button>
        </div>
      </header>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="flex flex-col bg-white shadow-md p-4 md:hidden space-y-2 text-gray-700">
          {['home', 'about', 'skills', 'projects', 'contact'].map(section => (
            <a key={section} href={`#${section}`} onClick={() => setMenuOpen(false)}>
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </a>
          ))}
          <button
            onClick={() => {
              downloadResume();
              setMenuOpen(false);
            }}
            className="bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700 transition"
          >
            Resume Download
          </button>
        </nav>
      )}

      {/* Home Section */}
      <section id="home" className="bg-white px-6 md:px-20 py-20 flex flex-col-reverse md:flex-row items-center justify-between">
        <div className="max-w-xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            Hi, I'm <span className="text-gray-700">{personalInfo.name}!</span>
          </h2>
          <h1 className="text-4xl md:text-5xl font-extrabold text-purple-700 mb-4">Web Devloper</h1>
          <p className="text-gray-600 mb-6">{personalInfo.about}</p>
          <div className="flex flex-wrap gap-4">
            <a href="#projects" className="px-5 py-2 bg-gray-800 text-white rounded-xl hover:bg-gray-700 transition">
              PROJECTS
            </a>
            <a href="#contact" className="px-5 py-2 border-2 border-purple-700 text-purple-700 rounded-xl hover:bg-purple-700 hover:text-white transition">
              LET'S TALK
            </a>
          </div>
        </div>
        <div className="mb-8 md:mb-0">
          <img src="/photo1.jpg" alt="Profile" className="w-64 h-64 object-cover rounded-full shadow-lg border-4 border-purple-300" />
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects">
        <Projects />
      </section>

      {/* Experience Section */}
      {/* <section id="Experience" className="bg-white py-12 px-6 md:px-20">
        <Experience />
      </section> */}

      {/* Skills Section */}
      <section id="skills" className="bg-gray-100 py-12 px-6 md:px-20">
        <Skills />
      </section>

      {/* About Section */}
      <section id="about">
        <About downloadResume={downloadResume} />
      </section>

      {/* Contact Section */}
      <Contact />

      {/* Footer */}
      <footer className="bg-blue-600 text-white p-4 text-center mt-8">
        &copy; {new Date().getFullYear()} {personalInfo.name} | MCA Portfolio
      </footer>
    </div>
  );
}

export default App;
