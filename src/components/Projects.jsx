import React, { useState } from "react";
import { personalInfo } from "../data";

const Projects = () => {
    const [expanded, setExpanded] = useState(null);

    return (
        <section className="px-4 py-10 max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">Projects</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {personalInfo.projects.map((project, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col"
                    >
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-48 object-cover rounded-t-xl"
                        />
                        <div className="p-4 flex flex-col flex-grow">
                            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                            <div
                                className="text-gray-600 text-sm break-words"
                                dangerouslySetInnerHTML={{
                                    __html:
                                        expanded === index
                                            ? project.desc
                                            : project.desc.length > 100
                                                ? project.desc.slice(0, 100) + "..."
                                                : project.desc,
                                }}
                            />
                            {project.desc.length > 100 && (
                                <button
                                    onClick={() =>
                                        setExpanded(expanded === index ? null : index)
                                    }
                                    className="text-purple-600 hover:underline text-sm mt-2"
                                >
                                    {expanded === index ? "Show Less" : "Read More"}
                                </button>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
