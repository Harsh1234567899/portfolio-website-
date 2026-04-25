import React, { useEffect, useRef, useState } from "react";
import { personalInfo } from "../data";
import theme from "../theme";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const modalRef = useRef(null);

  useEffect(() => {
    function onKey(e) { if (e.key === "Escape") closeModal(); }
    if (selectedProject) document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [selectedProject]);

  function openModal(project) {
    setSelectedProject(project);
    document.documentElement.style.overflow = "hidden";
  }
  function closeModal() {
    setSelectedProject(null);
    document.documentElement.style.overflow = "";
  }
  function onOverlayClick(e) {
    if (modalRef.current && !modalRef.current.contains(e.target)) closeModal();
  }

  return (
    <section className={`px-4 py-16 max-w-7xl mx-auto ${theme.sectionWhite}`}>
      <h2 className={`text-4xl font-extrabold mb-2 text-center ${theme.textHeading}`}>
        Projects
      </h2>
      <p className={`text-center ${theme.textMuted} mb-10`}>A showcase of my work and personal projects.</p>

      {/* ── CARDS ── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 ">
        {personalInfo.projects.map((project, index) => (
          <div
            key={index}
            className={`group ${theme.cardOnWhite} rounded-xl ${theme.cardHoverWhite} flex flex-col cursor-pointer overflow-hidden `}
            onClick={() => openModal(project)}
          >
            {/* Image with hover overlay */}
            <div className="relative overflow-hidden rounded-t-xl h-48">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/55 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white text-sm font-semibold tracking-widest uppercase border border-white/60 px-4 py-2 rounded-full backdrop-blur-sm">
                  View Details
                </span>
              </div>
            </div>

            <div className="p-4 flex flex-col flex-grow">
              <h3 className={`text-xl font-semibold mb-2 ${theme.textHeading} group-hover:text-gray-600 transition-colors duration-300`}>
                {project.title}
              </h3>
              <div
                className={`${theme.textBody} text-sm line-clamp-3`}
                dangerouslySetInnerHTML={{ __html: project.desc }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* ── MODAL ── */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4" onMouseDown={onOverlayClick}>
          <div className={`absolute inset-0 ${theme.modalOverlay}`} />

          <div
            ref={modalRef}
            onMouseDown={(e) => e.stopPropagation()}
            className={`relative w-full max-w-3xl max-h-[80vh] ${theme.modalBg} rounded-2xl shadow-2xl overflow-hidden z-10 flex flex-col`}
          >
            <button
              onClick={closeModal}
              aria-label="Close modal"
              className={`absolute top-3 right-3 z-20 w-9 h-9 rounded-full ${theme.modalClose} flex items-center justify-center text-lg font-bold transition`}
            >
              ✕
            </button>

            <div className="h-56 bg-gray-100 flex items-center justify-center">
              <img src={selectedProject.image} alt={selectedProject.title} className="max-h-full max-w-full object-contain" />
            </div>

            <div className="p-6 flex flex-col overflow-y-auto">
              <h3 className={`text-2xl font-bold mb-4 ${theme.textHeading}`}>{selectedProject.title}</h3>

              {selectedProject.subtitle && (
                <p className={`${theme.textMuted} mb-4`}>{selectedProject.subtitle}</p>
              )}

              <div
                className={`${theme.textBody} text-sm leading-relaxed`}
                dangerouslySetInnerHTML={{ __html: selectedProject.desc }}
              />

              {selectedProject.technologies && (
                <div className="mt-4 flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech, i) => (
                    <span key={i} className={theme.badge}>{tech}</span>
                  ))}
                </div>
              )}

              <div className="mt-6 flex gap-4">
                {selectedProject.link && (
                  <a
                    href={selectedProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`px-4 py-2 rounded-lg ${theme.btnOutline}`}
                  >
                    Live Demo
                  </a>
                )}
                {selectedProject.repo && (
                  <a
                    href={selectedProject.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`px-4 py-2 rounded-lg ${theme.btnPrimary}`}
                  >
                    GitHub Repo
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
