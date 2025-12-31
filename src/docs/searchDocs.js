import { docsData } from "./docsData";

export function searchDocs(query) {
  if (!query || typeof query !== "string") return [];

  const qWords = query
    .toLowerCase()
    .trim()
    .split(/\s+/);

  const results = [];

  Object.values(docsData).forEach((tech) => {
    Object.values(tech).forEach((pages) => {
      pages.forEach((doc) => {
        if (!doc.heading) return;

        const hWords = doc.heading
          .toLowerCase()
          .trim()
          .split(/\s+/);

        // 🔑 PHRASE MATCH (sliding window)
        let match = false;

        for (let i = 0; i <= hWords.length - qWords.length; i++) {
          match = qWords.every((qw, idx) =>
            hWords[i + idx].startsWith(qw)
          );
          if (match) break;
        }

        if (match) {
          results.push(doc);
        }
      });
    });
  });

  return results;
}
