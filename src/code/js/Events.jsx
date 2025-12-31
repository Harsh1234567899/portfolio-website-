import React from 'react'
import { docsData } from '../../docs/docsData'
import CodeComponent from '../codeComponent/CodeComponent'

function Events() {
    const docs = docsData.javascript.events
  return (
    <>
          <h1 className="text-3xl font-bold mb-4">JavaScript Events</h1>
      

      {docs.map((doc) => (
        <CodeComponent key={doc.id} text={doc.text} heading={doc.heading}>
          {doc.children}
        </CodeComponent>
      ))} 
    </>
  )
}

export default Events