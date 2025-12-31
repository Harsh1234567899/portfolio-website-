import React from 'react'
import CodeComponent from '../codeComponent/CodeComponent'
import { docsData } from '../../docs/docsData'

function Dom() {
    const docs = docsData.javascript.dom
  return (
    <>
        <h1 className="text-3xl font-bold mb-4">Document Object Model</h1>

      {docs.map((doc) => (
        <CodeComponent key={doc.id} text={doc.text} heading={doc.heading}>
          {doc.children}
        </CodeComponent>
      ))}
    </>
  )
}

export default Dom