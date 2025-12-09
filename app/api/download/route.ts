import { NextResponse } from "next/server";

const BACKEND_URL =
  process.env.FASTDOWNER_BACKEND_URL || "http://127.0.0.1:4001";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const res = await fetch(`${BACKEND_URL}/api/v1/download`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    const data = await res.json();
    return NextResponse.json(data, { status: res.status });
  } catch (e) {
    console.error("frontend /api/download error", e);
    return NextResponse.json({ error: "frontend_download_failed" }, { status: 500 });
  }
}
