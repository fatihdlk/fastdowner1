import type { Platform, VideoInfo } from "./types";

export async function getVideoInfoFromApi(platform: Platform, id: string): Promise<VideoInfo | null> {
  try {
    const res = await fetch("/api/video/info", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ platform, id }),
      cache: "no-store",
    });

    if (!res.ok) {
      console.error("getVideoInfoFromApi error status", res.status);
      return null;
    }

    const data = (await res.json()) as VideoInfo;
    return data;
  } catch (e) {
    console.error("getVideoInfoFromApi error", e);
    return null;
  }
}
