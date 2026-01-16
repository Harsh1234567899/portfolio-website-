import React from 'react'
import CodeComponent from '../codeComponent/CodeComponent'
import { docsData } from '../../docs/docsData'

function Backend() {
    const docs = docsData.backend.backend
  return (
    <>
        <h1 className="text-3xl font-bold mb-4">Backend setup with all functionality</h1>
      {docs.map((doc) => (
        <CodeComponent key={doc.id} text={doc.text} heading={doc.heading}>
          {doc.children}
        </CodeComponent>
      ))}
    </>
  )
}

export default Backend