export function detectLanguage(headers: Headers): string {
  const accept = headers.get("accept-language") || "";
  const lang = accept.split(",")[0].split("-")[0];
  return lang || "en";
}
