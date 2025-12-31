import { useState } from "react";
import { Outlet, NavLink, Link } from "react-router-dom";
import { sections } from "./DocsRouter.js";
import { searchDocs } from "../docs/searchDocs";
import { slugify } from "../docs/slugify.js";
import ScrollToHash from './ScrollToHash.jsx'

export default function DocsLayout() {
  // ✅ start closed — avoids mismatch bugs
  const [openSection, setOpenSection] = useState(null);
  const [query, setQuery] = useState("");

  const results = searchDocs(query);

  return (
    <div className="min-h-screen bg-slate-900 text-white flex">
      <aside className="w-64 border-r border-gray-700 p-5 sticky top-0 h-screen overflow-y-auto">
        <h2 className="text-xl font-bold mb-4">Docs</h2>

        {/* SEARCH */}
        <input
          type="text"
          placeholder="Search docs..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full mb-4 px-3 py-2 text-sm bg-gray-800 rounded"
        />

        {/* SEARCH MODE */}
        {query ? (
          <div className="space-y-2">
            {results.length === 0 && (
              <p className="text-sm text-gray-400">No results</p>
            )}

            {results.map((doc) => (
              <Link
                key={doc.heading}
                to={`${doc.path}#${slugify(doc.heading)}`}
                onClick={() => setQuery("")}
                className="block p-2 rounded bg-gray-800 hover:bg-gray-700"
              >
                {doc.heading}
              </Link>
            ))}
          </div>
        ) : (
          /* NORMAL SIDEBAR */
          sections.map((section) => {
            const isOpen = openSection === section.title;

            return (
              <div key={section.title} className="mb-4">
                <button
                  onClick={() =>
                    setOpenSection(isOpen ? null : section.title)
                  }
                  className="w-full flex justify-between items-center
                             text-left text-sm font-semibold uppercase
                             text-gray-300 hover:text-white"
                >
                  {section.title}

                  {/* ✅ CLEAR TOGGLE ICON */}
                  <span className="ml-2 text-xs">
                    {isOpen ? "^" : ">"}
                  </span>
                </button>

                {isOpen && (
                  <ul className="mt-2 ml-3 space-y-1">
                    {section.links.map((link) => (
                      <li key={link.path}>
                        <NavLink
                          to={link.path}
                          className={({ isActive }) =>
                            `block px-3 py-1 rounded text-sm ${
                              isActive
                                ? "bg-gray-800 text-white"
                                : "text-gray-400 hover:bg-gray-800"
                            }`
                          }
                        >
                          {link.label}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            );
          })
        )}
      </aside>

      <main className="flex-1 p-8 overflow-y-auto h-screen">
        <ScrollToHash/>
        <Outlet />
      </main>
    </div>
  );
}
