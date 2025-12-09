import { languages } from "./languages";

export function translateKeywords(keywords: string[]): Record<string, string[]> {
  const out: Record<string,string[]> = {};
  for (const lang of languages) {
    out[lang] = keywords; // TODO: gerçek çeviri API bağlanacak
  }
  return out;
}
