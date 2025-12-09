import type { Platform, VideoInfo } from "./types";

export async function mockResolveVideo(platform: Platform, id: string): Promise<VideoInfo> {
  const cleanPlatform = platform.toLowerCase();

  return {
    platform: cleanPlatform,
    id,
    originalUrl: `https://www.${cleanPlatform}.com/watch?v=${id}`,
    title: `Örnek ${cleanPlatform} videosu (${id})`,
    description:
      "Bu alan, gerçek sistemde videonun açıklaması ile doldurulacaktır. Fastdowner ile bu videoyu yüksek kalitede ve ücretsiz indirebilirsiniz.",
    thumbnailUrl: "https://fastdowner.net/og-default.png",
    durationSeconds: 120,
    author: "Fastdowner Demo",
  };
}
