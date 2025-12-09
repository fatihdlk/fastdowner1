export function shortenUrl(url: string, max = 40): string {
  if (url.length <= max) return url;
  return url.slice(0, max - 3) + "...";
}
