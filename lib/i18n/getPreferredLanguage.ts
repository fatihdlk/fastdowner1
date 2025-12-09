import { languages } from "./languages";

export function getPreferredLanguage(acceptLang: string): string {
  const preferred = acceptLang.split(",")[0].split("-")[0];
  return languages.includes(preferred) ? preferred : "en";
}
