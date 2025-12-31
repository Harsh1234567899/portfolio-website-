import React from 'react'
import CodeComponent from "../codeComponent/CodeComponent";
import { docsData } from "../../docs/docsData";


function OOPS() {
    const docs = docsData.javascript.oops
  return (
    <>
       <h1 className="text-3xl font-bold mb-4">JavaScript OOPS concepts</h1>
      <p className="text-gray-400 mb-6">
         oops and all other things
      </p>

      {docs.map((doc) => (
        <CodeComponent key={doc.id} text={doc.text} heading={doc.heading}>
          {doc.children}
        </CodeComponent>
      ))} 
    </>
  )
}

export default OOPS