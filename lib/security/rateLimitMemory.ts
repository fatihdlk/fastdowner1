type Bucket = {
  tokens: number;
  updatedAt: number;
};

const buckets = new Map<string, Bucket>();

type RateLimitOptions = {
  id: string;
  max: number;
  windowMs: number;
};

export function checkRateLimitMemory(opts: RateLimitOptions): boolean {
  const now = Date.now();
  const existing = buckets.get(opts.id);
  if (!existing) {
    buckets.set(opts.id, { tokens: 1, updatedAt: now });
    return true;
  }

  const elapsed = now - existing.updatedAt;
  if (elapsed > opts.windowMs) {
    existing.tokens = 1;
    existing.updatedAt = now;
    buckets.set(opts.id, existing);
    return true;
  }

  if (existing.tokens >= opts.max) {
    return false;
  }

  existing.tokens += 1;
  buckets.set(opts.id, existing);
  return true;
}
