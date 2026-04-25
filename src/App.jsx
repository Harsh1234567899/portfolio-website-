import React, { useState } from 'react';
import { personalInfo } from './data';
import Contact from './components/Contact';
import Skills from './components/Skills';
import Experience from './components/Experience';
import About from './components/About';
import Projects from './components/Projects';
import DocsLayout from './code/DocsLayout';
import theme from './theme';

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
    <div className={`font-sans ${theme.textBody} ${theme.bgPrimary}`}>

      {/* ── Navbar (30% gray-600) ─────────────────────────── */}
      <header className={`${theme.navBg} shadow-lg p-4 flex items-center justify-between md:px-12 sticky top-0 z-50`}>
        <h1 className={`text-xl font-bold ${theme.brandTextNav}`}>{personalInfo.name}</h1>

        <nav className={`hidden md:flex flex-1 justify-center space-x-8 ${theme.navText} font-medium`}>
          {['home', 'projects', 'Experience', 'skills', 'about', 'contact'].map(s => (
            <a key={s} href={`#${s}`} className={`${theme.navHover} transition-colors duration-200`}>
              {s.charAt(0).toUpperCase() + s.slice(1)}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <button onClick={downloadResume} className={`${theme.btnPrimary} px-5 py-2 rounded-xl shadow`}>
            Resume Download
          </button>
        </div>

        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className={`text-2xl ${theme.textOnSecondary}`}>
            ☰
          </button>
        </div>
      </header>

      {/* ── Mobile Menu ───────────────────────────────────── */}
      {menuOpen && (
        <nav className={`flex flex-col ${theme.navBg} shadow-md p-4 md:hidden space-y-3 ${theme.navText}`}>
          {['home', 'about', 'skills', 'projects', 'Experience', 'contact'].map(s => (
            <a
              key={s}
              href={`#${s}`}
              onClick={() => setMenuOpen(false)}
              className={`${theme.navHover} transition-colors duration-200`}
            >
              {s.charAt(0).toUpperCase() + s.slice(1)}
            </a>
          ))}
          <button
            onClick={() => { downloadResume(); setMenuOpen(false); }}
            className={`${theme.btnPrimary} px-4 py-2 rounded-xl mt-2`}
          >
            Resume Download
          </button>
        </nav>
      )}

      {/* ── Home (60% white) ──────────────────────────────── */}
      <section id="home" className={`${theme.sectionWhite} px-6 md:px-20 py-24 flex flex-col-reverse md:flex-row items-center justify-between`}>
        <div className="max-w-xl">
          <h2 className={`text-3xl md:text-4xl font-bold mb-2 ${theme.textHeading}`}>
            Hi, I'm <span className="font-extrabold">{ personalInfo.name}!</span>
          </h2>
          <h1 className={`text-4xl md:text-5xl font-extrabold ${theme.textAccent} mb-4`}>Web Developer</h1>
          <p className={`${theme.textBody} mb-6 leading-relaxed`}>{personalInfo.about}</p>
          <div className="flex flex-wrap gap-4">
            <a href="#projects" className={`px-6 py-2 rounded-xl shadow ${theme.btnPrimary}`}>
              PROJECTS
            </a>
            <a href="#contact" className={`px-6 py-2 rounded-xl ${theme.btnOutline}`}>
              LET'S TALK
            </a>
          </div>
        </div>
        <div className="mb-8 md:mb-0">
          <img
            src="/photo1.jpg"
            alt="Profile"
            className={`w-64 h-64 object-cover rounded-full shadow-xl ${theme.imgBorder}`}
          />
        </div>
      </section>

      {/* ── Projects (60% white / light gray) ────────────── */}
      <section id="projects" className={theme.sectionWhite}>
        <Projects />
      </section>

      {/* ── Experience (30% gray-600) ─────────────────────── */}
      <section id="Experience" className={`${theme.sectionGray} py-12 px-6 md:px-20`}>
        <Experience />
      </section>

      {/* ── Skills (60% white) ────────────────────────────── */}
      <section id="skills" className={`${theme.sectionWhite} py-12 px-6 md:px-20`}>
        <Skills />
      </section>

      {/* ── About (30% gray-600) ──────────────────────────── */}
      <section id="about" className={theme.sectionGray}>
        <About downloadResume={downloadResume} />
      </section>

      {/* ── Contact (60% white) ───────────────────────────── */}
      <Contact />

      {/* ── Footer (30% gray-600) ─────────────────────────── */}
      <footer className={`${theme.footerBg} ${theme.footerText} p-6 text-center text-sm`}>
        &copy; {new Date().getFullYear()}{' '}
        <span className="font-bold">{personalInfo.name}</span> 
      </footer>
    </div>
  );
}

export default App;
