ULTRA V5 MODÜL 7 — Security & Anti-Bot Shield

Bu modül neler ekler?

- lib/security/ip.ts
  IP tespiti (x-forwarded-for, x-real-ip, cf-connecting-ip)

- lib/security/userAgent.ts
  Bilinen kötü bot user-agent listesini kontrol eder

- lib/security/rateLimitMemory.ts
  Basit in-memory rate limit (IP bazlı kova sistemi)

- lib/security/apiGuard.ts
  API endpoint'lerine kolayca eklenebilen güvenlik katmanı

Kullanım örneği (herhangi bir /api/route.ts dosyasında):

  import { NextResponse } from "next/server";
  import { guardApiRequest } from "@/lib/security/apiGuard";

  export async function POST(req: Request) {
    const guard = guardApiRequest(req, "download-api");
    if (!guard.allowed) {
      return NextResponse.json({ error: guard.message }, { status: guard.status });
    }

    // buradan sonrası gerçek iş mantığı
  }

Çevre değişkenleri (opsiyonel):

  FASTDOWNER_RATE_MAX=30
  FASTDOWNER_RATE_WINDOW_MS=60000

Not: Bu in-memory rate limiter, tek instance için uygundur.
Daha sonra Redis / Upstash gibi bir servise geçirilerek
dağıtık ortama da uyarlanabilir.
