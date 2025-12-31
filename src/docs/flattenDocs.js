import { docsData } from "./docsData";

export function flattenDocs() {
  return Object.entries(docsData).flatMap(
    ([tech, pages]) =>
      Object.entries(pages).flatMap(
        ([page, docs]) =>
          docs.map(doc => ({
            ...doc,
            tech,
            page,
          }))
      )
  );
}
