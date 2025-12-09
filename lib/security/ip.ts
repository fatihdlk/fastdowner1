export function getClientIp(headers: Headers): string {
  const viaHeader =
    headers.get("x-forwarded-for") ||
    headers.get("x-real-ip") ||
    headers.get("cf-connecting-ip") ||
    "";
  const ip = viaHeader.split(",")[0].trim();
  return ip || "0.0.0.0";
}
