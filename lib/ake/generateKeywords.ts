import { cleanText } from "./cleanText";
import { expandKeywords } from "./expandKeywords";
import { translateKeywords } from "./translateKeywords";

export function generateKeywords(title: string, description: string) {
  const base = cleanText(title + " " + description)
    .split(" ")
    .filter((w) => w.length > 2)
    .slice(0, 20);

  const expanded = expandKeywords(base);
  const translated = translateKeywords(expanded);

  return {
    base,
    expanded,
    translated,
  };
}
