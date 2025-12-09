import type { DynamicVideoSEO, VideoInfo } from "./types";

function shorten(text: string, max: number): string {
  if (!text) return "";
  if (text.length <= max) return text;
  return text.slice(0, max - 1).trimEnd() + "…";
}

export function generateDynamicVideoSEO(info: VideoInfo): DynamicVideoSEO {
  const baseTitle = info.title || "Video indir";
  const platformPretty = info.platform.charAt(0).toUpperCase() + info.platform.slice(1);
  const h1 = `${platformPretty} video indir`;
  const title = `${baseTitle} – ${platformPretty} video indir – Fastdowner`;
  const description =
    shorten(
      info.description ||
        `${platformPretty} videosunu Fastdowner ile hızlı ve ücretsiz indir. Filigransız, yüksek kalite ve çoklu format desteği.`,
      155
    );

  const canonicalUrl = `https://fastdowner.net/v/${info.platform}/${info.id}`;

  const ogImage = info.thumbnailUrl || "https://fastdowner.net/og-default.png";

  const schema = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: info.title || baseTitle,
    description: description,
    thumbnailUrl: [ogImage],
    uploadDate: new Date().toISOString(),
    publisher: {
      "@type": "Organization",
      name: "Fastdowner",
      url: "https://fastdowner.net",
    },
    potentialAction: {
      "@type": "WatchAction",
      target: [info.originalUrl || canonicalUrl],
    },
  };

  return {
    title,
    description,
    h1,
    canonicalUrl,
    ogImage,
    schema,
  };
}
