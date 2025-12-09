import { NextResponse } from "next/server";
import type { Platform } from "@/lib/dvl/types";
import { mockResolveVideo } from "@/lib/dvl/mockVideoInfo";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const platform = (body.platform || "youtube") as Platform;
    const id = String(body.id || "").trim();

    if (!id) {
      return NextResponse.json({ error: "Missing video id" }, { status: 400 });
    }

    const info = await mockResolveVideo(platform, id);

    return NextResponse.json(info);
  } catch (e) {
    console.error("API /api/video/info error", e);
    return NextResponse.json({ error: "Internal error" }, { status: 500 });
  }
}
