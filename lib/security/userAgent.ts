const BAD_BOTS = [
  "curl",
  "wget",
  "python-requests",
  "scrapy",
  "httpclient",
  "java",
  "libhttp",
  "go-http-client"
];

export function isSuspiciousUserAgent(ua: string | null): boolean {
  if (!ua) return false;
  const low = ua.toLowerCase();
  return BAD_BOTS.some((b) => low.includes(b));
}
