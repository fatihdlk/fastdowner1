export function normalizeUrl(raw) {
  if (!raw || typeof raw !== "string") return "";
  const url = raw.trim();
  if (!url) return "";
  if (url.startsWith("http://") || url.startsWith("https://")) return url;
  return "https://" + url;
}
