import React from 'react'
import CodeComponent from '../codeComponent/CodeComponent'
import { docsData } from "../../docs/docsData";
function Git() {
  const docs = docsData.git.git
  return (
    <>
        <h1 className="text-3xl font-bold mb-4">Git Commands</h1>
      {docs.map((doc) => (
        <CodeComponent key={doc.id} text={doc.text} heading={doc.heading}>
          {doc.children}
        </CodeComponent>
      ))}
    </>
  )
}

export default Git