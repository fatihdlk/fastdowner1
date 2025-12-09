export function isValidUrl(url: string): boolean {
  try {
    const u = new URL(url);
    return !!u.protocol && !!u.host;
  } catch {
    return false;
  }
}

export function detectPlatform(url: string): "youtube"|"tiktok"|"instagram"|"other" {
  if (!isValidUrl(url)) return "other";
  const u = new URL(url);
  const host = u.hostname.toLowerCase();
  if (host.includes("youtube") || host.includes("youtu.be")) return "youtube";
  if (host.includes("tiktok")) return "tiktok";
  if (host.includes("instagram")) return "instagram";
  return "other";
}
