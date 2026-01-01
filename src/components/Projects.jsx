import React, { useEffect, useRef, useState } from "react";
import { personalInfo } from "../data";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const modalRef = useRef(null);

  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") closeModal();
    }
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
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      closeModal();
    }
  }

  return (
    <section className="px-4 py-16 max-w-7xl mx-auto">
      <h2 className="text-4xl font-extrabold mb-10 text-center">
        Projects
      </h2>

      {/*  CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {personalInfo.projects.map((project, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col cursor-pointer"
            onClick={() => openModal(project)}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover rounded-t-xl"
            />

            <div className="bg-slate-800 p-4 flex flex-col flex-grow text-white rounded-b-xl">
              <h3 className="text-xl font-semibold mb-2">
                {project.title}
              </h3>
              <div
                className="text-slate-300 text-sm line-clamp-3"
                dangerouslySetInnerHTML={{ __html: project.desc }}
              />
            </div>
          </div>
        ))}
      </div>

      {/*  MODAL  */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center px-4"
          onMouseDown={onOverlayClick}
        >
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />

          <div
            ref={modalRef}
            onMouseDown={(e) => e.stopPropagation()}
            className="relative w-full max-w-3xl max-h-[80vh] bg-slate-900 text-white rounded-2xl shadow-2xl overflow-hidden z-10 flex flex-col"
          >
            <button
              onClick={closeModal}
              aria-label="Close modal"
              className="absolute top-3 right-3 z-20
                         w-9 h-9 rounded-full
                         bg-slate-800/80 hover:bg-slate-700
                         flex items-center justify-center
                         text-white text-lg"
            >
              ✕
            </button>

            <div className="h-56 bg-slate-950 flex items-center justify-center">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="max-h-full max-w-full object-contain"
              />
            </div>

            <div className="p-6 flex flex-col overflow-y-auto">
              <h3 className="text-2xl font-bold mb-4">
                {selectedProject.title}
              </h3>

              {selectedProject.subtitle && (
                <p className="text-slate-400 mb-4">
                  {selectedProject.subtitle}
                </p>
              )}

              <div
                className="text-slate-300 text-sm leading-relaxed"
                dangerouslySetInnerHTML={{ __html: selectedProject.desc }}
              />

              {selectedProject.technologies && (
                <div className="mt-4 flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs px-3 py-1 rounded-full bg-slate-800 border border-slate-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}

              <div className="mt-6 flex gap-4">
                {selectedProject.link && (
                  <a
                    href={selectedProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-lg border border-slate-600 hover:bg-slate-800"
                  >
                    Live Demo
                  </a>
                )}

                {selectedProject.repo && (
                  <a
                    href={selectedProject.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-lg bg-purple-600 hover:bg-purple-500 text-white"
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









