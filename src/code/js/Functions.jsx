import CodeComponent from "../codeComponent/CodeComponent";
import { docsData } from "../../docs/docsData";

export default function Functions() {
  const docs = docsData.javascript.functions;
  return (
    <>
      <h1 className="text-3xl font-bold mb-4">JavaScript Functions</h1>
      <p className="text-gray-400 mb-6">
        Functions are reusable blocks of code.
      </p>

      {docs.map((doc) => (
        <CodeComponent key={doc.id} text={doc.text} heading={doc.heading}>
          {doc.children}
        </CodeComponent>
      ))}   </>
  );
}
