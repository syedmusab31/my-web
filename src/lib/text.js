/*
  Copy uses *asterisks* to mark the words set in the serif italic accent.
  "Websites that *earn their keep.*" -> [{ text, accent }]
*/
export function parseAccent(input) {
  return input
    .split(/(\*[^*]+\*)/g)
    .filter(Boolean)
    .map((part) =>
      part.startsWith("*")
        ? { text: part.slice(1, -1), accent: true }
        : { text: part, accent: false },
    );
}

// Same as parseAccent, but split down to single words for staggered reveals.
export function accentWords(input) {
  return parseAccent(input).flatMap(({ text, accent }) =>
    text
      .split(/\s+/)
      .filter(Boolean)
      .map((word) => ({ word, accent })),
  );
}

export function initials(name) {
  return name
    .split(/\s+/)
    .slice(0, 2)
    .map((n) => n[0])
    .join("")
    .toUpperCase();
}

export const pad = (n) => String(n).padStart(2, "0");
