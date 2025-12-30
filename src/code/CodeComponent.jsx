import React, { useState } from 'react'
import { useEffect, useRef } from "react";
import Prism from "prismjs";


function CodeComponent({heading = '',text = '', children, language = "javascript" }) {
    const codeRef = useRef(null);

    const [copied, setCopied] = useState(false);
  useEffect(() => {
    // Highlight after render
    Prism.highlightElement(codeRef.current);
  }, [children]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(children.trim());
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (err) {
      console.error("Copy failed", err);
    }
  };
  return (
    <>
    <div className="relative rounded-xl border border-gray-700 bg-gray-900 p-5 space-y-3 mb-5">
      
      {/* Header */}
      <div className="flex items-start justify-between gap-4">
        <div>
          {heading && (
            <h3 className="text-lg font-semibold text-white">
              {heading}
            </h3>
          )}
          {text && (
            <p className="text-sm text-gray-400">
              {text}
            </p>
          )}
        </div>

        {/* Copy Button */}
        <button
          onClick={handleCopy}
          className="text-xs px-3 py-1 rounded-md border border-gray-600
                     text-gray-300 hover:bg-gray-800 transition"
        >
          {copied ? "Copied!" : "Copy"}
        </button>
      </div>

      {/* Code */}
      <pre className={`line-numbers language-${language} rounded-lg overflow-x-auto`}>
        <code
          ref={codeRef}
          className={` language-${language} text-sm`}
        >
          {children.trim()}
        </code>
      </pre>

      {/* Footer */}
      <div className="text-right">
        <span className="text-xs text-gray-400 uppercase tracking-wide">
          {language}
        </span>
      </div>
    </div>
    </>
  )
}

export default CodeComponent