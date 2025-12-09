import { getClientIp } from "./ip";
import { isSuspiciousUserAgent } from "./userAgent";
import { checkRateLimitMemory } from "./rateLimitMemory";

export type ApiGuardResult = {
  allowed: boolean;
  status?: number;
  message?: string;
};

export function guardApiRequest(req: Request, key: string): ApiGuardResult {
  const headers = req.headers;
  const ip = getClientIp(headers);
  const ua = headers.get("user-agent");

  if (isSuspiciousUserAgent(ua)) {
    return {
      allowed: false,
      status: 403,
      message: "Suspicious client",
    };
  }

  const id = `${key}:${ip}`;
  const ok = checkRateLimitMemory({
    id,
    max: Number(process.env.FASTDOWNER_RATE_MAX || 30),
    windowMs: Number(process.env.FASTDOWNER_RATE_WINDOW_MS || 60_000),
  });

  if (!ok) {
    return {
      allowed: false,
      status: 429,
      message: "Too many requests",
    };
  }

  return { allowed: true };
}
